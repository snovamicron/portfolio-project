import { useState, useContext } from "react";


// context
import { UserData } from "../../../context/UserContext";


// MUI components
import { Avatar,
    Menu,
    MenuItem,
    Divider,
    ListItemIcon,
    IconButton


 } from "@mui/material"
import Logout from '@mui/icons-material/Logout';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const AvatarComponent = ({ data })=>{
    const { setData, setJwt } = useContext(UserData)
    const NameCap = data.name.charAt(0)

    const [anchorEl, setAnchorEl] = useState(null)
    
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const onLogOutClick = ()=>{
    localStorage.removeItem('token')
    setJwt('')
    setData({})
  }
    return(
        <>
        <IconButton
            onClick={handleClick}
            size="small"
          >
        <Avatar sx={{ height: 35, width: 35, fontSize:'1.555rem'}} >
            {
                NameCap
            }
        </Avatar>
        </IconButton>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> {data.name}
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <MailOutlineIcon fontSize="small" />
          </ListItemIcon>
          {data.email}
        </MenuItem>
        <MenuItem onClick={()=> onLogOutClick()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
        </>
    )
}


export default AvatarComponent