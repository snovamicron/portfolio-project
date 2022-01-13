import React, { useContext, useState } from 'react'
import { SideBarVisibleContext } from '../../context/SideBarVisibleProvider'
import { AccountContext } from '../../context/AccountProvider'
import Menu from '../menu/Menu'
import {
    Container,
    Grid,
    Segment,
    Sidebar,
} from 'semantic-ui-react'

const InfoSideBar = () => {
    const [blure, setBlure] = useState(false)
    const { visible, setVisible } = useContext(SideBarVisibleContext)
    const { accountData } = useContext(AccountContext)
    return (
        <>

            <Sidebar.Pushable as={Segment} style={{ borderRadius: 0, backgroundColor: 'transparent' }}>
                <Sidebar
                    as={Container}
                    columns={1}
                    animation='overlay'
                    icon='labeled'
                    onHide={() => setVisible(false)}
                    visible={visible}
                    style={{
                        backgroundColor: '#000000',
                        width: '100%'
                    }}
                >
                    <div className='infoSegment-1 infoSegment'>
                        <i onClick={() => setVisible(false)} className='fas fa-arrow-left' />
                        <p>Profile</p>
                    </div>
                    <div className='infoSegment-2 infoSegment'>
                        <div onMouseEnter={() => setBlure(true)} onMouseLeave={() => setBlure(false)} className="Image">
                            <img src={accountData.imageUrl} alt="" />

                            <div style={{ display: `${blure ? '' : 'none'}` }} className="ImageChange">
                                <i className='fas fa-camera' />
                                <p>CHANGE PROFILE PHOTO</p>
                            </div>

                        </div>
                        <div className="description">
                            <Grid columns={2}>
                                <Grid.Column>
                                    <h4>Name</h4>
                                </Grid.Column>
                                <Grid.Column width={14}>
                                    <p>{accountData.name}</p>
                                </Grid.Column>
                                <Grid.Column width={2}>
                                    <i className='fas fa-pen' />
                                </Grid.Column>
                            </Grid>
                        </div>
                    </div>
                    <div className='infoSegment-3 infoSegment'>
                        <p>this is your description</p>
                    <div className="description">
                            <Grid columns={2}>
                                <Grid.Column>
                                    <h4>About</h4>
                                </Grid.Column>
                                <Grid.Column width={14}>
                                    <p>description</p>
                                </Grid.Column>
                                <Grid.Column width={2}>
                                    <i className='fas fa-pen' />
                                </Grid.Column>
                            </Grid>
                        </div>
                    </div>

                </Sidebar>
                <Sidebar.Pusher style={{ height: '100%' }}>
                    <Menu />
                </Sidebar.Pusher>
            </Sidebar.Pushable>

        </>
    )
}

export default InfoSideBar


