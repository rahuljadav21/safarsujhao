import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './features/auth';
import destinationReducer from './features/destination';
const store = configureStore({
    reducer: {
        auth: AuthReducer,
        destination: destinationReducer,
    },
});

export default store;