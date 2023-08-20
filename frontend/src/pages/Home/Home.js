import React, { useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'

import styles from './home.module.css'
import Swiper from '../../components/Swiper';
import SearchBar from './../../components/SearchBar';

// React Redux
import { useDispatch, useSelector } from 'react-redux';
import { setApiResponse } from './../../redux/features/destination'

// API
import axios from 'axios';
import { getDestination } from './../../utils/APIRoutes'

function Home() {
  const dispatch = useDispatch();
  const apiResponse = useSelector((state) => state.destination.apiResponse);

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

  const topDestinations = apiResponse
    .map((destination) => ({
      id: destination._id,
      name: destination.name,
      expense: destination.expense,
      city: destination.city,
      rating: destination.ratings,
      imageUrl: destination.photos[0] || "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    }))
    .filter((destination) => destination.rating >= 4.5);

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
            <SearchBar isNavigate={true} />
          </Box>
        </Box>
      </Box >
      <Container className={styles.suggestionBox}>
        <Typography variant='h4' marginBottom={2}>
          Explore Top Destination
        </Typography>
        <Swiper items={topDestinations} />
      </Container>
    </>
  )
}

export default Home