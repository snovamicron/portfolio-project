import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import Header from './Header'
import SearchMenu from './Search.jsx'
import InfoSideBar from '../side-bar/InfoSideBar'


const Menu = () => {
    return (
        <>
            <Grid celled style={{ margin: 0, height: '100%' }}>
                <Grid.Row style={{ height: '10%', backgroundColor: '#4e585e' }}>
                    <Header />
                </Grid.Row>
                <Grid.Row className='menuHeader'>
                    <SearchMenu />
                </Grid.Row>
                <Grid.Row className='menuBody'>
                    <InfoSideBar/>
                </Grid.Row>
            </Grid>
        </>
    )
}

export default Menu
