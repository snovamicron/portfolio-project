import React, { useContext } from 'react'
import { ConversationContext } from '../../context/ConversationProvider'
import { AccountContext } from '../../context/AccountProvider'
import { Segment, Dropdown } from 'semantic-ui-react'

const RoomHeader = ({ setVisible, setComponent }) => {
    const { roomChat, setRoomChat } = useContext(ConversationContext)
    const { activeUsers } = useContext(AccountContext)
    return (
        <>
            <Segment className='roomHeader'>
                <div className='avtar'>
                    <img referrerPolicy='no-referrer' onClick={() => {
                        setVisible(true);
                        setComponent('UserInfo')
                    }} src={roomChat.imageUrl} alt="user dp" />
                    <p>{ activeUsers.find( users => users.userId === roomChat.googleId)?'Online':'Offline'}</p>
                </div>
                <div className='navigation'>
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
                            <Dropdown.Item onClick={() => {
                                setVisible(true);
                                setComponent('UserInfo')
                            }} icon='user' text='contact profile' />
                            <Dropdown.Item onClick={() => setRoomChat({})} icon='user close' text='close chat' />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Segment>
        </>
    )
}

export default RoomHeader
