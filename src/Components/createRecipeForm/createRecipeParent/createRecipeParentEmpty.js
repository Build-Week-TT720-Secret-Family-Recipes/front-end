import React, { useState, useEffect } from "react";
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
import { useStyles } from "../../../Styles/Styles";
import Paper from "@material-ui/core/Paper";
import { gsap } from "gsap";
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
	const delay0 = React.createRef();
	const delay1 = React.createRef();
	const delay2 = React.createRef();
	const delay3 = React.createRef();
	useEffect(() => {
		gsap.fromTo(
			delay0.current,
			// these effects expand an image in the center of the screen.
			{
				//this first set of curly brackets is the from co-ordinates
				y: 0,
				x: 300,
				opacity: 0,
			},
			{
				//this first set of curly brackets is the from co-ordinates
				y: 0,
				x: 0,
				opacity: 1,
				duration: 1,
				delay: 1,
			}
		);
		gsap.fromTo(
			delay1.current,
			// these effects expand an image in the center of the screen.
			{
				//this first set of curly brackets is the from co-ordinates
				y: 0,
				x: 300,
				opacity: 0,
			},
			{
				//this first set of curly brackets is the from co-ordinates
				y: 0,
				x: 0,
				opacity: 1,
				duration: 1,
				delay: 1,
			}
		);
		gsap.fromTo(
			delay2.current,
			// these effects expand an image in the center of the screen.
			{
				//this first set of curly brackets is the from co-ordinates
				y: 0,
				x: -300,
				opacity: 0,
			},
			{
				//this first set of curly brackets is the from co-ordinates
				y: 0,
				x: 0,
				opacity: 1,
				duration: 1,
				delay: 1,
			}
		);
		gsap.fromTo(
			delay3.current,
			// these effects expand an image in the center of the screen.
			{
				//this first set of curly brackets is the from co-ordinates
				y: 0,
				x: -300,
				opacity: 0,
			},
			{
				//this first set of curly brackets is the from co-ordinates
				y: 0,
				x: 0,
				opacity: 1,
				duration: 1,
				delay: 1,
			}
		);
	});
	return temporaryState.createDisplay ? (
		<Grid container className={classes.createRecipeContainer}>
			<Grid container className={classes.recipe}>
				<Grid item>
					<CreateRecipeParentWithDesc />
				</Grid>
			</Grid>
			<Grid
				container
				ref={delay0}
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
				ref={delay1}
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
				ref={delay2}
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
				ref={delay3}
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
