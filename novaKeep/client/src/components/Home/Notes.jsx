import { useContext } from 'react';
import { DataContext } from '../../context/DataContextProvider';


// MUI components
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'


// components
import NoteFrom from './Notes/NoteFrom'
import NoteCard from './Notes/NoteCard';
import DeletedNoteCard from './Notes/DeletedNoteCard';
import ArchiveNoteCard from './Notes/ArchiveNoteCard';
import EmptyScreen from './Notes/EmptyNotesScreen';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));





const Notes = () => {
  const { notes, archive, deleted, tunnel, searchData } = useContext(DataContext)
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 5, padding: 0 }}>
        <DrawerHeader />
        <NoteFrom />
        {tunnel.Note && (notes.length === 0 && <EmptyScreen />)}
        {tunnel.Archive && (archive.length === 0 && <EmptyScreen />)}
        {tunnel.Deleted && (deleted.length === 0 && <EmptyScreen />)}
        <Grid container style={{ paddingLeft: '30px', paddingRight: '30px' }}>
          {
            tunnel.Note &&
            (
              notes.filter(ele => ele.heading.toLowerCase().includes(searchData.toLowerCase()) || ele.note.toLowerCase().includes(searchData.toLowerCase())).map(note => {
                return (
                  <Grid item key={note.id}>
                    <NoteCard note={note} />
                  </Grid>
                )
              })
            )
          }
          {
            tunnel.Archive &&
            (
              archive.filter(ele => ele.heading.toLowerCase().includes(searchData.toLowerCase()) || ele.note.toLowerCase().includes(searchData.toLowerCase())).map(note => {
                return (
                  <Grid item key={note.id}>
                    <ArchiveNoteCard note={note} />
                  </Grid>
                )
              })
            )
          }
          {
            tunnel.Deleted &&
            (
              deleted.filter(ele => ele.heading.toLowerCase().includes(searchData.toLowerCase()) || ele.note.toLowerCase().includes(searchData.toLowerCase())).map(note => {
                return (
                  <Grid item key={note.id}>
                    <DeletedNoteCard note={note} />
                  </Grid>
                )
              })
            )
          }
        </Grid>
      </Box>
    </>
  )
}



export default Notes