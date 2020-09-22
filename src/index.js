import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";

import { initialState } from "./redux/reducer/index";
import dataReducer from './redux/reducer'

import rootReducer from './Reducer';
import App from './Components/App';





const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer = compose(applyMiddleware(thunk, logger));

const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk, logger)));



ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);