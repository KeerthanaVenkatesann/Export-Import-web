import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", // Django backend
});

export const fetchProducts = (params) =>
  API.get("/products/", { params });
