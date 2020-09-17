import React from 'react';

//STYLING
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {useStyles} from '../styles/styles'

//CRUD
//import axios from "axios";

function LogIn(props) {
      const classes = useStyles();
    return (
            <Grid container className={classes.loginFormContainer}>
                <Paper className={classes.loginFormPaper}>
                    <Grid item className={classes.loginFormItem}>
                        <Typography variant="h2" className={classes.loginHeader}>
                            Log In
                        </Typography>
                        <form onSubmit={null} className={classes.loginForm}>
                            <label>
                                <input
                                    placeholder="Username"
                                    type="text"
                                    onChange={null}
                                    name="username"
                                    value={null}
                                    errors={null}
                                />
                            </label>
                            <label>
                                <input
                                    placeholder="Password"
                                    type="text"
                                    onChange={null}
                                    name="password"
                                    value={null}
                                    errors={null}
                                />
                            </label>
                        </form>
                    </Grid>
                    <Grid item className={classes.loginButtonItem}>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{ color: "white" }}
                            onClick={null}
                            className={classes.loginButton}
                        >LOG IN</Button>
                    </Grid>
                </Paper>
            </Grid>
        );
}

export default LogIn;