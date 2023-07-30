import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import { Button } from '@mui/material';
// redux store
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/auth'
import  { addReviewAPI }  from "./../../utils/APIRoutes";

function ReviewAdder(props) {
    const [value, setValue] = useState();
    const [review,setReview] = useState();
    const user = useSelector(selectUser);
    console.log(addReviewAPI + props.id)
    const addReview = async()=>{

       const res =  await axios.post(addReviewAPI + props.id,{
            review: {
              body:review,
              rating :value
            },
            userId:user._id
          })
          console.log(res)
       window.location = `/destination/${props.id}`
    }

    return (
        <div style={{display:"flex",alignItems:"flex-start",flexDirection:"column"}}>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log(value)
                }}
            />
            <TextField
                style={{ width: "50vh",marginTop:"2vh" }}
                className="contactForm"
                id="formIssue"
                label="Add Review"
                onChange={(e)=>{setReview(e.target.value)}}
                multiline
                rows={4}
                
            />
            <Button onClick={addReview} style={{marginTop:"2vh" }} variant="contained">Add Review</Button>
        </div>
    )
}

export default ReviewAdder