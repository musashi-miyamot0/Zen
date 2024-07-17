import PropTypes from "prop-types";
import { SwapLocalSettings } from "./SwapLocalSettings";

export function ButtonClose({ rounded, onClick }) {
  const styleButton = {};

  if (rounded) {
    styleButton["borderRadius"] = rounded;
  }

  return (
    <div
      className="buttonClose"
      onClick={onClick ? onClick : SwapLocalSettings}
    >
      <div className="containerLine">
        <div className="RotateOne BaseLineStyle"></div>
        <div className="RotateTwo BaseLineStyle"></div>
      </div>
    </div>
  );
}

ButtonClose.propTypes = {
  rounded: PropTypes.number,
  onClick: PropTypes.func,
};
