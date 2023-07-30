import React, { useEffect } from 'react'
import { Box, Container, IconButton, Typography, Autocomplete, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LocationIcon from '@mui/icons-material/LocationSearching';
import styles from './home.module.css'
import Swiper from '../../components/Swiper';

// React Redux
import { useDispatch, useSelector } from 'react-redux';
import { setApiResponse } from './../../redux/features/destination'

// API
import axios from 'axios';
import { getDestination } from './../../utils/APIRoutes'

function Home() {
  const dispatch = useDispatch();
  const apiResponse = useSelector((state) => state.destination.apiResponse);
  const uniqueCityList = useSelector((state) => state.destination.uniqueCityList);

  useEffect(() => {
    axios.get(getDestination)
      .then(function (response) {
        const apiResponseData = response.data;
        setApiResponse(apiResponseData);
        dispatch(setApiResponse(apiResponseData));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const searchCity = formData.get('searchCity');
    console.log(searchCity);

    // Retrieve all destination data for the selected city
    const destinationSearchData = apiResponse.filter((destination) => destination.city === searchCity);
    console.log(destinationSearchData);
  };
  return (
    <>
      <Box style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + 'images/background.svg'})`,
      }}
        className={styles.background}
      >
        <Box className={styles.overlay}>
          <Box className={styles.content}>
            <Typography variant="h2" color="white" sx={{ fontWeight: "bold" }}>
              Travel around the world
            </Typography>
            <Typography color="white" mb={5}>
              Explore the world, one adventure at a time - Your journey begins here!
            </Typography>
            <Box component="form" onSubmit={handleSubmit} className={styles.searchBox}>
              <LocationIcon sx={{ mr: 1 }} />
              <Autocomplete
                fullWidth
                disablePortal
                id="combo-box-demo"
                options={uniqueCityList}
                renderInput={(params) =>
                  <TextField
                    {...params}
                    placeholder='City'
                    name='searchCity'
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          border: 'none', // Hide the outline border
                        },
                      },
                    }} />
                }
              />
              <IconButton type='submit' color="primary" aria-label="add to shopping cart">
                <SearchIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box >
      <Container className={styles.suggestionBox}>
        <Swiper items={itemData} />
      </Container>
    </>
  )
}

export default Home


const itemData = [
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
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];
