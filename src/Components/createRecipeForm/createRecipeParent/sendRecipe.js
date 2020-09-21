

const recipe = ({
	recipe,
	recipeOrigin,
	recipePros,
	needToKnow,
	recipeName,
	steps,
	recipeImage,
}) => {
return recipeObject = {
title: {recipeName},
source: {recipeOrigin},
imgUrl: {recipeImage},
ingredients: [{id,quantity,recipe_id,}],
instructions: {steps},
categoryId: "",
userId: "",

}

};

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(recipe)