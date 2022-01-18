import React, { useContext, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import { AccountContext } from '../../context/AccountProvider.jsx'
import { fatchUserData } from '../../services/api'
import { UserContext } from '../../context/UserProvider'
import { SideBarVisibleContext } from '../../context/SideBarVisibleProvider'
import { setConversation } from '../../services/api'
import { ConversationContext } from '../../context/ConversationProvider'


const Conversation = ({ text }) => {
    const { accountData } = useContext(AccountContext)
    const { userData, setUserData } = useContext(UserContext)
    const { setVisible } = useContext(SideBarVisibleContext)
    const { setRoomChat } = useContext(ConversationContext)
    const { googleId } = accountData
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
    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <Grid className='conversation' columns={1}>
                {userData.filter(ele => ele.name.toLowerCase().includes(text.toLowerCase())).map((ele) => {
                    if (ele.googleId !== googleId) {
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
                                    <img src={ele.imageUrl} alt="" />
                                    <p>{ele.name}</p>
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
