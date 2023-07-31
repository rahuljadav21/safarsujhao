import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import "./style.css"
import { Rating } from '@mui/material'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { getDestination, addToPlan, getUser } from "../../utils/APIRoutes"
import { useParams } from 'react-router-dom'
import DestinationPhotos from '../../components/DestinationPhotos/DestinationPhotos'
import Reviews from '../../components/Reviews/Reviews';
import ReviewAdder from '../../components/ReviewAdder/ReviewAdder';
import Maps from '../../components/Map/Maps';

import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/auth'
import AddToPlan from '../../components/AddToPlan/AddToPlan';


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


function Destination() {

  const { id } = useParams();
  const [destination, setDestination] = useState({});
  const [location, setLocation] = useState();
  const [plans, setPlans] = useState([]);
  const user = useSelector(selectUser);

  const fetchData = () => {
    console.log(getDestination + id)
    fetch(getDestination + id)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setDestination(data);
        setLocation({
          longitude: data.geometry.coordinates[0],
          latitude: data.geometry.coordinates[1]
        })
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    
    fetch(getUser + user._id)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      setPlans(data.tripPlans)
    })
    console.log(plans)
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
 


  return (
    <>
      <Navbar />
      <div className='main-container'>
        <DestinationPhotos images={destination.photos} />

        <div className='info-container'>
          <div className='info'>
            <div className="detail">
              Name : {destination.name}
            </div>
            <div className="detail">
              Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate itaque praesentium ipsum odit laboriosam vel vitae quos assumenda, fuga dicta quia enim quam iste expedita aut doloremque ratione aperiam perspiciatis!
            </div>
            <div className="detail">
              Ratings : {destination.ratings ? <Rating name="read-only" value={destination.ratings} readOnly /> : 'No Ratings Available'}
            </div>
            <div className="detail">
              location : {destination.city + " " + destination.state + " " + destination.country}
            </div>
            <div className="detail">
              NearBy Airport : {destination.nearestAirport}
            </div>
            <div className="detail">
              NearBy Railway Station : {destination.nearestRailwayStation}
            </div>
            <div className="detail">
              Best time to Visit : {destination.bestTimeToVisit ? destination.bestTimeToVisit : "Anytime"}
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
                  {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
                  </List> */}
                  <AddToPlan destination = {destination} plans = {plans} id = {id} />
                </Typography>
              </Box>
            </Modal>
          </div>
          <div className='info-map'>

            {
              location ? <Maps longitude={location.longitude} latitude={location.latitude} /> : "Map is Loading..."
            }


          </div>
        </div>
        <div className="comments" >

          <div className="review-container">
            <div className="review-title">
              Reviews
            </div>
            <div className="reviews">
              <Reviews comments={destination.reviews} />
            </div>
          </div>
          <div className="add-review">
            <ReviewAdder id={id} />
          </div>

        </div>

      </div>

    </>
  )
}

export default Destination