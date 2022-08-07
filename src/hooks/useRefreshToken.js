import axios from "../api/axios";
import useAuth from "./useAuth";
import config from "../config/config.json";
import { REFRESH_TOKEN } from "constract/utilis";
const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const data = JSON.stringify({
      refreshToken: localStorage.getItem(REFRESH_TOKEN),
    });
    const response = await axios.post(`/${config.renewAccess}`, data);
    setAuth((prev) => {
      return { ...prev, accessToken: response.data.data.accessToken };
    });
    return response.data.data.accessToken;
  };
  return refresh;
};
export default useRefreshToken;
