
// MUI contents
import { Card, CardContent, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles =   makeStyles({
    card:{
        width:240,
        margin:8,
        boxShadow:'none !important',
        border:'1px solid #e0e0e0'
    }
})

const NoteCard = ({ note })=>{
    const classes = useStyles()
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
            </Card>
        </>
    )
}

export default NoteCard