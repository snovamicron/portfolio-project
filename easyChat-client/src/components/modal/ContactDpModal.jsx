import React from 'react';
import { Modal, Image } from 'semantic-ui-react'

const ContactDpModal = (props) => {
    const { open, setOpen, imageUrl } = props.props
    return (
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                size='tiny'
                dimmer='centered'
            >
                    <Image size='medium' src={imageUrl} wrapped />
            </Modal>
        </>
    );
};

export default ContactDpModal;
