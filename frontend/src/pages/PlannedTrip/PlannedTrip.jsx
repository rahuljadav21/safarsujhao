import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Map, { Source, Layer, ScaleControl, Marker } from 'react-map-gl';
import "./style.css";
import Modal from '@mui/material/Modal';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Button} from '@mui/material';

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

function PlannedTrip() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Navbar />
    <div className="main-container">
      <div className="trip-info-container">
        <div className="destinations">
        <h2>Travel Destinations</h2>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WhereToVoteIcon />
              </ListItemIcon>
              <ListItemText primary="Dwarka" />
              <ListItemIcon style={{marginLeft:"7vh"}}>
                <RemoveCircleIcon onClick={handleOpen}  />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WhereToVoteIcon />
              </ListItemIcon>
              <ListItemText primary="Dwarka" />
              <ListItemIcon>
                <RemoveCircleIcon onClick={handleOpen}  />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WhereToVoteIcon />
              </ListItemIcon>
              <ListItemText primary="Dwarka" />
              <ListItemIcon>
                <RemoveCircleIcon onClick={handleOpen}  />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WhereToVoteIcon />
              </ListItemIcon>
              <ListItemText primary="Dwarka" />
              <ListItemIcon>
                <RemoveCircleIcon onClick={handleOpen}  />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WhereToVoteIcon />
              </ListItemIcon>
              <ListItemText primary="Dwarka" />
              <ListItemIcon>
                <RemoveCircleIcon onClick={handleOpen}  />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List> 
        </div>
        <div className="map-container">
        <Map
              mapboxAccessToken="pk.eyJ1IjoicmFodWxqYWRhdjIxIiwiYSI6ImNsa210bmM2dDA0eHEzam9jZ3Rhd3Q2dm4ifQ.0Xs1A6kwST_uscYEYBwZkA"
              initialViewState={{
                longitude: 77.6809111,
                latitude: 13.368001,
                zoom: 9
              }}
              style={{ width: 600, height: 360 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            >
              <Source id="my-data" type="geojson" data={geojson}>
                <Layer {...layerStyle} />
              </Source>
              <ScaleControl />
            </Map>
        </div>
      </div>
      <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Remove Destination
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Do you want to Remove this destination from Plan ?
                  <div className="btn">
                  <Button variant="contained" onClick={handleClose}> Cancle</Button>
                  <Button variant="contained" onClick={handleClose}> Remove</Button>
                  </div>
                  
                </Typography>
              </Box>
            </Modal>
      <div className="container">
        <div className="tourists">
          <h2>Tourists</h2>
          <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonPinIcon />
              </ListItemIcon>
              <ListItemText primary="Dwarka" />
              <ListItemIcon style={{marginLeft:"7vh"}}>
                <RemoveCircleIcon onClick={handleOpen}  />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonPinIcon />
              </ListItemIcon>
              <ListItemText primary="Dwarka" />
              <ListItemIcon>
                <RemoveCircleIcon onClick={handleOpen}  />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonPinIcon />
              </ListItemIcon>
              <ListItemText primary="Dwarka" />
              <ListItemIcon>
                <RemoveCircleIcon onClick={handleOpen}  />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonPinIcon />
              </ListItemIcon>
              <ListItemText primary="Dwarka" />
              <ListItemIcon>
                <RemoveCircleIcon onClick={handleOpen}  />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonPinIcon />
              </ListItemIcon>
              <ListItemText primary="Dwarka" />
              <ListItemIcon>
                <RemoveCircleIcon onClick={handleOpen}  />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List> 
        </div>
        <div className="trip-details">
              <div className="detail">
                <h1>
                2000 INRs
                </h1>
                
              </div>
              <div className="detail">
                <h1>
                2 Night 3 Days
                </h1>
                
              </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PlannedTrip