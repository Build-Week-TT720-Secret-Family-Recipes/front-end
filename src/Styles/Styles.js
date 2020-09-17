import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
	loginFormContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100vh",
	},
	loginFormPaper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
    alignItems: "center",
    padding: "25px",
	},
	loginFormItem: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	loginHeader: {},
	loginForm: {
		margin: "30px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	loginFormInput: {
		margin: "30px",
	},
	loginButtonItem: {},
	loginButton: {},
});
