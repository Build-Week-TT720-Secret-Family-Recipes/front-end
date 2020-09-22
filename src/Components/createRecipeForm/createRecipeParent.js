import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

//COMPONENT IMPORTS
import CreateRecipeDesc from "./createRecipeDesc";
import CreateRecipeIngredients from "./createRecipeIngedients";
import CreateRecipeInstructions from "./createRecipeInstructions";
import CreateRecipeAdtnl from "./createRecipeAdtnl";

//STYLING
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "../../Styles/Styles";
import TextField from "@material-ui/core/TextField";



//CRUD
//import axios from "axios";

function CreateRecipe() {
	//STATE
	const [temporaryState, setTemporaryState] = useState({
		createDisplay: true,
		descDisplay: false,
		ingDisplay: false,
		stepsDisplay: false,
		addDisplay: false,
	});
	//STYLING
	const classes = useStyles();

	return temporaryState.createDisplay ? (
		<Grid container className={classes.createRecipeContainer}>
			<Grid item classname={classes.tempHeader}>
				Add a recipe
			</Grid>
			<Grid
				item
				className={classes.createRecipeDescription}
				onClick={() =>
					setTemporaryState({
						...temporaryState,
						createDisplay: false,
						descDisplay: true,
					})
				}
			>
				<Typography className={classes.createRecipeDescriptionText}>
					Categorize & describe your recipe here
				</Typography>
			</Grid>
			<Grid
				item
				className={classes.createRecipeDescription}
				onClick={() =>
					setTemporaryState({
						...temporaryState,
						createDisplay: false,
						ingDisplay: true,
					})
				}
			>
				<Typography className={classes.createRecipeDescriptionText}>
					List the ingredients & measurements here
				</Typography>
			</Grid>
			<Grid
				item
				className={classes.createRecipeDescription}
				onClick={() =>
					setTemporaryState({
						...temporaryState,
						createDisplay: false,
						stepsDisplay: true,
					})
				}
			>
				<Typography className={classes.createRecipeDescriptionText}>
					Define the steps here
				</Typography>
			</Grid>
			<Grid
				item
				className={classes.createRecipeDescription}
				onClick={() =>
					setTemporaryState({
						...temporaryState,
						createDisplay: false,
						addDisplay: true,
					})
				}
			>
				<Typography className={classes.createRecipeDescriptionText}>
					Any additional instructions can go here
				</Typography>
			</Grid>
		</Grid>
	) : temporaryState.descDisplay ? (
		<CreateRecipeDesc />
	) : temporaryState.ingDisplay ? (
		<CreateRecipeIngredients />
	) : temporaryState.stepsDisplay ? (
		<CreateRecipeInstructions />
	) : temporaryState.addDisplay ? (
		<CreateRecipeAdtnl />
	) : (
		<div>ERROR</div>
	);
}

export default CreateRecipe;
