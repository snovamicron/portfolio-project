import React from 'react'
import { Container } from 'semantic-ui-react'
import Chat from './RoomChat'
import RoomFooter from './RoomFooter'
import RoomHeader from './RoomHeader'

const Room = ({ props }) => {
    const { setVisible, setComponent } = props
    return (
        <>
            <Container className='room' columns={1}>
                    <RoomHeader setVisible={setVisible} setComponent={setComponent}/>
                    <Chat/>
                    <RoomFooter/>
            </Container>
        </>
    )
}

export default Room
