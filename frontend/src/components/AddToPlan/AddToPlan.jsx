import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addToFav } from './../../utils/APIRoutes'

function AddToPlan(props) {
    console.log(props)
    const [tripPlans, setTripPlans] = useState([]);
    const handleClose = () => {
        // fetch(addToFav + , {
        //     method: 'PUT',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: jsonString
        //   })
        //     .then(response => {
        //         // Handle the response
        //         return response.json();
        //     })
        //     .then(data =>{

        //     })
        //     .catch(error => {
        //         // Handle the error
        //     });
        window.location = `/destination/${props.id}`
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
                                <AddCircleIcon onClick={handleClose} />
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

    console.log(props)
    if (tripPlans.length) {
        return (
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {tripPlans}
            </List>
        )
    } else {
        return (
            "No Plans"
        )
    }

}

export default AddToPlan