import React from 'react'
import { Grid, Modal } from 'semantic-ui-react'
import SideBarVisibleProvider from '../context/SideBarVisibleProvider'
import Room from './room/Room'
import InfoSideBar from './side-bar/InfoSideBar'

const ChatBox = () => {
    return (
        <>
            <Modal
                open={true}
                style={{
                    width:'91vw'
                }}
            >
                <Modal.Content style={{ padding: 0, backgroundColor: '#000000' }}>
                    <Grid style={{ margin: 0, height: '93vh'}} columns={2}>

                            <Grid.Column width={5} style={{ padding: 0, height:'100%' }}>
                            <SideBarVisibleProvider>
                                <InfoSideBar/>
                            </SideBarVisibleProvider>
                            </Grid.Column>

                            <Grid.Column width={11} >
                                <Room/>
                            </Grid.Column>
                    </Grid>
                </Modal.Content>
            </Modal>
        </>
    )
}

export default ChatBox
