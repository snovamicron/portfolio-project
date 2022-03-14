
// MUI components
import {
    TextField,
    Box
} from '@mui/material'
import { makeStyles, styled } from '@mui/styles'

const useStyles = makeStyles({
    wraper:{
        width:'40%',
        margin:'13px',
        backgroundColor:'#ffffff',
        borderRadius:'1.5px',
        boxShadow:'0 2px 4px 0 rgba(0,0,0,.23)',
    }
})

const SearchField = styled(TextField)({
    '& > div > input':{
        height:'36px',
        padding:'0 16px',
        fontSize:'0.89rem'
    },
    '& fieldset':{
        border:'none'
    }
})

const SearchBar = ()=>{
    const classes = useStyles()
    return (
        <>
            <Box className={classes.wraper}>
            <SearchField placeholder='search'/>
            </Box>
        </>
    )
}

export default SearchBar