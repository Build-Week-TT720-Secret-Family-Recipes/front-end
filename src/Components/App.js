import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import PrivateRoute from "./privateRoute";
//import Login from "./Login"
import CreateRecipe from "./CreateRecipe"

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<PrivateRoute exact path="/protected" component={Dashboard} />
					<Route exact path="/">
						<CreateRecipe />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
