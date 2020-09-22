import { ADD_TO_STATE_DESCRIBE } from "../actions";
import { ADD_TO_STATE_INGREDIENTS } from "../actions";
import { ADD_TO_STATE_STEPS } from "../actions";
import { ADD_TO_STATE_ADDITIONAL_INSTRUCTIONS } from "../actions";
import { DISPLAY_FORM_ELEMENTS } from "../actions";

export const initialState = {
	//STATE TO SHOW/HIDE ELEMENTS
	recipe: false,
	recipeImage: false,
	recipeImagePopulated: false,
	ingredientsPopulated: false,
	stepsPopulated: false,
	describePopulated: false,
	//USER
	userId: "",
	//STATE TO BE SENT TO THE BACKEND
	recipeOrigin: "",
	recipeName: "",
	categoryId: "",
	recipePros: "",
	needToKnow: "",
	prepTime: "",
	cookTime: "",
	steps: "",
	//ADD A RECIPE FORM
	ingredients: "",
	// ingredients: [
	// 	{ ingredient0: null, quantity: null },
	// 	{ ingredient1: null, quantity: null },
	// 	{ ingredient2: null, quantity: null },
	// 	{ ingredient3: null, quantity: null },
	// 	{ ingredient4: null, quantity: null },
	// 	{ ingredient5: null, quantity: null },
	// 	{ ingredient6: null, quantity: null },
	// 	{ ingredient7: null, quantity: null },
	// 	{ ingredient8: null, quantity: null },
	// 	{ ingredient9: null, quantity: null },
	// 	{ ingredient10: null, quantity: null },
	// ],
};

const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case DISPLAY_FORM_ELEMENTS:
			return {
				state: action.payload,
			};
		case ADD_TO_STATE_DESCRIBE:
			return {
				...state,
				recipeName: action.payload.name,
				recipeOrigin: action.payload.where,
				categoryId: action.payload.category,
				recipe: true,
				describePopulated: true,
			};
		case ADD_TO_STATE_INGREDIENTS:
			return {
				...state,
				ingredientsPopulated: true,
				ingredients: action.payload.ingredients,
				recipe: true,
			};
		case ADD_TO_STATE_STEPS:
			return {
				...state,
				stepsPopulated: true,
				steps: action.payload.steps,
				recipe: true,
			};
		case ADD_TO_STATE_ADDITIONAL_INSTRUCTIONS:
			return {
				...state,
				recipeImagePopulated: true,
				recipeImage: action.payload.recipeImage,
				recipe: true,
			};
		default:
			return state;
	}
};

export default dataReducer;
