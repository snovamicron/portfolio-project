import React, { useContext } from 'react'
import { ConversationContext } from '../../context/ConversationProvider'
import { Segment, Dropdown } from 'semantic-ui-react'

const RoomHeader = ({ setVisible, setComponent }) => {
    const { roomChat, setRoomChat } = useContext(ConversationContext)
    return (
        <>
            <Segment className='roomHeader'>
                <img onClick={() => {
                    setVisible(true);
                    setComponent('UserInfo')
                }} src={roomChat.imageUrl} alt="user dp" />
                <div>
                    <i onClick={() => {
                        setVisible(true);
                        setComponent('SearchInfo')
                    }} className='fas fa-search' />
                    <Dropdown
                        icon='caret down'
                        floating
                        button
                        className='icon'
                        direction='left'
                    >
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>{
                                setVisible(true);
                                setComponent('UserInfo')
                            }} icon='user' text='contact profile' />
                            <Dropdown.Item onClick={()=> setRoomChat({})} icon='user close' text='close chat' />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Segment>
        </>
    )
}

export default RoomHeader
