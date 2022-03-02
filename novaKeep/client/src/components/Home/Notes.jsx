import { useContext } from 'react';
import { DataContext } from '../../context/DataContextProvider';


// MUI components
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'


// components
import  NoteFrom  from './Notes/NoteFrom'
import NoteCard from './Notes/NoteCard';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));


  


const Notes = ()=>{
  const { notes } = useContext(DataContext)
    return (
        <>
        <Box component="main" sx={{ flexGrow: 1, p: 5, padding:0}}>
          <DrawerHeader/>
          <NoteFrom/>
          <Grid container mt={3}>
          {
            notes.map( note => {
              return (
                <Grid item key={note.id}>
                  <NoteCard note={note}/>
                </Grid>
              )
            })
          }
          </Grid>
        </Box>
        </>
      )
}



export default Notes