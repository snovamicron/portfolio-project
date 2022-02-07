import React from 'react'
import { Grid, Modal, Sidebar } from 'semantic-ui-react'
import InfoSideBar from './side-bar/InfoSideBar'
import UserInfoSideBar from './side-bar/UserInfoSideBar'

const ChatBox = () => {
    return (
        <>
            <Modal
                open={true}
                style={{
                    width: '91vw'
                }}
            >
                <Modal.Content style={{ padding: 0, backgroundColor: '#000000' }}>
                    <Grid style={{ margin: 0, height: '93vh' }} columns={2}>

                        <Grid.Column width={5} style={{ padding: 0, height: '100%' }}>
                            <InfoSideBar />
                        </Grid.Column>

                        <Sidebar.Pushable as={Grid.Column} width={11} >
                            <UserInfoSideBar/>
                        </Sidebar.Pushable>
                    </Grid>
                </Modal.Content>
            </Modal>
        </>
    )
}

export default ChatBox
