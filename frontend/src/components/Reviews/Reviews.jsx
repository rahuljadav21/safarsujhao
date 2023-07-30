import React,{useState} from 'react'
import { Rating } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Reviews(props) {
    console.log(props)
    const [reviews, setReviews] = useState([]);
    const loadReviews = ()=>{
        if(props.comments){
            props.comments.map((e)=>{
                reviews.push(
                    <Card sx={{ maxWidth: 545 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom component="div">
                            <Rating name="read-only" value={4.4} readOnly />
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {
                                e.body
                            }
                        </Typography>
                    </CardContent>
                </CardActionArea>
    
            </Card>
                )
            })
        }
        
    }
    loadReviews();
    return (
        reviews.length? reviews : "No Reviews Available"
    )
}

export default Reviews