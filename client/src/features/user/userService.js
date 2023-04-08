import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const register = async (uerData) => {
  const response = await axios.post(`${base_url}user/register`, uerData);
  if (response.data) {
    console.log("userSErvice", response);
    return response.data;
  }
};
export const authService = {
  register,
};
