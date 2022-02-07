import React, { useEffect, useContext, useState } from 'react'
import { Segment } from 'semantic-ui-react'
import { ConversationContext } from '../../context/ConversationProvider'
import { AccountContext } from '../../context/AccountProvider'
import { getConversation } from '../../services/api'
import { getMessage } from '../../services/api'
import Messages from './Messages'

const Chat = ({ conversation, setConversation, reload, setReload }) => {
  const { roomChat } = useContext(ConversationContext)
  const { accountData, socket, messages, setMessages } = useContext(AccountContext)
  const [incomingMessage, setIncomingMessage] = useState({})


  const getChatData = async () => {
    const res = await getConversation({
      senderId: accountData.googleId,
      receiverId: roomChat.googleId
    })
    setConversation(res)
    const msg = await getMessage({ id: res._id })
    setMessages(msg)
  }

  const handleMessageCall = async () => {
    const msg = await getMessage({ id: conversation._id })
    setMessages(msg)
    setReload(false)
  }

  useEffect(() => {
    socket.current.on('receiveMessage', (data) => {
      console.log(data)
      setIncomingMessage(data)
    })
  },[])

  useEffect(() => {
    setMessages([...messages, incomingMessage])
  },[incomingMessage,roomChat.googleId])

  useEffect(() => {
    getChatData()
  }, [roomChat.googleId])

  useEffect(() => {
    handleMessageCall()
  }, [reload])

  return (
    <>
      <Segment className='roomChat'>
        <Messages messages={messages} />
      </Segment>
    </>
  )
}

export default Chat

