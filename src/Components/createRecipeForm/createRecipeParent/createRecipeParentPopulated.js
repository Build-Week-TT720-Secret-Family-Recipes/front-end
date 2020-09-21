import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../../Styles/Styles";
import Button from "@material-ui/core/Button";

const CreateRecipeParentWithDesc = ({
	recipe,
	recipeOrigin,
	recipePros,
	needToKnow,
	recipeName,
	steps,
	recipeImage,
}) => {
	const classes = useStyles();
	return recipe ? (
		<Grid container className={classes.recipeFormPopulatedContainer}>
			<Grid item className={classes.tempHeader}>
				<h2>{recipeName}</h2>
			</Grid>
			<Grid item className={classes.recipeFormPopulatedItem}>
				<Typography className={classes.recipeFormPopulatedText}>
					<h3>Recipe Information</h3>
					<h4> This recipe came from: {recipeOrigin}</h4>
					<h4> Whats great about this recipe?: {recipePros}</h4>
					<h4>
						{" "}
						What do you need to know before starting this Recipe?: {needToKnow}
					</h4>
					<h3>Ingredients</h3>
					<h4>no ingredients added yet</h4>
					<h3>Steps</h3>
					<h4>{steps}</h4>
					<h3>Additional Notes</h3>
					<h4>{recipeImage}</h4>
				</Typography>
				<Button variant="contained" color="secondary">
					{" "}
					ADD RECIPE TO COLLECTION{" "}
				</Button>
			</Grid>
		</Grid>
	) : (
		<Grid item className={classes.tempHeader}>
			Add a recipe
		</Grid>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(CreateRecipeParentWithDesc);
