import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import {reduxForm, Field} from 'redux-form'
import { useForm } from "react-hook-form";
//REDUX
import { connect } from "react-redux";
import { addToStateDescribe } from "../../redux/actions";

//STYLING
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { useStyles } from "/Users/quietcalmrecords/School/Unit3/BUILDWEEK 3/front-end/src/Styles/Styles.js";
import TextField from '@material-ui/core/TextField'
import { gsap } from 'gsap'

//CRUD
//import axios from "axios";


function CreateRecipeDesc(props) {
const {register, handleSubmit} = useForm()
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
		return(
		props.addToStateDescribe(data),
		props.display()
		)
	}

	
	return (
		<Grid container className={classes.recipeDescriptionFormContainer}>
			<Grid item ref={expand} className={classes.recipeDescriptionFormItem}>
				<Typography variant="h2" className={classes.loginHeader}>
					When will you eat this?
				</Typography>
				<br></br>
				<FormGroup row onSubmit={handleSubmit(onSubmit)}>
					<FormControlLabel
						control={<Checkbox name="checkedC" />}
						label="Breakfast"
					/>
					<FormControlLabel
						control={<Checkbox name="checkedC" />}
						label="Lunch"
					/>
					<FormControlLabel
						control={<Checkbox name="checkedC" />}
						label="Dinner"
					/>
					<FormControlLabel
						control={<Checkbox name="checkedC" />}
						label="Desert"
					/>
					<FormControlLabel
						control={<Checkbox name="checkedC" />}
						label="Snacks"
					/>
					<FormControlLabel
						control={<Checkbox name="checkedC" />}
						label="Drinks"
					/>
					<FormControlLabel
						control={<Checkbox name="checkedC" />}
						label="Whenever"
					/>
				</FormGroup>
				<br></br>
				<Typography variant="h2" className={classes.loginHeader}>
					Recipe Description
				</Typography>
				<TextField
					placeholder="Where did you get this recipe from?"
					type="text"
					name="where"
					className={classes.descFormInput}
					inputRef={register}
				/>
				<TextField
					placeholder="Whats great about this recipe?"
					type="text"
					name="great"
					className={classes.descFormInput}
					inputRef={register}
				/>
				<TextField
					placeholder="Before you begin, what do you need to know"
					type="text"
					name="before"
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
						ADD RECIPE DESCRIPTION
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
	addToStateDescribe,
};

export default connect(mapStateToProps, mapDispatchToProps) (CreateRecipeDesc);

