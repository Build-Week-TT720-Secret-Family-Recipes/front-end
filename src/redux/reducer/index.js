import { ADD_TO_STATE_DESCRIBE } from "../actions";
import { ADD_TO_STATE_INGREDIENTS } from "../actions";
import { ADD_TO_STATE_STEPS } from "../actions";
import { ADD_TO_STATE_ADDITIONAL_INSTRUCTIONS } from "../actions";
import { DISPLAY_FORM_ELEMENTS } from "../actions";
import { DELETE_RECIPE } from "../actions";
import { EDIT_RECIPE } from "../actions";
import { DISPLAY_FORM_ELEMENTS_DESCIBE } from "../actions";
import { DISPLAY_FORM_ELEMENTS_INGREDIENTS } from "../actions";
import { DISPLAY_FORM_ELEMENTS_STEPS } from "../actions";

export const initialState = {
	//STATE TO SHOW/HIDE ELEMENTS
	display: {
		createDisplay: true,
		descDisplay: false,
		recipe: false,
		recipeImagePopulated: false,
		ingredientsPopulated: false,
		stepsPopulated: false,
		describePopulated: false,
		ingDisplay: false,
		stepsDisplay: false,
		addDisplay: false,
	},

	//USER

	//STATE TO BE SENT TO THE BACKEND
	recipes: [
		{
			recipeId: "",
			userId: "",
			recipeOrigin: "I found this recipe in Grandmas draw of special things",
			recipeName: "Marmalade Roll",
			categoryId: "",
			recipePros: "",
			needToKnow: "",
			prepTime: "",
			cookTime: "",
			steps: "Cook until just right",
			ingredients: "Marmalade, Roll",
			recipeImage:
				"http://s29596.pcdn.co/wp-content/uploads/2015/10/Narnia-buns.jpg",
		},
	],
};

const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case DISPLAY_FORM_ELEMENTS_DESCIBE:
			return {
				...state,
				display: {
					...state.display,
					createDisplay: false,
					descDisplay: true,
					describePopulated:true,
				},
			};
		case DISPLAY_FORM_ELEMENTS_INGREDIENTS:
			return {
				...state,
				display: {
					...state.display,
					createDisplay: true,
					addDisplay: false,
				},
			};
		case DISPLAY_FORM_ELEMENTS_STEPS:
			return {
				...state,
				display: {
					...state.display,
					createDisplay: true,
					addDisplay: false,
				},
			};
		case ADD_TO_STATE_DESCRIBE:
			return {
				...state,
				recipes: {
					...state.recipes,
					recipeId: Date.now(),
					recipeName: action.payload.name,
					recipeOrigin: action.payload.where,
					categoryId: action.payload.category,
				},
				display: { 
					...state.display, 
					//recipe: true, 
					describePopulated: true,
					createDisplay: true,
				descDisplay: false, },
			};
		case ADD_TO_STATE_INGREDIENTS:
			return {
				...state,
				display: { ...state.display, ingredientsPopulated: true, recipe: true },
				recipe: { ...state.recipe, ingredients: action.payload.ingredients },
			};
		case ADD_TO_STATE_STEPS:
			return {
				...state,
				display: { ...state.display, stepsPopulated: true, recipe: true },
				recipe: { ...state.recipe, steps: action.payload.steps },
			};
		case ADD_TO_STATE_ADDITIONAL_INSTRUCTIONS:
			return {
				...state,
				display: { ...state.display, recipeImagePopulated: true, recipe: true },
				recipe: { ...state.recipe, recipeImage: action.payload.recipeImage },
			};
		case EDIT_RECIPE:
			return {
				...state,
				recipes: state.recipes.filter(
					(recipe) => recipe.id !== action.payload.id
				),
			};
		case DELETE_RECIPE:
			return {
				...state,
				recipes: state.filter((recipe) => recipe.id !== action.payload.id),
			};
		//
		default:
			return state;
	}
};

export default dataReducer;
