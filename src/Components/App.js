import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './LogIn';
import Register from "./Register";

import Dashboard from "./Dashboard";
import PrivateRoute from "./privateRoute";

function App() {
	return (
		<Router>
			<div>
				<Route path="/register" component={Register} />
				<Switch>
					<PrivateRoute exact path="/protected" component={Dashboard} />
					<Route exact path="/">
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
