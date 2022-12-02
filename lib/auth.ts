import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  const {data} = await axios.post("/api/login", {email, password});
  return data;
};
