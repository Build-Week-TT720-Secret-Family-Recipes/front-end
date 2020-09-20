import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

import { connect } from "react-redux";

//COMPONENT IMPORTS
import CreateRecipeDesc from "../createRecipeDesc";
import CreateRecipeIngredients from "../createRecipeIngedients";
import CreateRecipeInstructions from "../createRecipeInstructions";
import CreateRecipeAdtnl from "../createRecipeAdtnl";
import CreateRecipeParentWithDesc from "./createRecipeParentPopulated";
//STYLING
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "/Users/quietcalmrecords/School/Unit3/BUILDWEEK 3/front-end/src/Styles/Styles.js";

//CRUD
//import axios from "axios";

function CreateRecipe({
	stepsPopulated,
	describePopulated,
	ingredientsPopulated,
	additionalInstructionsPopulated,
}) {
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
			<Grid container>
				<Grid item>
					<CreateRecipeParentWithDesc />
				</Grid>
			</Grid>
			<Grid
				container
				className={classes.accessCatagorySpecificFormContainerLeft}
			>
				<Grid
					item
					className={
						describePopulated
							? classes.hideEl
							: classes.accessCatagorySpecificFormDescribe
					}
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
				<Grid item className={classes.formInfo}>
					<Typography className={classes.ul}>
						temporaryState
						<br></br>
						test
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				className={classes.accessCatagorySpecificFormContainerRight}
			>
				<Grid
					item
					className={
						ingredientsPopulated
							? classes.hideEl
							: classes.accessCatagorySpecificFormIngredients
					}
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
				<Grid item className={classes.formInfo}>
					<Typography className={classes.ul}>
						temporaryState
						<br></br>
						test
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				className={classes.accessCatagorySpecificFormContainerLeft}
			>
				<Grid
					item
					className={
						stepsPopulated
							? classes.hideEl
							: classes.accessCatagorySpecificFormDefineSteps
					}
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
				<Grid item className={classes.formInfo}>
					<Typography className={classes.ul}>
						temporaryState
						<br></br>
						test
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				className={classes.accessCatagorySpecificFormContainerRight}
			>
				<Grid
					item
					className={
						additionalInstructionsPopulated
							? classes.hideEl
							: classes.accessCatagorySpecificFormAdtnlInstr
					}
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
				<Grid item className={classes.formInfo}>
					<Typography className={classes.ul}>
						temporaryState
						<br></br>
						test
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	) : temporaryState.descDisplay ? (
		<CreateRecipeDesc
			display={() =>
				setTemporaryState({
					...temporaryState,
					createDisplay: true,
					descDisplay: false,
				})
			}
		/>
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
const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipe);
