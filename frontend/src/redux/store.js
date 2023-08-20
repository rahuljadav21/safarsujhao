import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import AuthReducer from './features/auth';
import destinationReducer from './features/destination';
import userinfoReducer from './features/userinfo';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedAuthReducer = persistReducer(persistConfig, AuthReducer);
const persistedDestinationReducer = persistReducer(persistConfig, destinationReducer);
const persistedUserinfoReducer = persistReducer(persistConfig, userinfoReducer);

const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        destination: persistedDestinationReducer,
        userinfo: persistedUserinfoReducer,
    },
});

const persistor = persistStore(store);
export { store, persistor };
