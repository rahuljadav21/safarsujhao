import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import styles from './home.module.css'

function Home() {
  return (
    <>
      <Box style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + 'images/background.jpg'})`,
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
              <div>
                <IconButton aria-label="delete" sx={{ backgroundColor: "aqua", color: "white" }}>
                  <SearchIcon />
                </IconButton>
              </div>
            </Box>
          </Box>
        </Box>
      </Box >

    </>
  )
}

export default Home