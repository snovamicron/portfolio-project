import React, { useState, useContext } from 'react';
import { Sidebar, Segment, Container } from 'semantic-ui-react';
import Room from '../room/Room';
import { ConversationContext } from '../../context/ConversationProvider';
import ContactDpModal from '../modal/ContactDpModal'

const UserInfoSideBar = () => {
    const [ visible, setVisible ] = useState(false)
    const [ open, setOpen ] = useState(false)
    console.log(open);
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
                        <div className='USIheader'>
                            <i onClick={()=> setVisible(false)} className='fas fa-arrow-left'/>
                            <p>Contact Info</p>
                        </div>
                        <div className="USIname">
                        <img onClick={()=> setOpen(true)} src={roomChat.imageUrl} alt="contact dp" />
                            <ContactDpModal props={{ open, setOpen,imageUrl:roomChat.imageUrl}}/>
                            <p>{roomChat.name}</p>
                        </div>
                        <div className="USIdescription">
                            <h4>DESCIPTION</h4>
                        </div>
                    </Container>
                </Sidebar>
                <Sidebar.Pusher>
                    <Room setVisible={setVisible}/>
                </Sidebar.Pusher>
        </>
    );
};

export default UserInfoSideBar;
