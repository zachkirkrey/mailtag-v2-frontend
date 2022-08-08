import React, { useEffect } from "react";
import AdminLayout from "layouts/Admin";
import { Route, useHistory, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import Login from "views/Login";
import { useDispatch } from "react-redux";
import {
  getMilestone,
  getUserSubscription,
  getAccessToken,
} from "redux/Auth/user.action";
import axios from "./api/axios";
import useAuth from "./hooks/useAuth";
import { SET_CURRENT_USER } from "redux/Auth/user.type";
import useAxiosPrivate from "hooks/useAxiosPrivate";
import config from "./config/config.json";
import { REFRESH_TOKEN } from "constract/utilis";
ReactGA.initialize("G-9JQYTKMY2Y");
ReactGA.send("pageview");

export default function App() {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useHistory();
  const location = useLocation();
  const { setAuth } = useAuth();
  useEffect(() => {
    if (window.location.href.includes('google/success')) {
      window.close()
    }
    let isMounted = true;
    const controller = new AbortController();
    const getToken = async () => {
      try {
        const data = JSON.stringify({
          refreshToken: localStorage.getItem(REFRESH_TOKEN),
        });
        const response = await axios.post(`${config.renewAccess}`, data);
        setAuth((prev) => {
          return { ...prev, accessToken: response.data.data.accessToken };
        });
        getUsers();
        return response.data.data.accessToken;
      } catch (err) {
        console.error(err);
        navigate.replace("/login", {
          state: { from: location },
          replace: true,
        });
      }
    };
    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get(`/${config.me}`, {
          signal: controller.signal,
        });
        isMounted &&
          dispatch({
            type: SET_CURRENT_USER,
            payload: response.data.data.user,
          });
      } catch (err) {
        console.error(err);
        navigate.replace("/login", {
          state: { from: location },
          replace: true,
        });
      }
    };
    getToken();

    return () => {
      isMounted = false;
      controller.abort();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // dispatch(getUserSubscription());

  // return <Route path="/login" component={Login} />;
  dispatch(getMilestone());
  return (
    <>
      <Route path="/login" component={Login} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      {/* <Redirect to="/admin/dashboard" /> */}
    </>
  );
}
