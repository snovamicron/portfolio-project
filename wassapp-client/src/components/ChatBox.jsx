import React from 'react'
import { Grid, Modal } from 'semantic-ui-react'
import Menu from './menu/Menu'

const ChatBox = () => {
    return (
        <>
            <Modal
                open={true}
                size='fullscreen'
                style={{
                    height: '90vh',
                }}
            >
                <Modal.Content style={{ padding: 0, backgroundColor: '#1a1e20' }}>
                    <Grid celled style={{ margin: 0 }}>
                        <Grid.Row style={{ height: '93vh' }}>
                            <Grid.Column width={5} style={{ padding: 0 }}>
                                <Menu/>
                            </Grid.Column>
                            <Grid.Column width={11}> hello </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        </>
    )
}

export default ChatBox
