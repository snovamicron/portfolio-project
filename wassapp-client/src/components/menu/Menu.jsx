import React from 'react'
import { Grid } from 'semantic-ui-react'
import Header from './Header'
import SearchMenu from './Search.jsx'


const Menu = () => {
    return (
        <>
            <Grid celled style={{ margin: 0 }}>
                <Grid.Row style={{ height: '9vh', backgroundColor: '#4e585e' }}>
                    <Header/>
                </Grid.Row>
                <Grid.Row style={{ height: '7vh', backgroundColor: '#1a1e20', justifyContent:'center', alignItems:'center' }}>
                    <SearchMenu/>
                </Grid.Row>
                <Grid.Row style={{ height: '77vh' }}>hi</Grid.Row>
            </Grid>
        </>
    )
}

export default Menu
