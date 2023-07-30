import React from 'react';
import ReactDOM from 'react-dom/client';

// react redux provider
import { Provider } from 'react-redux'
import store from './redux/store';

// global css
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
      <App />
    </Provider>

);