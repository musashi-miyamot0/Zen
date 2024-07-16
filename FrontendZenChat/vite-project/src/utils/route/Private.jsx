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
  const status = useSelector((state) => {
    state.StatusApp.is_auth;
  });
  const user = useSelector((state) => {
    state.StatusApp.user;
  });



  if (!status) {
    console.log('1')
    return <Outlet />;
  } else {
    return <Navigate to="/login-and-reg/" />;
  }
};
export default Private;
