import React,{ useContext } from 'react';
import { Segment } from 'semantic-ui-react';
import { addMessage } from '../../services/api';
import { AccountContext } from '../../context/AccountProvider';

const RoomFooter = ({ conversation, value, setValue }) => {
  const { accountData, socket } = useContext(AccountContext)

  const receiver = () =>{
    return conversation.membres.find( ele => ele !== accountData.googleId)
  }

  const handleMessage = async (e) => {
    if (e.code === 'Enter') {
      setValue('')
      const response = await addMessage({
        conversationId : conversation._id,
        senderId: accountData.googleId,
        message: value

      })
      console.log(response);
      
      socket.current.emit('sendMessage', {
        senderId: accountData.googleId,
        receiverId: receiver(),
        message: value,
        createdAt: Date.now()
      })
    }
  }
  return ( 
      <>
        <Segment className='roomFooter'>
           <i className='fas fa-laugh-beam' />
           <i className='fas fa-paperclip' />
           <input onKeyPress={(e)=> handleMessage(e)} onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder='Type...' />
           <i className='fas fa-microphone' />
        </Segment>
      </>
  )
};

export default RoomFooter;
