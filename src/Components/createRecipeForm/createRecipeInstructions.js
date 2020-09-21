import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import {reduxForm, Field} from 'redux-form'
import { useForm, Controller } from "react-hook-form";
//REDUX
import { connect } from "react-redux";
import { addToStateSteps } from "../../redux/actions";

//STYLING
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { useStyles } from "../../Styles/Styles";
import TextField from "@material-ui/core/TextField";
import { gsap } from "gsap";

//CRUD
//import axios from "axios";

function CreateRecipeInstructions(props) {
	const { register, handleSubmit, control } = useForm();
	const classes = useStyles();
	const expand = React.createRef();
	useEffect(() => {
		gsap.fromTo(
			expand.current,
			// these effects expand an image in the center of the screen.
			{
				//this first set of curly brackets is the from co-ordinates
				y: 0,
				x: 300,
				scale: 0,
				opacity: 0,
			},
			{
				//this first set of curly brackets is the from co-ordinates
				scale: 0.8,
				opacity: 1,
				duration: 3,
			}
		);
	});

	const onSubmit = (data) => {
		console.log(data);
		return props.addToStateSteps(data), props.display();
	};

	return (
		<Grid container className={classes.recipeDescriptionFormContainer}>
			<Grid item ref={expand} className={classes.recipeDescriptionFormItem}>
				<Typography variant="h2" className={classes.recipeHeader}>
					Recipe Instructions
				</Typography>
				<br></br>
				
					<TextField
						placeholder="Describe the steps to make this meal here"
						type="text"
						name="steps"
						className={classes.descFormInput}
						inputRef={register}
					/>

					
					<Grid item className={classes.descSubmit}>
						<Button
							variant="contained"
							color="secondary"
							onClick={handleSubmit(onSubmit)}
							className={classes.descSubmit}
						>
							ADD RECIPE INSTRUCTIONS
						</Button>
					</Grid>
			</Grid>
		</Grid>
	);
}
const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = {
	addToStateSteps
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipeInstructions)