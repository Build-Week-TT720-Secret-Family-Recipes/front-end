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
			<Grid container>
				<Grid item>
					<CreateRecipeParentWithDesc />
				</Grid>
			</Grid>
			<Grid
				container
				className={
					describePopulated
						? classes.hideEl
						: classes.accessCatagorySpecificFormContainerLeft
				}
				onClick={() =>
					setTemporaryState({
						...temporaryState,
						createDisplay: false,
						descDisplay: true,
					})
				}
			>
				<Grid
					item
					className={classes.accessCatagorySpecificFormDescribe}
				></Grid>
				<Grid item className={classes.formInfo}>
					<Typography className={classes.ul}>
						Give your new recipe a name.
						<br></br>
						Record where you found it.
						<br></br>
						Be sure to notate important things to know before starting
						<br></br>
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				className={
					ingredientsPopulated
						? classes.hideEl
						: classes.accessCatagorySpecificFormContainerRight
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
				className={
					stepsPopulated
						? classes.hideEl
						: classes.accessCatagorySpecificFormContainerLeft
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

				</Grid>
				<Grid item className={classes.formInfo}>
					<Typography className={classes.ul}>
						temporaryState
						<br></br>
						test
					</Typography>
				</Grid>
			</Grid>
			<Paper
				container
				className={
					additionalInstructionsPopulated
						? classes.hideEl
						: classes.accessCatagorySpecificFormContainerRight
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
					
				</Grid>
				<Grid item className={classes.formInfo}>
					<Typography className={classes.ul}>
						temporaryState
						<br></br>
						test
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
