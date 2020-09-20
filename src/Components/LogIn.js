import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form'

//STYLING
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "../Styles/Styles";

import TextField from '@material-ui/core/TextField';


//CRUD
import axios from "axios";


function Login() {
    //STYLING
    const classes = useStyles();


    //HOOKS

    const { push } = useHistory();
    const { register, handleSubmit, errors, } = useForm();
	//HANDLERS

    const formSubmit = (data) => {
        axios
        	.post("", data)
        	.then((res) => {
        		console.log("login response:", data);
        		localStorage.setItem("token", res.data.token);
        		push("/protected");
        	})
        	.catch((err) => {
        		console.log(err);
        	});
    };

    return (
        <Grid container className={classes.loginFormContainer}>
            <Paper className={classes.loginFormPaper}>
                <Grid item className={classes.loginFormItem}>
                    <Typography variant="h2" className={classes.loginHeader}>
                        Log In
					</Typography>
                    <form onSubmit={handleSubmit(formSubmit)} className={classes.loginForm}>
                       
                            <TextField
                                placeholder="Username"
                                type="username"
                                name="username"
                                className={classes.loginFormInput}
								inputRef={register({ required: true })} />
                      
            {errors.username && "Username is required"}
                        <br>
                        </br>
                        <TextField
                            placeholder="Password"
                            type="password"
                            name="password"
                            className={classes.loginFormInput}
                            inputRef={register({ required: true })} />

                        {errors.password && "Password is required"}

        </form>
                </Grid>
                <Grid item className={classes.loginButtonItem}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleSubmit(formSubmit)}
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
                            // onClick={history.push("/signup")}
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

export default Login