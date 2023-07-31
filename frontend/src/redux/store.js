import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './features/auth';
import destinationReducer from './features/destination';
import userinfoReducer from './features/userinfo'

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        destination: destinationReducer,
        userinfo: userinfoReducer
    },
});

export default store;