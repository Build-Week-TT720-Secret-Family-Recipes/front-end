import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { initialState } from "./redux/reducer/index";
import dataReducer from './redux/reducer'
import App from './Components/App';



const enhancer = compose(applyMiddleware(logger, thunk));

const store = createStore(dataReducer, initialState, enhancer);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);