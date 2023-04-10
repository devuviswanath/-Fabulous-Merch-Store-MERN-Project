import { base_url, instance } from "../../utils/axiosConfig";

const register = async (uerData) => {
  const response = await instance.post(`${base_url}user/register`, uerData);
  if (response.data) {
    console.log("userSErvice", response);
    return response.data;
  }
};
const login = async (uerData) => {
  const response = await instance.post(`${base_url}user/login`, uerData);
  if (response.data) {
    return response.data;
  }
};
const logout = async (userData) => {
  const response = await instance.get(`${base_url}user/logout`, userData);
  if (response.data) {
    console.log("response", response.data);
    return response.data;
  }
};
const addToCart = async (cartData) => {
  const response = await instance.post(`${base_url}user/cart`, cartData);
  if (response.data) {
    console.log("response", response.data);
    return response.data;
  }
};

export const authService = {
  register,
  login,
  logout,
  addToCart,
};
