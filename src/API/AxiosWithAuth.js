import axios from "axios";

export const axiosWithAuth = () => {
	return axios.create({
		baseURL: "https://chef4.herokuapp.com/",
		//baseURL: "https://tt720-secret-family-recipes.herokuapp.com",
		withCredentials: true,
	});
};
