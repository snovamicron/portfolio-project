import React, { useState, useContext } from 'react';
import { Sidebar, Segment, Container } from 'semantic-ui-react';
import Room from '../room/Room';
import UserInfo from './side-bar component/UserInfo';
import SearchInfo from './side-bar component/SearchInfo'
import RoomWallPaper from '../room/RoomWallPaper';
import { ConversationContext } from '../../context/ConversationProvider';


const UserInfoSideBar = () => {
    const [ visible, setVisible ] = useState(false)
    const [ component, setComponent ] = useState('UserInfo')
    const { roomChat } = useContext(ConversationContext)
    return (
        <>
                <Sidebar
                as={Segment}
                animation='overlay'
                direction='right'
                onHide={()=>{
                    setVisible(false)
                }}
                visible={visible}
                width='very wide'
                className='userInfoSideBar'
                >
                    <Container className='USIcontainer'>
                        {component === 'UserInfo' && <UserInfo setVisible={setVisible}/>}
                        {component === 'SearchInfo' && <SearchInfo setVisible={setVisible}/>}
                    </Container>
                </Sidebar>
                <Sidebar.Pusher>
                    {
                        Object.keys(roomChat).length > 0 ? <Room props={{
                            setVisible,
                            setComponent
                        }}/>:<RoomWallPaper/>   
                    }
                    
                </Sidebar.Pusher>
        </>
    );
};

export default UserInfoSideBar;
