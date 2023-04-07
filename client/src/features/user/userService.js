import axios from "axios";

const register = async (uerData) => {
  const response = await axios.post("", uerData);
  if (response.data) {
    return response.data;
  }
};
export const authService = {
  register,
};
