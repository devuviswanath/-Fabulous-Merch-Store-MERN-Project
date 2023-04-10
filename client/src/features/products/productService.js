import axios from "axios";
import { base_url, instance } from "../../utils/axiosConfig";

const getProducts = async (userData) => {
  const response = await instance.get(`${base_url}product/`);
  console.log("response", response);
  if (response.data) {
    console.log("response.data)", response.data);
    return response.data;
  }
};

export const productService = {
  getProducts,
};
