import React from 'react';
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "/Users/quietcalmrecords/School/Unit3/BUILDWEEK 3/front-end/src/Styles/Styles.js";

const CreateRecipeParentWithDesc = ({
	recipeOrigin,
	recipePros,
	needToKnow,
}) => {
const classes = useStyles();
	return recipeOrigin ? (
		<div>
			<h3>Recipe Information</h3>
			<h4> Recipe Origin: {recipeOrigin}</h4>
			<h4> Whats great about this recipe?: {recipePros}</h4>
			<h4>
				{" "}
				What do you need to know before starting this Recipe?: {needToKnow}
			</h4>
		</div>
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