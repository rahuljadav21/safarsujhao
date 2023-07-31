import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Card, Chip, Rating, Box, CardMedia, CardContent, CardActions, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const CardComponent = ({ product }) => {
  const navigate = useNavigate();

  const placeImage =
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

  const [Favourite, setFavourite] = useState(true);
  const setFavouriteHandler = () => {
    setFavourite(!Favourite);
  };

  const handalClickCard = async () => {
    navigate(`/destination/${product._id}`);
  };

  return (
    <Card onClick={handalClickCard} sx={{ display: 'flex', flexDirection: 'column', height: '400px' }}>
      <CardMedia component="img" height="194" image={placeImage} alt="Paella dish" />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardContent>
          <Box mb={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Chip label={product.expense} variant="outlined" />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Rating name="half-rating-read" defaultValue={product.ratings} precision={0.5} readOnly />
              <Typography ml={1}>
                {product.ratings}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h6">
            {product.name}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={setFavouriteHandler}>
            {Favourite ? <FavoriteIcon color="error" /> : <FavoriteIcon />}
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
};

export default CardComponent;
