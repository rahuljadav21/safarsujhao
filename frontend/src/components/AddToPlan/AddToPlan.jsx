import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addToFav,addToPlan } from './../../utils/APIRoutes'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

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


function AddToPlan(props) {

    const [tripPlans, setTripPlans] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [plan, setPlan] = useState({});
    console.log(props)

    const handleClose = (ev) => {
        window.location = `/destination/${props.destination._id}`
        setOpen(false);
    }
    console.log(props)
    const addToTripPlan = () => {
            fetch(addToPlan + `${plan._id}/adddestination/${props.destination._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            }
        
          })
            .then(response => {
                // Handle the response
                return response.json();
            })
            .then(data =>{
               console.log(data)
            })
            .catch(error => {
                // Handle the error
            });
        window.location = `/destination/${props.destination._id}`
    }

    const loadTrips = () => {
        if (props.plans) {
            props.plans.map((e) => {
                tripPlans.push(
                    <ListItem
                        key={e}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                {e.destinations.includes(props.destination?._id) ? <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Alredy in Plan
                                    

                                </Typography> : <AddCircleIcon onClick={() => { setPlan(e); setOpen(true) }} />}

                            </IconButton>
                        }
                    >
                        <ListItemText primary={`${e.name}`} />
                    </ListItem>
                )
            })
        }
    }
    loadTrips()


    if (tripPlans.length) {
        return (
            <>
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
                            Do you want to Add this destination to Plan {plan.name} ?
                            <div className="btn">
                                <Button variant="contained" onClick={handleClose}> Cancle</Button>
                                <Button variant="contained" onClick={addToTripPlan}> Add</Button>
                            </div>

                        </Typography>
                    </Box>
                </Modal>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {tripPlans}
                </List>
            </>

        )
    } else {
        return (
            "No Plans"
        )
    }

}

export default AddToPlan