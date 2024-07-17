import "./rightPanel.css";

import PropTypes from "prop-types";
import BlockProfile from "./BlockProfile";

export default function RightPanel({ user }) {
  const base_class = "rightPanel rightBlockBase";

  return (
    <div
      className={
        JSON.parse(localStorage.getItem("profileBlock"))
          ? `${base_class} Slide`
          : base_class
      }
    >
      <BlockProfile user={user} />
    </div>
  );
}

RightPanel.propTypes = {
  user: PropTypes.object,
};
