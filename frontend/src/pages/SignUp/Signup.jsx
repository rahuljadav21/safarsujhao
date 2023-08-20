import React from 'react';
import { Link as NavLink, useNavigate } from 'react-router-dom'

// MUI component
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Paper,
  Typography,
  Container,
  IconButton,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
} from '@mui/material';

// MUI Icon
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// API
import axios from 'axios';
import { registerRoute } from './../../utils/APIRoutes'

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    axios({
      method: "post",
      url: `${registerRoute}`,
      data: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then(function (response) {
        //handle success
        navigate('/login')
      })
      .catch(function (error) {
        //handle error
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ paddingY: "80px" }}>
      <Paper variant="outlined" sx={{ borderRadius: '8px', p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          Sign Up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                name="username"
                required
                fullWidth
                id="username"
                label="User ID"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                name="firstname"
                required
                fullWidth
                id="firstname"
                label="First Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                name="lastname"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                type='email'
                variant="standard"
                name="email"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="standard"
                name="mobile"
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                name="address"
                required
                fullWidth
                id="address"
                label="Address"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions, and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={NavLink} to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default Signup;