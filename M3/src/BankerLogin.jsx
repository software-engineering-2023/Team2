// import React from 'react';
// import './LoginAdmin.css' ;


// const LoginAdmin = () => {
//   return (
//     <div className="wrapper fadeInDown">
//       <div id="formContent">
       

//         {/* Login Form */}
//         <form>
//             <br />
//             <br/>
//           <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
//           <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
//           <input type="submit" className="fadeIn fourth" value="Log In" />
//         </form>

//         {/* Remind Password */}
//         <div id="formFooter">
//           <a className="underlineHover" href="#">Forgot Password?</a>
//         </div>
//       </div>
//     </div>
//   );
// };



//NEWWWWWww COOOOOOOOOOOOOODEEEEEEEEEEEEEEEEEEEEEEEEEE



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

function LoginAdmin() {
    const nav =useNavigate();
    const [email, setEmail] = React.useState('');
    const [loginError, setLoginError] = React.useState(false);
    const [password, setPassword] = React.useState('');

    const checkCredentials = (e) => {
      e.preventDefault(); // Prevent default form submission
  
      const data = {
        username: 'Salsabil', // replace with your username
        password: 'Doona213', // replace with your password
      };
  
      if (email === data.username && password === data.password) {
        nav('/bankerhome');
        // Add your logic for successful login here
      } else {
        setLoginError(true);
      }
    };





  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 35,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#1858A8E' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Login
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
          margin="normal"
          required
          fullWidth
          id="fasah"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputProps={{
            style: { fontSize: '16px', height: '56px' },
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="form2Example27"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
            {loginError && (
              <Typography color="error" variant="caption">
                Invalid username or password
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={checkCredentials}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginAdmin ;



// ... imports

// export default function LoginAdmin() {
//     const nav = useNavigate();
//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');
  
//     const checkCredentials = () => {
//       const data = {
//         username: 'Salsabil', // replace with your username
//         password: 'Doona213', // replace with your password
//       };
  
//       if (email === data.username && password === data.password) {
//         nav('/homeadmin');
//         // Add your logic for successful login here
//       } else {
//         alert('Invalid username or password');
//         // Add your logic for invalid credentials here
//       }
//     };
  
//     return (
//       <ThemeProvider theme={defaultTheme}>
//         {/* ... rest of the component */}
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           id="form2Example17"
//           label="Email Address"
//           name="email"
//           autoComplete="email"
//           autoFocus
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <TextField
//           margin="normal"
//           required
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           id="form2Example27"
//           autoComplete="current-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {/* ... rest of the component */}
//       </ThemeProvider>
//     );
//   }
  