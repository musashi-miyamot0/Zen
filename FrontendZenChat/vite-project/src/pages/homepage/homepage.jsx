import Input from "./Input/InputField.jsx";
import RightPanel from "./registration/left_panel.jsx";
import Searcher from "./Searcher/Search.jsx";
import Panel from "./panel/Panel.jsx";
import instance from "../../api.config.js";
import { useEffect } from "react";
import { setUser } from "../../store/slice/statusAuthSlice.js";
import { useDispatch, useSelector } from "react-redux";
export default function Homepage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.StatusApp.user);
  useEffect(() => {
    if (user) {
      return;
    }
    instance
      .get("http://localhost:8000/api/v1/token/get_user/")
      .then((data) => {
        dispatch(setUser(data.data.user));
      });
  }, [dispatch, user]);

  return (
    <>
      <Panel />
      <RightPanel />
      <Searcher />
      <Input />
    </>
  );
}
