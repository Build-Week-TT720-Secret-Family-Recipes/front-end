import { makeStyles } from "@material-ui/core/styles";
import describe from "./assets/describe.png";
import ingredients from "./assets/ingredients.png";
import actualGrammaFish from "./assets/actualGrammaFish.jpg";
import GrammaBanner from "./assets/GrammaBanner.png";
import whisk from "./assets/whisk.jpg";
import stepsImage from "./assets/stepsImage.jpg";
import createRecipeBackground0 from "./assets/createRecipeBackground0.jpg";
import addntlInfo from "./assets/addntlInfo.jpeg";
export const useStyles = makeStyles((theme) => ({
	//GLOBAL
	hideEl: {
		display: "none",
	},
	//LOGIN FORM
	loginFormContainer: {
		boxSizing: "border-box",
		position: "absolute",
		top: "-1px",
		left: "-1px",
		bottom: "-1px",
		opacity: "90%",
		backgroundImage: `url(${actualGrammaFish})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		display: "flex",
		flexDirection: "row",
		justifyContent: "left",

		alignItems: "center",
		width: "100%",
		height: "100vh",
	},
	loginFormPaper: {
		marginLeft: "100px",
		opacity: "0.8",
		borderRadius: "20px",
		boxShadow: "5px 10px 18px #888888",
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
	//DASHBOARD

	dashboardContainer: {
		width: "100vw",
		height: "100vh",
		top: "-1px",
		left: "-1px",
		bottom: "-1px",
		opacity: "90%",
		backgroundImage: `url(${GrammaBanner})`,
		backgroundSize: "cover",
	},
	GranmaBanner: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
	},
	buttonsDashboard: {

		height: "15vh",
		width: "100vw",
		display: "flex",
		justifyContent: "space-around",
	},
	dashboardRegisterButton: {
		opacity: "0.8",
		width: "8%",
		height: "90%",
		borderRadius: "200px",

	},
	//CREATE RECIPE PARENT
	recipe: {},
	recipeHeader: {
		fontSize: "6vw",
	},
	createRecipeContainer: {
		boxSizing: "border-box",
		position: "absolute",
		top: "-1px",
		left: "-1px",
		bottom: "-1px",
		backgroundImage: `url(${createRecipeBackground0})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100vw",
		height: "100vh",
	},
	tempHeader: {
		color: "beige",
		width: "100vw",
		textAlign: "center",
		fontSize: "6vw",
		marginTop: "-100px",
	},
	formHeader: {
		fontSize: "3vw",
	},
	accessCatagorySpecificFormContainer: {
		border: "2px solid gold",
		backgroundImage: `url(${describe})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		margin: "10px",
		marginTop: "-200px",
		borderRadius: "50px",
		display: "flex",
		justifyContent: "center",
		width: "20vw",
		boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
	},
	accessCatagorySpecificFormContainer1: {
		border: "2px solid gold",
		backgroundImage: `url(${ingredients})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		margin: "10px",
		marginTop: "-200px",
		borderRadius: "50px",
		display: "flex",
		justifyContent: "center",
		width: "20vw",
		boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
	},
	accessCatagorySpecificFormContainer2: {
		border: "2px solid gold",
		backgroundImage: `url(${stepsImage})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		margin: "10px",
		marginTop: "-200px",
		borderRadius: "50px",
		display: "flex",
		justifyContent: "center",
		width: "20vw",
		boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
	},
	accessCatagorySpecificFormContainer3: {
		border: "2px solid gold",
		backgroundImage: `url(${addntlInfo})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		margin: "10px",
		marginTop: "-200px",
		borderRadius: "50px",
		display: "flex",
		justifyContent: "center",
		width: "20vw",
		boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
	},
	ul: {
		fontSize: "1vw",

		width: "100%",
		height: "100%",
		textAlign: "center",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		opacity: "1",
	},
	formInfo: {
		display: "flex",
		flexDirection: "column",
		justifyItems: "center",
		alignItems: "center",
	},
	accessCatagorySpecificFormDescribe: {
		backgroundColor: "#DF98F5",
		opacity: "0.9",
		margin: "20px",
		backgroundSize: "cover",
		borderRadius: "150px",
		width: "60%",
		height: "100px",
	},
	accessCatagorySpecificFormIngredients: {
		backgroundColor: "#DF98F5",
		opacity: "0.9",
		margin: "20px",
		backgroundSize: "cover",
		borderRadius: "150px",
		width: "60%",
		height: "100px",
	},
	accessCatagorySpecificFormDefineSteps: {
		backgroundColor: "#DF98F5",
		opacity: "0.9",
		margin: "20px",
		backgroundSize: "cover",
		borderRadius: "150px",
		width: "60%",
		height: "100px",
	},
	accessCatagorySpecificFormAdtnlInstr: {
		backgroundColor: "#DF98F5",
		opacity: "0.9",
		margin: "20px",
		backgroundSize: "cover",
		borderRadius: "150px",
		width: "60%",
		height: "100px",
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
		position: "absolute",
		top: "-1px",
		left: "-1px",
		bottom: "-1px",
		backgroundImage: `url(${createRecipeBackground0})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},
	recipeDescriptionFormItem: {
		backgroundColor: "#515664",
		width: "60vw",
		borderRadius: "50px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
	},
	descFormInput: {
		width: "50vw",
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

	//RECIPE POPULATED
	recipeFormPopulatedContainer: {
		width: "100vw",
		marginTop: "-100px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	recipeFormPopulatedItem: {
		backgroundColor: "#F0EAD6",
		width: "70%",
		height: "80%",
		borderRadius: "100px",
	},
	recipeFormPopulatedText: {
		width: "100%",
		textAlign: "center",
	},
	recipeName: {
		color: "beige",
		fontSize: "3.5vw",
	},
	categoryName: {
		color: "beige",
		fontSize: "1.5vw",
	},
	recipeOrigin: {},
	recipeIngredients: {},
	recipeStepsTitle: {
		fontSize: "2vw",
	},
	recipeSteps: {
		fontSize: "1vw",
	},
	recipeImage: {
		width: "10vw",
		borderRadius: "50px",
	},
	addRecipe: {
		width: "70vw",
		display: "flex",
		justifyContent: "center",
	},
	addRecipeButton: {},
	recipeDescriptionFormDialog: {
		border: "3px solid gold",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	dialogFormInput: {
		width: "100%",
	},
	dialogHeader: {
		textAlign: "center",
		margin: "20px 20px",
	},
	formgroup: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	root: {
		maxWidth: 345,
		backgroundColor: "#D9F8FE",
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: "red",
	},
	title: {
		fontStyle: "italic",
		fontSize: "3vw",
	},
	content: {
		font: "",
	},
	recipeGridContainer: {
		display: "flex",

		justifyContent: "space-around",

		height: "100vh",
		//width: "100%",
	},
	recipeGrid: {
		height: "100vh",
		width: "100vw",
		margin: "20px",
		border: "2px solid red",
	},
	recipeCard: {

	},
}));
