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

	accessCatagorySpecificFormContainerLeft: {
		border: "2px solid blue",
		display: "flex",
		width: "50vw",
	},

	accessCatagorySpecificFormContainerRight: {
		border: "2px solid green",
		display: "flex",
		flexDirection: "row-reverse",
		width: "50vw",
	},
	ul: {
		border: "2px solid red",
		height: "250px",
		width: "70%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
	},
	formInfo: {
		display: "flex",
		flexDirection: "column",
		justifyItems: "center",
		alignItems: "center",
	},
	accessCatagorySpecificFormDescribe: {
		backgroundImage: `url(${createRecipesDescription})`,
		margin: "60px",
		backgroundSize: "cover",
		borderRadius: "50px",
		width: "20%",
		height: "125px",
	},
	accessCatagorySpecificFormIngredients: {
		backgroundImage: `url(${createRecipesDescription})`,
		margin: "60px",
		backgroundSize: "cover",
		borderRadius: "50px",
		width: "20%",
		height: "125px",
	},
	accessCatagorySpecificFormDefineSteps: {
		backgroundImage: `url(${createRecipesDescription})`,
		margin: "60px",
		backgroundSize: "cover",
		borderRadius: "50px",
		width: "20%",
		height: "125px",
	},
	accessCatagorySpecificFormAdtnlInstr: {
		backgroundImage: `url(${createRecipesDescription})`,
		margin: "60px",
		backgroundSize: "cover",
		borderRadius: "50px",
		width: "20%",
		height: "125px",
	},
	createRecipeDescriptionText: {
		height: "100%",
		marginTop: "20px",
		fontSize: "1vw",
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
