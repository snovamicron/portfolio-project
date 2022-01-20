import React, { useState } from 'react';
import { Sidebar, Segment, Container } from 'semantic-ui-react';
import Room from '../room/Room';



const SearchMessageSideBar = () => {
    const [ searchMessage, setSearchMessage ] = useState(false)
    console.log(searchMessage);
    return (
        <>
            <Sidebar
                as={Segment}
                animation='overlay'
                direction='right'
                onHide={() => {
                    setSearchMessage(false)
                }}
                visible={searchMessage}
                width='very wide'
                className='userInfoSideBar'
            >
                <Container className='USIcontainer'>
                    <div className='USIheader'>
                        <i onClick={() => setSearchMessage(false)} className='fas fa-arrow-left' />
                        <p>Contact Info</p>
                    </div>
                    <div className="USIdescription">
                        <p>this contact description</p>
                        <h4>About</h4>
                    </div>
                </Container>
            </Sidebar>
            <Sidebar.Pusher>
                <Room setSearchMessage={setSearchMessage} />
            </Sidebar.Pusher>
        </>
    );
};

export default SearchMessageSideBar;
