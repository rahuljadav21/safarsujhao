import React from 'react';
import { Link as RouteLink, useNavigate } from 'react-router-dom'
import {
  Paper,
  Alert,
  Snackbar, Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Box, Grid, Typography, Container
} from '@mui/material'

// MUI Icon
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// redux store
import { useDispatch } from 'react-redux';
import { loginSuccess } from './../../redux/features/auth';

// API
import axios from 'axios';
import { loginRoute } from "./../../utils/APIRoutes"

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    // login api call
    axios({
      method: "post",
      url: `${loginRoute}`,
      data: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        if (response.data.status === true) {
          // Login success
          const userData = localStorage.setItem(
            process.env.REACT_APP_LOCALHOST_KEY,
            JSON.stringify(response.data.user)
          );

          dispatch(loginSuccess(userData));
          navigate('/')
        } else {
          // Login failed
          handleClick('Incorrect Username or Password. Please try again.');
        }
      })
      .catch(function (error) {
        //handle error
        console.log(error);
      });
  };

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleClick = (message) => {
    setOpen(true);
    setMessage(message);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper variant="outlined" sx={{ borderRadius: '8px', p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link component={RouteLink} to="/" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouteLink} to={'/signup'} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container >
  );
}

export default Login;
