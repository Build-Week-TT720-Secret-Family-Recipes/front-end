import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
<<<<<<< HEAD
import { initialState } from "./redux/reducer/index";
import dataReducer from './redux/reducer'
import App from './Components/App';
=======
import rootReducer from './Reducer';
>>>>>>> main

import App from './Components/App';


<<<<<<< HEAD
const enhancer = compose(applyMiddleware(logger, thunk));

const store = createStore(dataReducer, initialState, enhancer);
=======
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer = compose(applyMiddleware(thunk, logger));

const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk, logger)));
>>>>>>> main


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);