import { useContext } from "react";


// MUI contents
import { Card, CardContent, CardActions, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Archive from '@mui/icons-material/ArchiveOutlined';
import Trash from '@mui/icons-material/DeleteOutlined';

// components
import { DataContext } from "../../../context/DataContextProvider";


const useStyles =   makeStyles({
    card:{
        width:240,
        margin:8,
        boxShadow:'none !important',
        border:'1px solid #e0e0e0'
    },
    icon:{
        justifyContent:'flex-end'
    }
})

const NoteCard = ({ note })=>{
    const classes = useStyles()
    const { setArchive, setDeleted, notes, addNotes } = useContext(DataContext)
    const onArchive = ()=>{
       setArchive( oldArr => [...oldArr, notes.find(ele => ele.id === note.id)])
        let updatedNotes = notes
        updatedNotes.splice(notes.findIndex(ele => ele.id === note.id), 1)
        addNotes(updatedNotes)
    }
    const onDelete = ()=>{
        setDeleted( oldArr => [...oldArr, notes.find(ele => ele.id === note.id)])
        let updatedNotes = notes
        updatedNotes.splice(notes.findIndex(ele => ele.id === note.id), 1)
        addNotes(updatedNotes)
    }
    return(
        <>
            <Card className={classes.card}>
                <CardContent>
                    <Typography>
                        {note.heading}
                    </Typography>
                    <Typography>
                        {note.note}
                    </Typography>
                </CardContent>
                    <CardActions className={classes.icon}>
                    <Archive
                    fontSize='small'
                    onClick={onArchive} 
                    />
                    <Trash
                    fontSize='small' 
                    onClick={onDelete}
                    />
                    </CardActions>
            </Card>
        </>
    )
}

export default NoteCard