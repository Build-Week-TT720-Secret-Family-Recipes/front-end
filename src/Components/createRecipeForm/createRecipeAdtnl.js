import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
//REDUX
import { connect } from "react-redux";
import { addToStateAdditionalInstructions } from "../../redux/actions";

//STYLING
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "../../Styles/Styles";
import TextField from "@material-ui/core/TextField";
import { gsap } from "gsap";

//CRUD
//import axios from "axios";

function CreateRecipeAdtnl(props) {
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
		console.log(data);
		return props.addToStateAdditionalInstructions(data), props.display();
	};

	return (
		<Grid container className={classes.recipeDescriptionFormContainer}>
			<Grid item ref={expand} className={classes.recipeDescriptionFormItem}>
				<Typography variant="h2" className={classes.loginHeader}>
					Add an image
				</Typography>
				<br></br>
				<TextField
					placeholder="Enter a URL to add an image to your recipe"
					type="text"
					name="recipeImage"
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
						ADD IMAGE
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
	addToStateAdditionalInstructions,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateRecipeAdtnl);
