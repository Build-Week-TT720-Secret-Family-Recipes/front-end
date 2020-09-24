import { axiosWithAuth } from "../../API/AxiosWithAuth";
export const ADD_TO_STATE_DESCRIBE = "ADD_TO_STATE_DESCRIBE";
export const ADD_TO_STATE_INGREDIENTS = "ADD_TO_STATE_INGREDIENTS";
export const ADD_TO_STATE_STEPS = "ADD_TO_STATE_STEPS";
export const ADD_TO_STATE_ADDITIONAL_INSTRUCTIONS =
	"ADD_TO_STATE_ADDITIONAL_INSTRUCTIONS";
export const DISPLAY_FORM_ELEMENTS = "DISPLAY_FORM_ELEMENTS";
export const DELETE_RECIPE = "DELETE_RECIPE"
export const EDIT_RECIPE = "EDIT_RECIPE";
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST"


export const displayFormElements = (data) => {
	return {
		type: DISPLAY_FORM_ELEMENTS,
	};
};

export const addToStateDescribe = (data) => {
	return {
		type: ADD_TO_STATE_DESCRIBE,
		payload: data,
	};
};

export const addToStateIngredients = (data) => {
	return {
		type: ADD_TO_STATE_INGREDIENTS,
		payload: data,
	};
};
export const addToStateSteps = (data) => {
	return {
		type: ADD_TO_STATE_STEPS,
		payload: data,
	};
};
export const addToStateAdditionalInstructions = (data) => {
	return {
		type: ADD_TO_STATE_ADDITIONAL_INSTRUCTIONS,
		payload: data,
	};
};
export const deleteRecipe = (data) => {
	return {
		type: DELETE_RECIPE,
		payload: data,
	}
}

export const editRecipe = (data) => {
	return {
		type: EDIT_RECIPE,
		payload: data,
	};
};

export const fetchDataRequest = () => {
	return {
		type: FETCH_DATA_REQUEST,
	};
};

export const putRequest = (recipeToEdit) => {
	return (dispatch) => {
		dispatch(fetchDataRequest());
		axiosWithAuth()
			.put(`/recipes`, recipeToEdit)
			.then((response) => {
				const data = response.data
				dispatch(editRecipe(data));
			})
			.catch((error) => {
				const errorMsg = error.msg;
			});
	};
};
