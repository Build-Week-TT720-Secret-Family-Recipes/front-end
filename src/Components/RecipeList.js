import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "../Styles/Styles";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import { gsap } from "gsap";
import RecipeCard from "./RecipeCard/RecipeCard";
import { axiosWithAuth } from "../API/AxiosWithAuth";
import CreateRecipe from "./createRecipeForm/createRecipeParent/createRecipeParentEmpty";

function RecipeList2(props) {
    const { push } = useHistory();
	const classes = useStyles();
	const [recipes, setRecipes] = useState([]);
	const [searchValue, setSearchValue] = useState([]);
	useEffect(() => {
		axiosWithAuth()
			.get("/recipes")
            .then((res) => 
           setRecipes(res.data),

            )
			.catch((err) => console.log(err.response));
	}, []);
	const handleSearchChanges = (e) => {
		setSearchValue(e.target.value);
		// console.log("searchValue: ", searchValue);
	};
	// const { push } = useHistory();
	const onSubmit = (e) => {
		e.preventDefault();

		setRecipes(filteredRecipes);
		setSearchValue("");
		// console.log("searchValue after submit: ", searchValue);
	};
	let filteredRecipes = recipes.filter((recipe) => {
		return recipe.title.indexOf(searchValue) !== -1;
	});
	return (
		<Grid container>
			<Grid item className={classes.RecipeListHeader}>
				<div className="ui violet inverted menu">
					<div className="header item">Secret Recipes</div>
					<a className="active item" href="/">
						All My Recipes
					</a>
					<div className="right menu">
						<div className="item">
							<div className="ui action left icon input">
								<i className="search icon"></i>
								<input
									type="text"
									placeholder="Search Recipes"
									value={searchValue}
									onChange={handleSearchChanges}
								/>
								<button className="ui button" onClick={onSubmit}>
									Submit
								</button>
							</div>
						</div>
						<a className="item" href="/register">
							Logout
						</a>
					</div>
				</div>
			</Grid>
			<Grid container className={classes.RecipeListMainContainer}>
                <Grid item className={classes.RecipeListMainItem}>
                    <Grid item className={classes.RecipeListMainGrid}>
						{recipes.map((recipe) => (
                            <Grid item className={classes.RecipeListRecipeCard}>
								<RecipeCard
									title={recipe.title}
									category={recipe.category_name}
									source={recipe.source}
									image={recipe.imgUrl}
									id={recipe.recipe_id}
									recipe={recipe}
									ingredients={recipe.ingredients}
                                    instructions={recipe.instructions}
								/>
							</Grid>
						))}
                        <Grid item className={classes.RecipeListRecipeCardAdd}>
                            <Typography variant="h2" onClick={() => { push("/create")}}>ADD A RECIPE</Typography>
                        </Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default RecipeList2;
