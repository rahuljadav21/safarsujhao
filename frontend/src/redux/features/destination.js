import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    apiResponse: [],
    uniqueCityList: [], // Initialize uniqueCityList as an empty array
};

const destinationSlice = createSlice({
    name: 'destination',
    initialState,
    reducers: {
        setApiResponse: (state, action) => {
            state.apiResponse = action.payload;
            // Extract the unique city names from the API response and set them in the uniqueCityList state
            state.uniqueCityList = [...new Set(action.payload.map((destination) => destination.city))];
        },
    },
});

export const { setApiResponse } = destinationSlice.actions;
export default destinationSlice.reducer;
