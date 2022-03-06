import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContextProvider';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


// MUI components
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'


// components
import ArchiveNoteCard from './Archive/ArchiveNoteCard';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));





const Archive = () => {
  const { archive, setArchive, searchData } = useContext(DataContext)
  console.log(archive)

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      archive,
      result.source.index,
      result.destination.index
    );

    setArchive(items)
  }
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 5, padding: 0 }}>
        <DrawerHeader />

       
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided, snapshot) => (
              <Grid ref={provided.innerRef} {...provided.droppableProps} container style={{ paddingLeft: '30px', paddingRight: '30px' }}>

                {
                 
                    archive.filter(ele => ele.heading.toLowerCase().includes(searchData.toLowerCase()) || ele.note.toLowerCase().includes(searchData.toLowerCase())).map((note, index) => {
                      return (
                        <Draggable key={note.id} draggableId={note.id} index={index}>
                          {(provided, snapshot) => (
                            <Grid
                            item
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <ArchiveNoteCard note={note} />
                            </Grid>
                          )}
                        </Draggable>
                      )
                    })
                }
                 {provided.placeholder}
              </Grid>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
    </>
  )
}



export default Archive