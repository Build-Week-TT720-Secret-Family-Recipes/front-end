import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	breakpoints: {
		values: {
			iPhone: 480,
			tablet: 640,
			laptop: 1024,
			desktop: 1280,
		},
	},
});

export const useStyles = makeStyles((theme) => ({
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
	loginButtonItem: { width: "85%" },
	loginButton: { width: "100%" },
	dontHaveAnAccountText: {
		width: "100%",
		textAlign: "center",
	},
	signUpButtonOnLogInPage: {
		width: "100%",
		marginTop: "25px",
	},
	signUpButtonItem: {
		padding: "25px",
	},
}));
