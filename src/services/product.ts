import axios from "axios";
import { BASE_URL } from "@env";

export const fetchProducts = axios.get(`${BASE_URL}products/`);
