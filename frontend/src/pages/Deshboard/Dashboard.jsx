import * as React from 'react';
import "./Dashboard.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { BiSolidEditAlt } from "react-icons/bi"
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { TextField, Container } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';

const items = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
];

const user = {
  username: "Batman2000",
  firstname: "Bruce",
  lastname: "Wayne",
  mobile: "1234567890",
  email: "email@xyz.com",
  address: "Gotham",
  country: "India",
  img: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
}

const fromField = [
  { name: "First Name", type: "text", linkid: "firstname" },
  { name: "Last Name", type: "text", linkid: "lastname" },
  { name: "Email Address", type: "email", linkid: "email" },
  { name: "Mobile Number", type: "text", linkid: "mobile" },
  { name: "Address", type: "text", linkid: "address" },
];

function Dashboard() {

  const [disabledVal, setDisabledVal] = useState(true);

  const handleUpdate = (event) => {
    setDisabledVal(!disabledVal);
    event.preventDefault();
    if (!disabledVal) {
      const form = event.target;
      const formData = new FormData(form);

      console.log(formData);
    }
  }

  return (
    <div className='dashboard'>
      <div className='space' ></div>
      <h1 className='Heading'> Hello, {user.firstname}! </h1>
      <div className='profile'>
        <div className='profileImage'>
          <img src={user.img} alt="User Profile pic" />
        </div>
        <div className='profileData' >
          <h3>{user.username}</h3>
          <p> {user.address}, {user.country} </p>
        </div>
        <Button
          variant='contained'
          className='editButton'
        > <BiSolidEditAlt /> Edit </Button>
      </div>

      <form onSubmit={handleUpdate} component="form" className='profileInfo'>
        <div className='personalHeading'>
          <h2> Personal Information </h2>
          {disabledVal ? (
            <Button
              type='submit'
              variant='contained'
              className='editButton'
            > <BiSolidEditAlt /> Edit </Button>
          ) : (
            <Button
              type='submit'
              variant='contained'
              className='editButton'
            > <ChangeCircleIcon /> Update </Button>

          )
          }

        </div>
        <div className='info'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {fromField.map((item) => {
                let defaultValue;
                defaultValue = user[item.linkid];

                return (
                  <Grid item xs={6} key={item.linkid}>
                    <h3>{item.name}</h3>
                    <TextField
                      variant='standard'
                      className='profileFields'
                      InputProps={{ disableUnderline: true }}
                      defaultValue={defaultValue}
                      name={item.linkid}
                      disabled={disabledVal}
                    />
                  </Grid>
                );
              })}

              <Grid item xs={6}>
                <h3>Country</h3>
                <p>India</p>
              </Grid>
            </Grid>
          </Box>
        </div>
      </form>

      <div className='plannedTrips'>
        <h2> Your Planned Trips </h2>
        <swiper-container class="mySwiper" slides-per-view="4" navigation="true"
          space-between="30" free-mode="true">
          {items.map((item) => {
            return (
              <swiper-slide key={item.title} lazy="true">
                <div className='placeImage'>
                  <img loading="lazy" src={item.img} alt={item.title} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </div>
                <div className='cardContent'>
                  <div className='placeName'>
                    Place Name
                  </div>
                  <div className='placeAddress'>
                    address
                  </div>
                </div>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </div>
      <div className='space' ></div>
      <div className='space' ></div>

      <div className='Favorites'>
        <h2> Your Favorite Destinations </h2>
        <swiper-container class="mySwiper" slides-per-view="4" navigation="true"
          space-between="30" free-mode="true">
          {items.map((item) => {
            return (
              <swiper-slide key={item.title} lazy="true">
                <div className='placeImage'>
                  <img loading="lazy" src={item.img} alt={item.title} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </div>
                <div className='cardContent'>
                  <div className='placeName'>
                    Place Name
                  </div>
                  <div className='placeAddress'>
                    address
                  </div>
                </div>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </div>
      <div className='space' ></div>
      <div className='space' ></div>
    </div>
  )
}
export default Dashboard