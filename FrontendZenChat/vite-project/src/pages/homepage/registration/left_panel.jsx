import "./rightPanel.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function RightPanel({ user }) {
  const base_class = "rightPanel rightBlockBase";
  return (
    <div
      className={
        !JSON.parse(localStorage.getItem("profileBlock"))
          ? `${base_class} Slide`
          : base_class
      }
    >
      <BlockProfile user={user} />
    </div>
  );
}

function SwapLocalSettings() {
  let settings = JSON.parse(localStorage.getItem("profileBlock"));
  let profile = document.querySelector(".rightPanel");
  if (settings === null) {
    localStorage.setItem("profileBlock", false);
    profile.classList.toggle("Slide");
  }

  switch (settings) {
    case true:
      profile.classList.toggle("Slide");
      localStorage.setItem("profileBlock", false);
      break;
    case false:
      profile.classList.toggle("Slide");
      localStorage.setItem("profileBlock", true);
      break;
  }
}
export function ButtonClose({
  widthLine,
  heightLine,
  widthButton,
  heightButton,
  rounded,
  onClick,
}) {
  const styleButton = {};
  const styleLine = {};
  if (widthLine & heightLine & widthButton & heightButton) {
    styleLine["width"] = widthLine;
    styleLine["height"] = heightLine;
    styleButton["width"] = widthButton;
    styleButton["height"] = heightButton;
  }
  if (rounded) {
    styleButton["borderRadius"] = rounded;
  }
  return (
    <div
      className="buttonClose"
      style={styleButton ? styleButton : ""}
      onClick={onClick ? onClick : SwapLocalSettings}
    >
      <div className="containerLine">
        <div className="RotateOne BaseLineStyle"></div>
        <div className="RotateTwo BaseLineStyle"></div>
      </div>
    </div>
  );
}
function BlockProfile({ user }) {
  return (
    <div>
      <ButtonClose
        widthButton={30}
        heightButton={30}
        heightLine={7}
        widthLine={8}
      />
      {user ? (
        <div className="">
          <img src="" alt="" />
        </div>
      ) : (
        <div className="blockProfile noLogin">
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

RightPanel.propTypes = {
  user: PropTypes.object,
};
BlockProfile.propTypes = {
  user: PropTypes.object,
};
ButtonClose.propTypes = {
  widthLine: PropTypes.number,
  heightLine: PropTypes.number,
  widthButton: PropTypes.number,
  heightButton: PropTypes.number,
  rounded: PropTypes.number,
  onClick: PropTypes.func,
};
