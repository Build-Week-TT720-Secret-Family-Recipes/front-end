import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "../Styles/Styles";
import Login from "./LogIn";
import Register from "./Register";

function LoginRegister(props) {
	const classes = useStyles();
	return (
		<Grid container className={classes.LoginRegisterContainer}>
            <Grid item className={classes.formBox}>
                <Register />
            </Grid>
            <Grid item className={classes.formBox}>
				<Login />
			</Grid>
			
		</Grid>
	);
}

export default LoginRegister;
