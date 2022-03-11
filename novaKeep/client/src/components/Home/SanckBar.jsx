import React from "react";

// MUI components
import { Snackbar, Box } from "@mui/material"
import MuiAlert from '@mui/material/Alert';
// import CloseIcon from '@mui/icons-material/Close';




const SnackBar = ({ open, setOpen, msg }) => {
    const handleClose = () => {
        setOpen(false)
    }
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
    return (
        <>
            <Box>
                <Snackbar
                    open={open}
                    autoHideDuration={4000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity={msg.severity} sx={{ width: '250px' }}>
                        {
                            msg.payload
                        }
                    </Alert>
                </Snackbar>
            </Box>
        </>
    )
}

export default SnackBar