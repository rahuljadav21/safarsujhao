import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiLike, BiSolidLike, BiRupee } from "react-icons/bi";
import { BsFillShareFill } from "react-icons/bs";
import "./Search.css";

const Card = ({ product }) => {
  const placeImage =
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";
  const name = "Goa";
  const price = "2000";
  const rating = "4.5";
  const [Favourite, setFavourite] = useState(true);
  const setFavouriteHandler = () => {
    setFavourite(!Favourite);
  };

  return (
    <div className="exploreCard">
      <img src={placeImage} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <div className="midSection">
          <div className="expense">
            <BiRupee />
            <p>{price}</p>
          </div>
          <div className="rating">
            <AiFillStar />
            <p>{rating}</p>
          </div>
        </div>
        <div className="lastSection">
          {Favourite ? (
            <BiLike onClick={setFavouriteHandler} className="likeIcon" />
          ) : (
            <BiSolidLike onClick={setFavouriteHandler} className="likeIcon" />
          )}

          <BsFillShareFill className="shareIcon" />
        </div>
      </div>
    </div>
  );
};

export default Card;