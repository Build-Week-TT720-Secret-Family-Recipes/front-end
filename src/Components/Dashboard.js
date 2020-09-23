import React, {useEffect}from 'react';
import Typography from "@material-ui/core/Typography";
import RecipeCard from './RecipeCard/RecipeCard'
function Dashboard(props) {
	// this ensures page always renders at the top
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Typography varient="h1">
				HELLO THIS IS WHERE YOUR RECIPES LIVE
			</Typography>
			<RecipeCard />
		</div>
	);
}

export default Dashboard;