import React, { useContext, useEffect, useState } from 'react'
import { Grid } from 'semantic-ui-react'
import { AccountContext } from '../../context/AccountProvider.jsx'
import { fatchUserData } from '../../services/api'


const Conversation = () => {
    const { accountData } = useContext(AccountContext)
    const { googleId } = accountData
    const [porfileArr, setProfileArr] = useState([])
    const getData = async() => {
        const data = await fatchUserData(googleId)
         setProfileArr(data)
    }
    useEffect(async() => {
         getData()
         // eslint-disable-next-line
    },[])
    return (
        <>
            <Grid className='conversation' columns={1}>
                {porfileArr.map((ele)=>{
                    return <Grid.Column className='conversationList' key={ele.googleId}>
                        <div>
                        <img src={ele.imageUrl} alt="" />
                        <p>{ele.name}</p>
                        </div>
                    </Grid.Column>
                })}
            </Grid>
        </>
    )
}

export default Conversation
