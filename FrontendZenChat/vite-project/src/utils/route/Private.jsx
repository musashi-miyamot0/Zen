/* eslint-disable no-unused-vars */
import axios from "axios";
import { useCallback, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import saveToken from "../../functions/savers/saveToken.js";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setAuth } from "../../store/slice/statusAuthSlice.js";

const Private = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const status = JSON.parse(localStorage.getItem("is_auth"));
  console.log(status);

  return <Outlet />;
};
export default Private;
