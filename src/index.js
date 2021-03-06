import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { initialState } from "./redux/reducer/index";
import dataReducer from "./redux/reducer";
import App from "./Components/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	dataReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
