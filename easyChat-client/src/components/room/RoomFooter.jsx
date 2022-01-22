import React,{ useState, useContext } from 'react';
import { Segment } from 'semantic-ui-react';
import { addMessage } from '../../services/api';
import { AccountContext } from '../../context/AccountProvider';

const RoomFooter = ({ id }) => {
  const [value, setValue] = useState('')
  const { accountData } = useContext(AccountContext)
  const handleMessage = async (e) => {
    if (e.code === 'Enter') {
      setValue('')
      const response = await addMessage({
        conversationId : id,
        senderId: accountData.googleId,
        message: value

      })
      console.log(response);
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
