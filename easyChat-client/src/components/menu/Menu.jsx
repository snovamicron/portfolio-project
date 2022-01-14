import React from 'react'
import { Grid } from 'semantic-ui-react'
import Header from './Header'
import SearchMenu from './Search.jsx'
import Conversation from './Conversation'


const Menu = () => {
    return (
        <>
            <Grid style={{ margin: 0, height: '100%' }}>
                <Grid.Row style={{ height: '10%', backgroundColor: '#8E05C2' }}>
                    <Header />
                </Grid.Row>
                <Grid.Row className='menuHeader'>
                    <SearchMenu />
                </Grid.Row>
                <Grid.Row className='menuBody'>
                    <Conversation/>
                </Grid.Row>
            </Grid>
        </>
    )
}

export default Menu
