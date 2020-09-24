import axios from "axios";

export const axiosWithAuth = () => {
	// const token = localStorage.getItem("token");
	// const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
	// console.log(token);
	return axios.create({
		baseURL: "https://tt720-secret-family-recipes.herokuapp.com",
		// cookies: token,
		withCredentials: true,
	});
};
