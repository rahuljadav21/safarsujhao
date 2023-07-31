import React from 'react';
import Card from './Card';
import { Stack, Pagination } from '@mui/material';

// React Redux
import { useSelector } from 'react-redux';

const Search = () => {
    const apiResponse = useSelector((state) => state.destination.apiResponse);
    const uniqueCityList = useSelector((state) => state.destination.uniqueCityList);
    const searchCityName = useSelector((state) => state.destination.searchCityName);

    const destinationSearchData = apiResponse.filter((destination) => destination.city === searchCityName);
    console.log(destinationSearchData);

    const itemsPerPage = 12;
    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedProducts = destinationSearchData.slice(startIndex, endIndex);

    return (
        <div>
            <Stack spacing={2}>
                {displayedProducts.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </Stack>
            <Pagination
                count={Math.ceil(apiResponse.length / itemsPerPage)}
                page={page}
                onChange={handleChange}
            />
        </div>
    );
};

export default Search;
