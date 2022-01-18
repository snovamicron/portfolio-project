import React from 'react'
import { Grid } from 'semantic-ui-react'
import Chat from './Chat'
import RoomHeader from './RoomHeader'

const Room = () => {
    return (
        <>
            <Grid className='room' columns={1}>
                <Grid.Column>
                    <RoomHeader/>
                </Grid.Column>
                <Grid.Column>
                    <Chat/>
                </Grid.Column>
            </Grid>
        </>
    )
}

export default Room
