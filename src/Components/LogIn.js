import React, { useState, useForm } from "react";
import { useHistory } from "react-router-dom";

//STYLING
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "../styles/styles";

//CRUD
import axios from "axios";

function LogIn(props) {
	//STYLING
	const classes = useStyles();

	//HOOKS
	const defaultState = { username: "", password: "" };
	const [formState, setFormState] = useState(defaultState);
  const { push } = useHistory();
  const { register, handleSubmit, errors } = useForm();
	//HANDLERS

	const formSubmit = (e) => {
		e.preventDefault();
		axios
			.post("", formState)
			.then((res) => {
				console.log("login response:", res);
				localStorage.setItem("token", res.data.token);
				push("/protected");
			})
			.catch((err) => {
				console.log(err);
			});
		console.log(formState);
	};

	const changeHandler = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Grid container className={classes.loginFormContainer}>
			<Paper className={classes.loginFormPaper}>
				<Grid item className={classes.loginFormItem}>
					<Typography variant="h2" className={classes.loginHeader}>
						Log In
					</Typography>
					<form onSubmit={formSubmit} className={classes.loginForm}>
						<label>
							<input
								placeholder="Username"
								type="text"
								onChange={changeHandler}
								name="username"
								value={formState.username}
								className={classes.loginFormInput}
							/>
						</label>
						<label>
							<input
								placeholder="Password"
								type="text"
								onChange={changeHandler}
								name="password"
								value={formState.password}
							/>
						</label>
					</form>
				</Grid>
				<Grid item className={classes.loginButtonItem}>
					<Button
						variant="contained"
						color="secondary"
						onClick={formSubmit}
						className={classes.loginButton}
					>
						LOG IN
					</Button>
				</Grid>
				<Grid container className={classes.signUpButtonItem}>
					<Grid item>
						<Typography variant="h6" className={classes.dontHaveAnAccountText}>
							Dont have an account?{" "}
							<Button
								className={classes.signUpButtonOnLogInPage}
								variant="contained"
								color="secondary"
								//onClick={history.push("/signup")}
							>
								Sign Up
							</Button>
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
}

export default LogIn;
