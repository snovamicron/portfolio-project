
// MUI components
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'


// components
import  NoteFrom  from './Notes/NoteFrom'


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

//   const Container = styled('Box')`
//   display : flex;
//   width: 100%
//   `

  


const Notes = ()=>{
    return (
        <>
        <Box component="main" sx={{ flexGrow: 1, p: 5 , display:'flex'}}>
          <DrawerHeader/>
          <NoteFrom/>
        </Box>
        </>
      )
}



export default Notes