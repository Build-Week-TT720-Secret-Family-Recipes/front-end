import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./LogIn";
import Register from "./Register";
import RecipeList2 from "./RecipeList2";

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
						<RecipeList2 />
					</Route>
					<Route path="/create" component={CreateRecipe} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
