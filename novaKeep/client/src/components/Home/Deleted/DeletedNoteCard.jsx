import { useContext } from "react";


// MUI contents
import { Card, CardContent, CardActions, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import DelForeverIcon from '@mui/icons-material/DeleteForever';

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

const DeletedNoteCard = ({ note })=>{
    const classes = useStyles()
    const { setDeleted, deleted, addNotes } = useContext(DataContext)
    const onRestore = ()=>{
        addNotes( oldArr => [...oldArr, note])
        let updatedDeletes = deleted
        updatedDeletes.splice(deleted.findIndex(ele => ele.id === note.id), 1)
        setDeleted(updatedDeletes)
    }
    const onDeleteForever = ()=>{
        let updatedDeletes = deleted.filter(ele => ele.id !== note.id)
        setDeleted(updatedDeletes)
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
                    <RestoreFromTrashIcon
                    fontSize='small' 
                    onClick={onRestore}
                    />
                    <DelForeverIcon
                    fontSize='small' 
                    onClick={() => onDeleteForever()}
                    />
                    </CardActions>
            </Card>
        </>
    )
}

export default DeletedNoteCard