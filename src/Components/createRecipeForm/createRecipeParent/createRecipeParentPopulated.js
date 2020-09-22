import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../../Styles/Styles";
import Button from "@material-ui/core/Button";
import { axiosWithAuth } from '../../../API/AxiosWithAuth'
import { useHistory } from "react-router-dom";

const CreateRecipeParentWithDesc = ({
	recipe,
	recipeOrigin,
	describePopulated,
	categoryId,
	userId,
	stepsPopulated,
	ingredients,
	ingredientsPopulated,
	recipeName,
	steps,
	recipeImage,
}) => {
	const classes = useStyles();
	const { push } = useHistory();
	const sendRecipeObject = () => {
		const recipeObject = {
			title:  recipeName ,
			source:  recipeOrigin ,
			imgUrl:  recipeImage ,
			ingredients: '[{id,quantity,recipe_id,}]',
			instructions:  steps ,
			categoryId:  categoryId ,
			userId: userId ,
		};
		console.log(recipeObject);
		axiosWithAuth()
			.post(`/recipes`, recipeObject)
			.then((res) => {
				push("/dashboard");
			})
			.catch((err) => {
				console.log("error: ", err)
				push("/dashboard");
		});
	};
	return recipe ? (
		<Grid container className={classes.recipeFormPopulatedContainer}>
			<Grid item>
				<Typography className={classes.recipeName}>{recipeName}</Typography>
			</Grid>
			<Grid item>
				<Typography className={classes.categoryName}>{categoryId}</Typography>
			</Grid>
			<Grid item className={classes.recipeFormPopulatedItem}>
				<Typography
					className={
						describePopulated ? classes.recipeFormPopulatedText : classes.hideEl
					}
				>
					This recipe came from: {recipeOrigin}
					<Typography
						className={
							ingredientsPopulated ? classes.recipeStepsTitle : classes.hideEl
						}
					>
						Ingredients
					</Typography>
					<Typography className={classes.recipeIngredients}>
						{ingredients}
					</Typography>
					<Typography
						className={
							stepsPopulated ? classes.recipeStepsTitle : classes.hideEl
						}
					>
						Steps
					</Typography>
					<Typography>{steps}</Typography>
					<img
						src={recipeImage}
						alt="recipeImage"
						className={recipeImage ? classes.recipeImage : classes.hideEl}
					/>
				</Typography>
				<Grid
					item
					className={
						ingredientsPopulated
							? classes.addRecipe
							: stepsPopulated
							? classes.classes.addRecipe
							: classes.hideEl
					}
				>
					<Button
						variant="contained"
						color="secondary"
						onClick={sendRecipeObject}
					>
						ADD RECIPE TO COLLECTION
					</Button>
				</Grid>
			</Grid>
		</Grid>
	) : (
		<Grid item className={classes.tempHeader}>
			Add a recipe
		</Grid>
	);
};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(CreateRecipeParentWithDesc);
