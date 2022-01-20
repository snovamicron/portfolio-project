import React from 'react'
import { Container } from 'semantic-ui-react'
import Chat from './Chat'
import RoomHeader from './RoomHeader'

const Room = ({ setVisible, setSearchMessage }) => {
    return (
        <>
            <Container className='room' columns={1}>
                    <RoomHeader setVisible={setVisible} setSearchMessage={setSearchMessage}/>
                    <Chat/>
            </Container>
        </>
    )
}

export default Room
