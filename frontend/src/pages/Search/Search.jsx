import React from 'react';
import { Box, IconButton, Autocomplete, TextField } from '@mui/material';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import LocationIcon from '@mui/icons-material/LocationSearching';
import Card from './Card';
import { useSelector } from 'react-redux';


function Search() {
    const apiResponse = useSelector((state) => state.destination.apiResponse);
    const uniqueCityList = useSelector((state) => state.destination.uniqueCityList);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const searchCity = formData.get('searchCity');
        console.log(searchCity);

        // Retrieve all destination data for the selected city
        const destinationSearchData = apiResponse.filter((destination) => destination.city === searchCity);
        console.log(destinationSearchData);
    };

    return (
        <div>
            <Box component="form" onSubmit={handleSubmit} className="searchBox">
                <LocationIcon sx={{ mr: 1 }} />
                <Autocomplete
                    fullWidth
                    disablePortal
                    id="combo-box-demo"
                    options={uniqueCityList}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            placeholder='City'
                            name='searchCity'
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        border: 'none', // Hide the outline border
                                    },
                                },
                            }} />
                    }
                />
                <IconButton type='submit' color="primary" aria-label="add to shopping cart">
                    <SearchIcon />
                </IconButton>
            </Box>
            
            <div className="cardSection">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Search