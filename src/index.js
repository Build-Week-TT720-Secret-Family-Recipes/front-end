import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from './Reducer';

import App from './Components/App';



const enhancer = compose(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, enhancer);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);