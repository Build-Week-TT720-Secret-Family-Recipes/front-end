export const ADD_TO_STATE_DESCRIBE = "ADD_TO_STATE_DESCRIBE";
export const ADD_TO_STATE_INGREDIENTS = "ADD_TO_STATE_INGREDIENTS";
export const ADD_TO_STATE_STEPS = "ADD_TO_STATE_STEPS";
export const ADD_TO_STATE_ADDITIONAL_INSTRUCTIONS =
    "ADD_TO_STATE_ADDITIONAL_INSTRUCTIONS";
    export const DISPLAY_FORM_ELEMENTS = "DISPLAY_FORM_ELEMENTS"

export const displayFormElements = (data) => {
    return{
        type: DISPLAY_FORM_ELEMENTS
        
    }
}

export const addToStateDescribe = (data) => {
	return {
		type: ADD_TO_STATE_DESCRIBE,
		payload: data,
	};
};

export const addToStateIngredients = () => {
	return {
		type: ADD_TO_STATE_INGREDIENTS,
	};
};
export const addToStateSteps = () => {
	return {
		type: ADD_TO_STATE_STEPS,
	};
};
export const addToStateAdditionalInstructions = () => {
	return {
		type: ADD_TO_STATE_ADDITIONAL_INSTRUCTIONS,
	};
};