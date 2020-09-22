import React from "react";
//import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "../Styles/Styles";

import TextField from "@material-ui/core/TextField";

function Register(props) {


    const classes = useStyles();


  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
   
    axios
			.post("https://tt720-secret-family-recipes.herokuapp.com/register", data)
			.then((res) => {
				console.log(res);
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
            Register
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}
          className={classes.loginForm}>
            <TextField
              type="name"
              placeholder="Name"
              name="name"
              className={classes.loginFormInput}
              ref={register}
            />
            <br>
                        </br>
            <TextField
              type="username"
              placeholder="Username"
              name="username"
              className={classes.loginFormInput}
              inputRef={register({ required: "Username required" })}
            />
            {errors.username && <p>{errors.username.message}</p>}
            <br>
                        </br>
            <TextField
              type="password"
              placeholder="Password"
              name="password"
              className={classes.loginFormInput}
              inputRef={register({ required: true, minLength: 5 })}
            />
            {errors.password && (
              <p>Password must include at least 5 characters</p>
            )}
          </form>
        </Grid>
        <Grid item className={classes.loginButtonItem}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubmit(onSubmit)}
            className={classes.loginButton}
          >
            Register
          </Button>
        </Grid>
        <Grid container className={classes.signUpButtonItem}>
          <Grid item>
            <Typography variant="h6" className={classes.dontHaveAnAccountText}>
              Already have an account?{" "}
              <Button
                className={classes.signUpButtonOnLogInPage}
                variant="contained"
                color="secondary"
                // onClick={history.push("/signup")}
              >
                Login
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Register;
