import axios from "axios";

export const axiosWithAuth = () => {
	return axios.create({
		baseURL: "https://tt720-secret-family-recipes.herokuapp.com",
		withCredentials: true,
	});
};
