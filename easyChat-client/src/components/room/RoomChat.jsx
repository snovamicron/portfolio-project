import React,{ useEffect, useContext, useState } from 'react'
import { Image, Segment } from 'semantic-ui-react'
import { ConversationContext } from '../../context/ConversationProvider'
import { AccountContext } from '../../context/AccountProvider'
import { getConversation } from '../../services/api'

const Chat = () => {
  const { roomChat } = useContext(ConversationContext)
  const { accountData } = useContext(AccountContext)
  const [ id, setId ] = useState('')
  const conversationId = async () =>{
    const res = await getConversation({
      senderId: accountData.googleId,
      receiverId: roomChat.googleId
    })
    setId(res.id)
  }
    useEffect(() => {
      conversationId()
    }, [roomChat.googleId])
  return (
    <>
      <Segment className='roomChat'>
        <Image src='doodleart.png' fluid /> 
        <p>this is chat</p>
      </Segment>
    </>
  )
}

export default Chat

