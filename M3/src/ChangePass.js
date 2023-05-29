import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Bank
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  
  
  
  
  const defaultTheme = createTheme();

function ChangePass() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const checkCredentials = () => {
    const data = {
      oldpassword: "Doona213", // replace with your password
    };

    if (oldPassword === data.oldpassword) {
      if (newPassword === confirmPassword) {
        alert("Password Changed");
        // Add your logic for successful password change here
      } else {
        // Passwords do not match
        alert("Passwords do not match");
        // Add your logic for password mismatch here
      }
    } else {
      // Incorrect old password
      alert("Invalid password");
      // Add your logic for invalid old password here
    }
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Change Password
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="form2Example17"
              label="Old Password"
              name="old password"
              type="password"
              value={oldPassword}
              onChange={handleOldPasswordChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="new password"
              label="New Password"
              type="password"
              id="form2Example27"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm new password"
              label="Confirm New Password"
              type="password"
              id="form2Example37"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={checkCredentials}
            >
              Change Password
            </Button>
          </Box>
       

        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default ChangePass ;
