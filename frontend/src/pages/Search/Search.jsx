import React from 'react';
import CardComponent from './Card';
import { Pagination, Box, Grid, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import SearchBar from './../../components/SearchBar'

const Search = () => {
    const apiResponse = useSelector((state) => state.destination.apiResponse);
    const searchCityName = useSelector((state) => state.destination.searchCityName);

    // Filter destinations by city name
    const destinationSearchData = apiResponse.filter(
        (destination) => destination.city === searchCityName
    );

    // Pagination setup
    const itemsPerPage = 12;
    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, destinationSearchData.length);

    const displayedProducts = destinationSearchData.slice(startIndex, endIndex);

    console.log(displayedProducts)

    return (
        <Box sx={{ height: '100vh', paddingTop: '60px' }}>
            <Container maxWidth="xl" sx={{ height: '100%', display: "flex", flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                    <Box mb={2} p={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <SearchBar isNavigate={false} />
                    </Box>
                    <Grid container spacing={2} >
                        {displayedProducts.map((product) => (
                            <Grid item xs={12} sm={6} md={3} key={product.name}>
                                <CardComponent product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box pb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination
                        count={Math.ceil(destinationSearchData.length / itemsPerPage)}
                        page={page}
                        onChange={handleChange}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default Search;
