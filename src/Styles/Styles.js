import { makeStyles } from "@material-ui/core/styles";
import createRecipesDescription from "./assets/createRecipesDescription.jpg";

export const useStyles = makeStyles((theme) => ({
	//GLOBAL
	hideEl: {
display: "none",
	},
	//LOGIN FORM
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
	//CREATE RECIPE PARENT
	createRecipeContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	tempHeader: {
		border: "2px solid red",
	},
	createRecipeDescription: {
		backgroundImage: `url(${createRecipesDescription})`,
		margin: "20px",
		backgroundSize: "cover",
		borderRadius: "50px",
		width: "50%",
		height: "250px",
	},
	createRecipeDescriptionText: {
		height: "100%",
		marginTop: "20px",
		fontSize: "2vw",
		color: "blue",
		display: "flex",
		flexDirection: "column",
		justifyContent: "top",
		alignItems: "center",
	},
	//CREATE RECIPE CHILD - DESCRIPTION
	recipeDescriptionFormContainer: {
		width: "98vw",
		height: "98vh",
		// border: "5px solid gold",
	},
	recipeDescriptionFormItem: {
		width: "60vw",
		// border: "5px solid red",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	descFormInput: {
		width: "60vw",
	},
	descSubmit: {
		margin: "20px",
	},
	//RECIPE STEPS
	recipeStepsFormItem: {
		width: "70vw",
		border: "5px solid red",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
}));
