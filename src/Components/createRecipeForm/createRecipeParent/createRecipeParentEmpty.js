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
import Paper from "@material-ui/core/Paper";
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
			<Grid container className={classes.recipe}>
				<Grid item>
					<CreateRecipeParentWithDesc />
				</Grid>
			</Grid>
			<Grid
				container
				className={
					describePopulated
						? classes.hideEl
						: classes.accessCatagorySpecificFormContainer
				}
				onClick={() =>
					setTemporaryState({
						...temporaryState,
						createDisplay: false,
						descDisplay: true,
					})
				}
			>
				<Grid item className={classes.accessCatagorySpecificFormDescribe}>
					<Typography className={classes.ul}>INTRODUCTION</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				className={
					ingredientsPopulated
						? classes.hideEl
						: classes.accessCatagorySpecificFormContainer1
				}
				onClick={() =>
					setTemporaryState({
						...temporaryState,
						createDisplay: false,
						ingDisplay: true,
					})
				}
			>
				<Grid item className={classes.accessCatagorySpecificFormIngredients}>
					<Typography className={classes.ul}>ADD INGREDIENTS</Typography>
				</Grid>
			</Grid>
			<Paper
				container
				className={
					stepsPopulated
						? classes.hideEl
						: classes.accessCatagorySpecificFormContainer2
				}
				onClick={() =>
					setTemporaryState({
						...temporaryState,
						createDisplay: false,
						stepsDisplay: true,
					})
				}
			>
				<Grid item className={classes.accessCatagorySpecificFormDefineSteps}>
					<Typography className={classes.ul}>ADD STEPS</Typography>
				</Grid>
			</Paper>
			<Paper
				container
				className={
					additionalInstructionsPopulated
						? classes.hideEl
						: classes.accessCatagorySpecificFormContainer3
				}
				onClick={() =>
					setTemporaryState({
						...temporaryState,
						createDisplay: false,
						addDisplay: true,
					})
				}
			>
				<Grid item className={classes.accessCatagorySpecificFormAdtnlInstr}>
					<Typography className={classes.ul}>
						ADDITIONAL INSTRUCTIONS
					</Typography>
				</Grid>
			</Paper>
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
