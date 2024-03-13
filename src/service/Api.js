/** @format */

import axios from "axios";
import { dataApi } from "../lib/constant";

export const Api = axios.create({
	baseURL: dataApi,
	// headers: {
	// 	Authorization:
	// 		localStorage.getItem("auth") &&
	// 		`Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
	// },
});
