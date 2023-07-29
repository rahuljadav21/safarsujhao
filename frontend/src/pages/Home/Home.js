import React from 'react'
import { Box, Container, IconButton, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import styles from './home.module.css'
import Swiper from '../../components/Swiper';

function Home() {
  return (
    <>
      <Box style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + 'images/background.svg'})`,
      }}
        className={styles.background}
      >
        <Box className={styles.overlay}>
          <Box className={styles.content}>
            <Typography variant="h2" color="white">
              Travel around the world
            </Typography>
            <Typography color="white" mb={5}>
              Explore the world, one adventure at a time - Your journey begins here!
            </Typography>
            <Box className={styles.searchBox}>
              <LocationSearchingIcon sx={{ mr: 1 }} />
              <input type='text' placeholder='City, destination' className={styles.searchInput} />
              <IconButton aria-label="search" sx={{ color: "black" }}>
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