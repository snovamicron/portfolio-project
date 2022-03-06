import { Link } from 'react-router-dom'


// MUI Components
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box

} from "@mui/material"
import { styled } from "@mui/material/styles";
import MuiDrawer from '@mui/material/Drawer'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(7)} + 1px)`,
    },
  });


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));


const SideDrawer = ({ open }) => {
  const iconList = [
    {
      id: 1,
      name: 'note',
      icon: <LightbulbOutlinedIcon/>,
      path:'/'
    },
    {
      id: 2,
      name:'archive',
      icon: <ArchiveOutlinedIcon/>,
      path:'/archive'
    },
    {
      id:3,
      name:'trash',
      icon: <DeleteOutlineOutlinedIcon/>,
      path:'/deleted'
    }
  ]



    return (
        <Box>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader></DrawerHeader>
                <List>
                    {iconList.map((iconObj, index) => (
                      <Link key={index} to={iconObj.path} style={{textDecoration:'none', color:'#000000'}}>
                        <ListItem button >
                            <ListItemIcon>
                                {iconObj.icon}
                            </ListItemIcon>
                            <ListItemText primary={iconObj.name}/>
                        </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
        </Box>
    )
}


export default SideDrawer