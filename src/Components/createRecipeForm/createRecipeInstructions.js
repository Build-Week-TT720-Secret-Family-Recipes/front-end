import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { useForm } from "react-hook-form";

// //STYLING
// import Typography from "@material-ui/core/Typography";
// import FormGroup from "@material-ui/core/FormGroup";
// import Grid from "@material-ui/core/Grid";
// import Checkbox from "@material-ui/core/Checkbox";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Button from "@material-ui/core/Button";
// import Paper from "@material-ui/core/Paper";
//import { useStyles } from "/Users/quietcalmrecords/School/Unit3/BUILDWEEK 3/front-end/src/Styles/Styles.js";
// import TextField from "@material-ui/core/TextField";
import { gsap } from "gsap";
//CRUD
//import axios from "axios";


function CreateRecipeInstructions(props) {
     // const classes = useStyles()
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
    return (
			<div>

			</div>
    )
}

export default CreateRecipeInstructions;