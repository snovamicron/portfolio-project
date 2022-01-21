import React, { useState, useContext } from 'react';
import { ConversationContext } from '../../../context/ConversationProvider';
import ContactDpModal from '../../modal/ContactDpModal'

const UserInfo = ({ setVisible }) => {
    const [ open, setOpen ] = useState(false)
    const { roomChat } = useContext(ConversationContext)
    return (
        <>
            <div className='USIheader'>
                <i onClick={() => setVisible(false)} className='fas fa-arrow-left' />
                <p>Contact Info</p>
            </div>
            <div className="USIname">
                <img onClick={() => setOpen(true)} src={roomChat.imageUrl} alt="contact dp" />
                <ContactDpModal props={{ open, setOpen, imageUrl: roomChat.imageUrl }} />
                <p>{roomChat.name}</p>
            </div>
            <div className="USIdescription">
                <p>this contact description</p>
                <h4>About</h4>
            </div>
        </>
    );
};

export default UserInfo;
