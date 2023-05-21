import axios from "axios";
import { BASE_URL } from "@env";

export const fetchProducts = () => axios.get(`${BASE_URL}products/`);

export const searchProducts = (query: string) =>
  axios.get(`${BASE_URL}products/search?q=${query}`);

export const getCatagories = () => axios.get(`${BASE_URL}products/categories`);

export const searchProductsWithCategory = (category: string) =>
  axios.get(`${BASE_URL}products/category/${category}`);
