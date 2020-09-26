import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Login from "./LogIn";

import { useStyles } from "../Styles/Styles";
import Grid from "@material-ui/core/Grid";

import RecipeCard from "./RecipeCard/RecipeCard";
import { axiosWithAuth } from "../API/AxiosWithAuth";

function RecipeList(props) {

	);

  const [recipes, setRecipes] = useState([]);
  console.log("recipes: ", recipes);
  //API CALL

  useEffect(() => {
    axiosWithAuth()
      .get("/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err.response));
  }, []);

  // console.log("recipes from recipeList state", recipes);
  //search functionality
  const [ inputValue, setInputValue ] = useState("");

  const [searchValue, setSearchValue] = useState([]);

  const handleSearchChanges = (e) => {
    setInputValue(e.target.value);
    console.log("inputValue: ", inputValue);
  };

  // const { push } = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    setSearchValue(inputValue);
    console.log("searchValue after submit: ", searchValue);
  };

  let filteredRecipes = recipes.filter(
      (recipe) => {
          return recipe.title.indexOf(searchValue) !== -1;
      }
  );

  return (
    <div
      className="ui center aligned segment"
      style={{ backgroundColor: "#a8d8ea", height: "100vh" }}
    >
      <div className="ui violet inverted menu">
        <div className="header item">Secret Recipes</div>
        <a className="active item">Home</a>

        <div className="ui dropdown item">
          Recipes by meal
          <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item">Breakfast</div>
            <div className="item">Lunch</div>
            <div className="item">Dinner</div>
            <div className="divider"></div>
            <div className="item">Desserts</div>
          </div>
        </div>
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

      <div
        className="ui container"
        style={{
          backgroundColor: "#fcbad3",
          marginTop: "60px",
          padding: "20px",
        }}
      >
 			<Grid item className={classes.recipeGrid}>
						{recipes.map((recipe) => (
							<Grid item className={classes.recipeCard}>
							<RecipeCard
								title={recipe.title}
								category={recipe.category_name}
								source={recipe.source}
								image={recipe.imgUrl}
								id={recipe.recipe_id}
								recipe={recipe}
								ingredients={recipe.ingredients}
								instructions={recipe.instruction}
							/>
							</Grid>
						))}
					</Grid>
      </div>
    </div>
  );

}

export default RecipeList;
