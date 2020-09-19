import { ADD_TO_STATE_DESCRIBE } from "./actions";
import { ADD_TO_STATE_INGREDIENTS } from "ADD_TO_STATE_INGREDIENTS";
import { ADD_TO_STATE_STEPS } from "ADD_TO_STATE_STEPS";
import { ADD_TO_STATE_ADDITIONAL_INSTRUCTIONS } from
	"ADD_TO_STATE_ADDITIONAL_INSTRUCTIONS";


export const initialState = {
	//DESCRIBE THE RECIPE FORM
	recipeOrigin: "",
	recipePros: "",
	needToKnow: "",
	prepTime: "",
	cookTime: "",
	describePopulated: false,
	//INGREDIENTS FORM
	ingredients: [
		{ ingredient0: null, quantity: null },
		{ ingredient1: null, quantity: null },
		{ ingredient2: null, quantity: null },
		{ ingredient3: null, quantity: null },
		{ ingredient4: null, quantity: null },
		{ ingredient5: null, quantity: null },
		{ ingredient6: null, quantity: null },
		{ ingredient7: null, quantity: null },
		{ ingredient8: null, quantity: null },
		{ ingredient9: null, quantity: null },
		{ ingredient10: null, quantity: null },
	],
	ingredientsPopulated: false,
	//STEPS FORM
	steps: [""],
	stepsPopulated: false,
	//ADDITIONAL INSTRUCTIONS FORM
	additionalInstructions: "",
	additionalInstructionsPopulated: false,
};


const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_STATE_DESCRIBE:
			return {
				...state,
				describePopulated: true,
			};
		case ADD_TO_STATE_INGREDIENTS:
			return {
				...state,
				ingredientsPopulated: true,
			};
		case ADD_TO_STATE_STEPS:
			return {
				...state,
				stepsPopulated: true,
			};
		case ADD_TO_STATE_ADDITIONAL_INSTRUCTIONS:
			return {
				...state,
				additionalInstructionsPopulated: true,
			};
	}
};

export default dataReducer;