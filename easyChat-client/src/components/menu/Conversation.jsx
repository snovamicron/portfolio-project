import React, { useContext, useEffect, useState } from 'react'
import { Grid } from 'semantic-ui-react'
import { AccountContext } from '../../context/AccountProvider.jsx'
import { fatchUserData } from '../../services/api'
import { UserContext } from '../../context/UserProvider'
import { setConversation } from '../../services/api'
import { getConversation } from '../../services/api'
import { ConversationContext } from '../../context/ConversationProvider'


const Conversation = ({ text }) => {
    const { accountData, socket, setActiveUsers } = useContext(AccountContext)
    const { userData, setUserData } = useContext(UserContext)
    const { setRoomChat } = useContext(ConversationContext)
    const { googleId } = accountData
    const [lastMessage, setLastMessage] = useState([])
    const getData = async () => {
        const data = await fatchUserData(googleId)
        setUserData(data)
    }
    const handleClick = async (data) => {
        const { conversation, conversationInfo } = data
        setRoomChat(conversation)
        const response = await setConversation(conversationInfo)
        console.log(response);
    }
    const getLastMessage = async (data)=>{
        const res = await getConversation(data)
        setLastMessage([...lastMessage, res])
       
    }
    const showLastMessage = ()=>{
        console.log(lastMessage);
        return 'last message'
    }
    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
      socket.current.on('getUsers', users => {
        setActiveUsers(users)
      })
    });
    
    return (
        <>
            <Grid className='conversation' columns={1}>
                {userData.filter(ele => ele.name.toLowerCase().includes(text.toLowerCase())).map((ele) => {
                    if (ele.googleId !== googleId) {
                        getLastMessage({
                            senderId: googleId,
                            receiverId: ele.googleId
                        })
                        return (
                            <Grid.Column
                                className='conversationList'
                                key={ele.googleId}
                                onClick={() => {
                                    handleClick({
                                        conversationInfo: {
                                            senderId: googleId,
                                            receiverId: ele.googleId
                                        },
                                        conversation: ele
                                    })
                                }}
                            >
                                <div>
                                    <img referrerPolicy='no-referrer' src={ele.imageUrl} alt="" />
                                    <div>
                                    <p className='name'>{ele.name}</p>
                                    <p className="lastMessage">{
                                        showLastMessage()
                                    }</p>
                                    </div>
                                </div>
                            </Grid.Column>
                        )
                    } else {
                        return null
                    }
                })}
            </Grid>
        </>
    )
}

export default Conversation
