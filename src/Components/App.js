import React from "react";



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './LogIn';
import Register from "./Register";

import Dashboard from "./Dashboard";
import PrivateRoute from "./privateRoute";
//import Login from "./Login"
import CreateRecipe from "./createRecipeForm/createRecipeParent"

function App() {
	return (
		<Router>
			<div>
				
				<Switch>
					<PrivateRoute exact path="/protected" component={Dashboard} />

					<Route exact path="/">
						<CreateRecipe />
					</Route>
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
