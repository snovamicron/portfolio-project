import React,{ useEffect, useContext, useState } from 'react'
import { Image, Segment } from 'semantic-ui-react'
import { ConversationContext } from '../../context/ConversationProvider'
import { AccountContext } from '../../context/AccountProvider'
import { getConversation } from '../../services/api'
import { getMessage } from '../../services/api'
import Messages from './Messages'

const Chat = ({ setId }) => {
  const { roomChat } = useContext(ConversationContext)
  const { accountData } = useContext(AccountContext)
  const [messages, setMessages] = useState([])

  const getChatData = async () =>{
    const res = await getConversation({
      senderId: accountData.googleId,
      receiverId: roomChat.googleId
    })
    setId(res.id)
    const msg = await getMessage({ id: res.id })
    setMessages(msg)
  }
    useEffect(() => {
      getChatData()
    }, [roomChat.googleId])
  return (
    <>
      <Segment className='roomChat'>
        <Messages messages={messages}/>
      </Segment>
    </>
  )
}

export default Chat

