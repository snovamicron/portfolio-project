import React, { useContext } from 'react'
import { ConversationContext } from '../../context/ConversationProvider'
import { Segment } from 'semantic-ui-react'

const RoomHeader = ({ setVisible }) => {
    const { roomChat } = useContext(ConversationContext)
    return (
        <>
            <Segment className='roomHeader'>
                <img onClick={()=> setVisible(true)} src={roomChat.imageUrl} alt="user dp" />
                <div>
                <i className='fas fa-search'/>
                <i className='fas fa-caret-down'/>
                </div>
            </Segment>
        </>
    )
}

export default RoomHeader
