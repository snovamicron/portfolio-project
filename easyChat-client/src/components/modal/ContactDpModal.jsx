import React from 'react';
import { Container, Modal, Image } from 'semantic-ui-react'

const ContactDpModal = (props) => {
    const { open, setOpen, imageUrl } = props.props
    return (
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                size='tiny'
                className='contentDpModal'
            >
                 <Modal.Content
                 as={Container}
                 className='contentDpModal'
                 >
                    <Image src={imageUrl} size='large'></Image>
                 </Modal.Content>
            </Modal>
        </>
    );
};

export default ContactDpModal;
