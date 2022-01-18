import React, { useContext } from 'react'
import { ConversationContext } from '../../context/ConversationProvider'
import { Grid, Segment } from 'semantic-ui-react'

const RoomHeader = () => {
    const { roomChat } = useContext(ConversationContext)
    console.log(roomChat);
    return (
        <>
            <Segment className='roomHeader'>
                <Grid columns={3}>
                    <Grid.Column width={14}>
                        <img src={roomChat.imageUrl} alt="user dp" />
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <i className='fas fa-search'/>
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <i className='fas fa-caret-down'/>
                    </Grid.Column>
                </Grid>
            </Segment>
        </>
    )
}

export default RoomHeader
