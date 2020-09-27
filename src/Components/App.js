import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./LogIn";
import Register from "./Register";
import RecipeList2 from "./RecipeList2";
import LoginRegister from './LoginRegister'
import Dashboard from "./Dashboard";
import PrivateRoute from "./privateRoute";
//import Login from "./Login"
import CreateRecipe from "./createRecipeForm/createRecipeParent/createRecipeParentEmpty";


function App() {
	return (
		<Router>
			<div>
				<Switch>
					<PrivateRoute exact path="/protected" component={RecipeList2} />

					<Route exact path="/">
						<LoginRegister />
					</Route>
					<Route path="/create" component={CreateRecipe} />
					<Route path="/login" component={LoginRegister} />
					<Route path="/register" component={LoginRegister} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
