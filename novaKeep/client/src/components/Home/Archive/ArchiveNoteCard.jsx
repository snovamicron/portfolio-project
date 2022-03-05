import { useContext } from "react";


// MUI contents
import { Card, CardContent, CardActions, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
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

const ArchiveNoteCard = ({ note })=>{
    const classes = useStyles()
    const { setArchive, setDeleted, archive, addNotes } = useContext(DataContext)
    const onUnArchive = ()=>{
        addNotes( oldArr => [...oldArr, archive.find(ele => ele.id === note.id)])
        let updatedNotes = archive
        updatedNotes.splice(archive.findIndex(ele => ele.id === note.id), 1)
        setArchive(updatedNotes)
    }
    const onDelete = ()=>{
        setDeleted( oldArr => [...oldArr, archive.find(ele => ele.id === note.id)])
        let updatedNotes = archive
        updatedNotes.splice(archive.findIndex(ele => ele.id === note.id), 1)
        setArchive(updatedNotes)
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
                    <UnarchiveOutlinedIcon
                    fontSize='small'
                    onClick={onUnArchive} 
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

export default ArchiveNoteCard