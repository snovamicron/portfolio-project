import React from 'react';
import { Container, Image } from 'semantic-ui-react';

const RoomWallPaper = () => {
  return (
      <>
      <Container className='roomWallpaper'>
          <h1>Welcome to easyChat</h1>
            <Image size='medium' src='./chatwallpaper.png'/>
          <p>Life is now easy fisy lemon squzyy</p>
      </Container>
      </>
  )
};

export default RoomWallPaper;
