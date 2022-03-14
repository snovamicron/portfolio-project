import { useState, useRef, useContext } from 'react'
import { v4 as uuid } from 'uuid'

// API
import { new_note } from '../../../Services/NoteApi'

//MUI component
import { TextField, Box, ClickAwayListener } from '@mui/material'
import { makeStyles } from '@mui/styles'

// context
import { DataContext } from '../../../context/DataContextProvider'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: 'auto',
        padding: 6,
        boxShadow: '0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%)',
        borderRadius: 5,
        position:'relative',
        bottom:'35px'
    },
    text: {
        margin: '5px !important',
        marginTop: '2px !important',
    }
})

const dataObj = {
    id: "",
    heading: "",
    note : ""
}

const NoteFrom = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [noteObj, setNoteObj] = useState({ ...dataObj, id: uuid()})

    const { addNotes, token } = useContext(DataContext)

    const onTextChange = (e)=>{
        setNoteObj({ ...noteObj, [e.target.name]: e.target.value})
    }

    const containerRef = useRef()

    const handleClick = () => {
        containerRef.current.style.minHeight = '70px'
        setOpen(true)
    }
    const handleClickAway = async () => {
        containerRef.current.style.minHeight = '30px'
        if(noteObj.heading || noteObj.note){
            addNotes(oldArr => [...oldArr, noteObj])
            const response = await new_note({
                token,
                data:{
                    note_id: noteObj.id,
                    heading: noteObj.heading,
                    note:noteObj.note,
                    note_type:'notes'
                }
            })
            console.log(response.data)
        }
        setOpen(false)
        setNoteObj({ ...dataObj, id: uuid()})
    }
    return (
        <>
        <ClickAwayListener onClickAway={handleClickAway}>
        <Box className={classes.container}>
            {open && <TextField className={classes.text}
                variant="standard"
                InputProps={{ disableUnderline: true }}
                placeholder='Title'
                name='heading'
                onChange={onTextChange}
                value={noteObj.heading}
            />
            }
            <TextField
                className={classes.text}
                variant='standard'
                InputProps={{ disableUnderline: true }}
                placeholder='Take a note...'
                onClick={handleClick}
                multiline
                ref={containerRef}
                name='note'
                onChange={onTextChange}
                value={noteObj.note}
            />
        </Box>
        </ClickAwayListener>
        </>
    )
}



export default NoteFrom