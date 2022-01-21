import React,{ useState } from 'react';
import { Input, Segment } from 'semantic-ui-react';
import { setMessage } from '../../services/api';

const RoomFooter = () => {
  const [botton, setButton] = useState('')
  return ( 
      <>
        <Segment className='roomFooter'>
           <i className='fas fa-laugh-beam' />
           <i className='fas fa-paperclip' />
           <Input onChange={(e)=>console.log(e)} size='mini' placeholder='type...' />
           <i className='fas fa-microphone' />
        </Segment>
      </>
  )
};

export default RoomFooter;
