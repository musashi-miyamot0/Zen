import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// import anonym from "../../../assets/img/image.avif";
// import instance from "../../../api.config";
// import { setAuth, setUser } from "../../../store/slice/statusAuthSlice";
import { ButtonClose } from "./ButtonClose";
import settings from "../../../assets/svg/settings.svg";

function BlockProfile() {
  const user = useSelector((state) => state.StatusApp.user);
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  // //   async function logout() {
  // //     await instance
  // //       .post(
  // //         "http://localhost:8000/api/v1/token/kill-token/",
  // //         {},
  // //         {
  // //           headers: {
  // //             "Content-Type": "application/json",
  // //           },
  // //           withCredentials: true,
  // //         }
  // //       )
  // //       .then((data) => {
  // //         if (data.request.status === 205) {
  // //           localStorage.setItem("access", null);
  // //           dispatch(setAuth(false));
  // //           dispatch(setUser(null));
  // //           localStorage.setItem("is_auth", false);
  // //           navigate("/login-and-reg/");
  // //         }
  // //       });
  // //   }

  return (
    <div>
      <ButtonClose
        widthButton={30}
        heightButton={30}
        heightLine={7}
        widthLine={8}
      />
      {user ? (
        <div className="blockProfile UserProf">
          <img width={40} src={settings} alt="settings" />
        </div>
      ) : (
        <div className="blockProfile Login">
          <img
            width={40}
            className="icoLogin"
            src="http://127.0.0.1:8000/media/svg/login.svg/"
            alt="Login"
          />
          <Link to="/login-and-reg">Войти</Link>
        </div>
      )}
    </div>
  );
}

BlockProfile.propTypes = {
  user: PropTypes.object,
};

export default BlockProfile;
