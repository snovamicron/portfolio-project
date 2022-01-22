import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import Chat from './RoomChat'
import RoomFooter from './RoomFooter'
import RoomHeader from './RoomHeader'

const Room = ({ props }) => {
    const { setVisible, setComponent } = props
    const [id, setId] = useState('')

    return (
        <>
            <Container className='room' columns={1}>
                <RoomHeader setVisible={setVisible} setComponent={setComponent} />
                <Chat setId={setId} />
                <RoomFooter id={id} />
            </Container>
        </>
    )
}

export default Room
