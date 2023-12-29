// api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
});

export const getAllData = (endpoin) => api.get(endpoin);
export const getOneData = (endpoin, id) => api.get(`${endpoin}/${id}`);
export const createData = (endpoin, newData) => api.post(`${endpoin}`, newData);
export const updateData = (endpoin, id, updatedData) =>
  api.put(`${endpoin}/${id}`, updatedData);
export const patchData = (endpoin, id, patchData) =>
  api.patch(`${endpoin}/${id}`, patchData);
export const deleteData = (endpoin, id) => api.delete(`${endpoin}/${id}`);
