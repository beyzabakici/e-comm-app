import axios from "axios";
import { BASE_URL } from "@env";
import { Product } from "../utils";

export const fetchProducts = () => axios.get(`${BASE_URL}products/`);

export const searchProducts = (query: string) =>
  axios.get(`${BASE_URL}products/search?q=${query}`);
