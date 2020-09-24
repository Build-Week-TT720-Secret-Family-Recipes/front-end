import axios from "axios";

export const axiosWithAuth = () => {
	const token = localStorage.getItem("token");
	console.log(token);
	return axios.create({
		baseURL: "https://tt720-secret-family-recipes.herokuapp.com",
		cookies: token,

		withCredentials: true,
	});
};
