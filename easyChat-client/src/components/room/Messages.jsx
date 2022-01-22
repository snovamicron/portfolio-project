import React, { useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { AccountContext } from '../../context/AccountProvider';

const Messages = ({ messages }) => {
  const { accountData } = useContext(AccountContext)
  // let now = new Date()
  // console.log(now);
  return (
    <>
      <Container className='message'>
        {
          messages.map((ele) => {
            if (ele.senderId === accountData.googleId) {
              let time = new Date(ele.createdAt)
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
                <div className="left">this is left message</div>
                )
              }
            })
          }
          <div  className="left">
            <span>
              <span className='text'>this is left message</span>
              <div className='time'>time</div>
            </span>
          </div>
      </Container>
    </>
  )
};

export default Messages;
