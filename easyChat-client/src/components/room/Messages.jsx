import React, { useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { AccountContext } from '../../context/AccountProvider';

const Messages = ({ messages }) => {
  const { accountData } = useContext(AccountContext)
  return (
    <>
      <Container className='message'>
        {
          messages.map((ele) => {
            let time = new Date(ele.createdAt)
            if (ele.senderId === accountData.googleId) {
              return (
                <div key={ele._id} className="right">
                  <span>
                    <span className='text'>{ele.message}</span>
                    <div className='time'>
                      {
                        time.getHours() > 12 ? `${time.getHours() - 12}:${time.getMinutes()} pm`:`${time.getHours()}:${time.getMinutes()} am`
                      }
                    </div>
                  </span>
                </div>
              )
            } else {
              return (
                <div key={ele._id} className="left">
                  <span>
                    <span className='text'>{ele.message}</span>
                    <div className='time'>
                      {
                        time.getHours() > 12 ? `${time.getHours() - 12}:${time.getMinutes()} pm`:`${time.getHours()}:${time.getMinutes()} am`
                      }
                    </div>
                  </span>
                </div>
                )
              }
            })
          }
      </Container>
    </>
  )
};

export default Messages;
