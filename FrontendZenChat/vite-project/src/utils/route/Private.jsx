/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect } from "react";
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
  const token = localStorage.getItem("access");

  const verifyToken = async (token) => {
    const response = await axios.post(
      "http://localhost:8000/api/v1/token/verify/",
      {
        token: token,
        headers: {
          "Content-Type": "application/json",
        },
      },
      { withCredentials: true })
    // ).catch(async (error) => {
    //     refreshToken();
    //     verifyToken(token);
    //   });
    return response
  };
  const refreshToken = async () => {
    await axios
      .post(
        "http://localhost:8000/api/v1/token/refresh/",
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true ,withXSRFToken:true}
      )
      .then((data) => {
        localStorage.setItem("access", data.data.access);
      });
  };

  useEffect(() => {
    const result = verifyToken(token)
      .then((d) => {
        if (d.request.status === 200) {
          dispatch(setAuth(true));
          console.log('1')
        }
      })
      
  });

  if (!status) {
    location.state = "Для продолжения авторизуйтесь";
    return token ? (
      <Outlet />
    ) : (
      <Navigate to="login-and-reg/" state={{ from: location }} />
    );
  }
  return <Outlet />;
};
export default Private;
