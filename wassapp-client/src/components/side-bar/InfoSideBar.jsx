import React, { useContext } from 'react'
import { SideBarVisibleContext } from '../../context/SideBarVisibleProvider'
import {
    Grid,
    Icon,
    Menu,
    Segment,
    Sidebar,
  } from 'semantic-ui-react'
import Conversation from '../menu/Conversation'

const InfoSideBar = () => {
    const { visible, setVisible } = useContext(SideBarVisibleContext)
    console.log(visible);
    return (
        <>
            <Grid columns={1} style={{padding:0}}>
                <Grid.Column style={{padding:0, height:'100%'}}>
                    <Sidebar.Pushable as={Segment}  style={{borderRadius:0, backgroundColor:'transparent'}}>
                        <Sidebar
                            as={Menu}
                            animation='overlay'
                            icon='labeled'
                            onHide={() => setVisible(false)}
                            vertical
                            visible={visible}
                            style={{
                                width:'100%',
                                backgroundColor:'green'
                            }}
                        >
                            <Menu.Item as='a'>
                                <Icon name='home' />
                                Home
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='gamepad' />
                                Games
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='camera' />
                                Channels
                            </Menu.Item>
                        </Sidebar>

                        <Sidebar.Pusher>
                            <Segment basic>
                                <Conversation/>
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Grid.Column>
            </Grid>

        </>
    )
}

export default InfoSideBar


