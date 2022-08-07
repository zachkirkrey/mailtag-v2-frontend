import useFetch from "hooks/useFetch";
import React from "react";

import { Redirect } from "react-router";
import config from "../../config/config.json";
export default function Logout() {
  const [data] = useFetch(config.logout);

  return data && <Redirect to="/login" />;
}
