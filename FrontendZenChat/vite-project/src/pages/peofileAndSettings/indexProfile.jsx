import "./style.css";
import Profile from "./profile";
import Settings from "./settings";

export default function IndexProfile() {
  return (
    <div className="profile-and-settings">
      <Profile />
      <Settings />
    </div>
  );
}
