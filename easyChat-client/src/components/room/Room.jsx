import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import Chat from './RoomChat'
import RoomFooter from './RoomFooter'
import RoomHeader from './RoomHeader'

const Room = ({ props }) => {
    const { setVisible, setComponent } = props
    const [conversation, setConversation] = useState('')
    const [value, setValue] = useState('')

    return (
        <>
            <Container className='room' columns={1}>
                <RoomHeader setVisible={setVisible} setComponent={setComponent} />
                <Chat setConversation={setConversation} conversation={conversation} value={value}/>
                <RoomFooter conversation={conversation} value={value} setValue={setValue} />
            </Container>
        </>
    )
}

export default Room
