import React from "react";
import Login from './LogIn'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard";
import PrivateRoute from "./privateRoute";

function App() {
	return (
		<Router>
			<div>
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
