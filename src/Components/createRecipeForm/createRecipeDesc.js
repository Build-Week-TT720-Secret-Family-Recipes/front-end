import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
//REDUX
import { connect } from "react-redux";
import { addToStateDescribe } from "../../redux/actions";

//STYLING
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "../../Styles/Styles";
import TextField from "@material-ui/core/TextField";
import { gsap } from "gsap";

//CRUD
//import axios from "axios";

function CreateRecipeDesc(props) {
	const { register, handleSubmit } = useForm();
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
		console.log(data)
		return props.addToStateDescribe(data), props.display();
	};

	return (
		<Grid container className={classes.recipeDescriptionFormContainer}>
			<Grid item ref={expand} className={classes.recipeDescriptionFormItem}>
				<Typography className={classes.formHeader}>Recipe Name</Typography>
				<TextField
					placeholder="Whats the name of this dish?"
					type="text"
					name="name"
					className={classes.descFormInput}
					inputRef={register}
				/>
				<Typography className={classes.formHeader}>
					When will you eat this?
				</Typography>

				<FormGroup row>
					<label key="Breakfast">
						<input
							type="checkbox"
							value="breakfast"
							name="category"
							ref={register}
						/>
						Breakfast
					</label>
					<label key="Lunch">
						<input
							type="checkbox"
							value="lunch"
							name="category"
							ref={register}
						/>
						Lunch
					</label>
					<label key="Dinner">
						<input
							type="checkbox"
							value="Dinner"
							name="category"
							ref={register}
						/>
						Dinner
					</label>
					<label key="Dessert">
						<input
							type="checkbox"
							value="Dessert"
							name="category"
							ref={register}
						/>
						Dessert
					</label>
					<label key="Snacks">
						<input
							type="checkbox"
							value="Snacks"
							name="category"
							ref={register}
						/>
						Snacks
					</label>
					<label key="Drinks">
						<input
							type="checkbox"
							value="Drinks"
							name="category"
							ref={register}
						/>
						Drinks
					</label>
					<label key="Appetizers">
						<input
							type="checkbox"
							value="Appetizers"
							name="category"
							ref={register}
						/>
						Appetizers
					</label>
					<label key="Whenever">
						<input
							type="checkbox"
							value="Whenever"
							name="category"
							ref={register}
						/>
						Whenever
					</label>
				</FormGroup>
				<Typography variant="h2" className={classes.formHeader}>
					Recipe Origin
				</Typography>
				<TextField
					placeholder="Where did you get this recipe from?"
					type="text"
					name="where"
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipeDesc);
