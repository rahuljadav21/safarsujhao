import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import "./style.css"
import { Rating } from '@mui/material'
import Map, { Source, Layer, ScaleControl } from 'react-map-gl';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {getDestination} from "../../utils/APIRoutes"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import DestinationPhotos from '../../components/DestinationPhotos/DestinationPhotos'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const geojson = {
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', geometry: { type: 'Point', coordinates: [77.6809111, 13.364001] } }
  ]
};

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 7,
    'circle-color': 'red'
  }
};

function Destination() {

  const {id} = useParams();
  const [destination,setDestination] = useState({});

  useEffect(() => {
    const loadData = async()=>{
      const res = await axios.get(getDestination + id);
      setDestination(res.data);  
    }
    loadData()
  }, [id])

  console.log(destination)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(destination)
  

  return (
    <>
      <Navbar />
      <div className='main-container'>
        <DestinationPhotos images = {destination.photos} />

        <div className='info-container'>
          <div className='info'>
            <div className="detail">
              Name : {destination.name}
            </div>
            <div className="detail">
              Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate itaque praesentium ipsum odit laboriosam vel vitae quos assumenda, fuga dicta quia enim quam iste expedita aut doloremque ratione aperiam perspiciatis!
            </div>
            <div className="detail">
              Ratings : { destination.ratings ? <Rating name="read-only" value={destination.ratings} readOnly /> : 'No Ratings Available'} 
            </div>
            <div className="detail">
              location : {destination.city + " " +destination.state+ " "+ destination.country} 
            </div>
            <div className="detail">
              NearBy Airport : {destination.nearestAirport}
            </div>
            <div className="detail">
              NearBy Railway Station : {destination.nearestRailwayStation}
            </div>
            <div className="detail">
              Best time to Visit : {destination.bestTimeToVisit ? destination.bestTimeToVisit : "Anytime" }
            </div>
            <div className="btn">
              <Button variant="contained"> Add to Favourite </Button>
              <Button variant="contained" onClick={handleOpen}> Add to Plan </Button>
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add to Plan
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {[1, 2, 3].map((value) => (
                      <ListItem
                        key={value}
                        disableGutters
                        secondaryAction={
                          <IconButton aria-label="comment">
                            <AddCircleIcon onClick={handleClose} />
                          </IconButton>
                        }
                      >
                        <ListItemText primary={`Line item ${value}`} />
                      </ListItem>
                    ))}
                  </List>
                </Typography>
              </Box>
            </Modal>
          </div>
          <div className='info-map'>

            <Map
              mapboxAccessToken="pk.eyJ1IjoicmFodWxqYWRhdjIxIiwiYSI6ImNsa210bmM2dDA0eHEzam9jZ3Rhd3Q2dm4ifQ.0Xs1A6kwST_uscYEYBwZkA"
              initialViewState={{
                longitude: 77.6809111,
                latitude: 13.368001,
                zoom: 9
              }}
              style={{ width: 400, height: 360 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            >
              <Source id="my-data" type="geojson" data={geojson}>
                <Layer {...layerStyle} />
              </Source>
              <ScaleControl />
            </Map>

          </div>
        </div>
        <div className="review-container">
          <div className="review-title">
            Reviews
          </div>
          <div className="reviews">
            <Card sx={{ maxWidth: 545 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom component="div">
                    <Rating name="read-only" value={4.4} readOnly />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
            <Card sx={{ maxWidth: 545 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom component="div">
                    <Rating name="read-only" value={4.4} readOnly />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
            <Card sx={{ maxWidth: 545 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom component="div">
                    <Rating name="read-only" value={4.4} readOnly />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
            <Card sx={{ maxWidth: 545 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom component="div">
                    <Rating name="read-only" value={4.4} readOnly />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>
          </div>

        </div>

      </div>

    </>
  )
}

export default Destination