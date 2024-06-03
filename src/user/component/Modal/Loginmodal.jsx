import React,{ useState } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const style = {
    position:'absolute',
    top:'50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
     
};


function Loginmodal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate=useNavigate();
    //const { user } = useSelector(state => state.user);

    const navigateToMypage = () => {
        handleClose();
        navigate("/Mypage");
    }
    const logOut = () => {
        sessionStorage.removeItem('atk');
        sessionStorage.removeItem('role');
        alert('로그아웃 성공');
        navigate("/");
    }

    return (
        <div>
            <Button onClick={handleOpen}
            sx={{textDecoration:'none', color:'inherit'}}><AccountCircleIcon /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                        회원
                    </Typography>
                    <Typography id="modal-modal-description" 
                                sx={{ 
                                    mt: 2,
                                    textAlign:"center"
                                }}  
                    >
                    <Stack spacing={2} direction="column">
                        <Button 
                            sx={{bgcolor:'grey',
                            color:'black',
                            ":hover" : {
                                bgcolor:"lightgray"
                            }
                        }}
                            variant="contained" 
                            size="large" 
                            startIcon={<LockOutlinedIcon />}
                            onClick={logOut}
                        >
                            로그아웃
                        </Button>
                        <Button 
                            sx={{bgcolor:'grey',
                            color:'black',
                            ":hover" : {
                                bgcolor:"lightgray"
                            }
                        }}
                            variant="contained"
                            size="large" 
                            startIcon={<PersonAddIcon />}
                            onClick={navigateToMypage}
                        >
                            마이페이지
                        </Button>
                    </Stack>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
export default Loginmodal;