import { Link as RouteLink, useNavigate } from 'react-router-dom'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Box, Grid, Typography, Container } from '@mui/material'

// MUI Icon
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// redux store
import { useDispatch } from 'react-redux';
import { loginSuccess } from './../../redux/features/auth';

// API
import axios from 'axios';

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

    axios({
      method: "post",
      url: "http://localhost:5000/api/auth/login",
      data: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        if (response.data.status === true) {
          // Login success
          localStorage.setItem(
            process.env.REACT_APP_LOCALHOST_KEY,
            JSON.stringify(response.data.user)
          );
          dispatch(loginSuccess());
          navigate('/')
        } else {
          // Login failed
          alert('Incorrect Username or Password. Please try again.');
        }
      })
      .catch(function (error) {
        //handle error
        console.log(error);
      });
  };

  return (
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
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
      </Box>
    </Container>
  );
}

export default Login;
