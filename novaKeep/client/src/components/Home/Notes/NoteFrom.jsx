import { useState } from 'react'


//MUI component
import { TextField, Box, ClickAwayListener } from '@mui/material'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: 'auto',
        padding: 10,
        boxShadow: '0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%)',
        borderRadius: 5,
    },
    text: {
        margin: '5px !important',
        marginTop: '2px !important'
    }
})



const NoteFrom = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true)
    }
    const handleClickAway = () => {
        setOpen(false)
    }
    return (
        <>
        <ClickAwayListener onClickAway={handleClickAway}>
        <Box className={classes.container}>
            {open && <TextField className={classes.text}
                variant="standard"
                InputProps={{ disableUnderline: true }}
                placeholder='Title'
            />
            }
            <TextField
                className={classes.text}
                variant='standard'
                InputProps={{ disableUnderline: true }}
                placeholder='Take a note...'
                onClick={handleClick}
                multiline
            />
        </Box>
        </ClickAwayListener>
        </>
    )
}



export default NoteFrom