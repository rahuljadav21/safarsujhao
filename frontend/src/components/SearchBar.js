import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, IconButton, Autocomplete, TextField } from '@mui/material'
import styles from './styles/searchbar.module.css'

// MUI Icon
import SearchIcon from '@mui/icons-material/Search';
import LocationIcon from '@mui/icons-material/LocationSearching';

// React Redux
import { useDispatch, useSelector } from 'react-redux';
import { setSearchCityName } from './../redux/features/destination'

const SearchBar = ({ isNavigate }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // access value from redux store
    const uniqueCityList = useSelector((state) => state.destination.uniqueCityList);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const searchCity = formData.get('searchCity');
        dispatch(setSearchCityName(searchCity));
        if (isNavigate) {
            navigate('/search');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} className={styles.searchBox}>
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
                                    border: 'none',
                                },
                            },
                        }} />
                }
            />
            <IconButton type='submit' color="primary" aria-label="add to shopping cart">
                <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default SearchBar