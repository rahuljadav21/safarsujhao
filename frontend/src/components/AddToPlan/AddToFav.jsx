import React, {useState} from 'react'
import { addToFav,addToPlan } from './../../utils/APIRoutes'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
  

function AddToFav(props) {
    console.log(props)
    const [favModal,setfavModal] = useState(false);
    const closefavModal = ()=>{
        setfavModal(false);
      }
      const openfavModal = ()=>{
        setfavModal(true);
      }
      const addToFavorite= ()=> {
        console.log(addToFav + `${props.destination?._id}`)
        fetch(addToFav + `${props.destination?._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            userId: props.user._id
          })
      
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
      //window.location = `/destination/${destination._id}`
      }

  return (
    <div>
        {props.currUser?.favouritePlaces.includes(props.destination?._id) ? <FavoriteIcon /> : <FavoriteBorderIcon onClick={openfavModal} />  }
        <Modal
                    open={favModal}
                    onClose={closefavModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Add To Favorite
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Do you want to Add this destination to Favorite ?
                            <div className="btn">
                                <Button variant="contained" onClick={closefavModal}> Cancle</Button>
                                <Button variant="contained" onClick={addToFavorite}> Add</Button>
                            </div>

                        </Typography>
                    </Box>
                </Modal>
    </div>
  )
}

export default AddToFav