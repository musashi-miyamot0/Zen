import "../app.css";
import ava from "../../../assets/загрузка.jpeg";
import data from "../../../assets/fake_data_us.json";
import { useDispatch, useSelector } from "react-redux";

function User() {
  const userAuth = useSelector(state=>state.StatusApp.user)
  const dispatch = useDispatch()
  return (
    <>
      {data.map((user) => {
        return (
          <div key={user.Name} className="User">
                      {userAuth}
            <div className="Data_User">
              {user.Name.length > 7 ? (
                <p className="NameUser">{user.Name.substring(0, 6) + "..."}</p>
              ) : (
                <p className="NameUser">{user.Name}</p>
              )}

              {user.status == "offline" ? (
                <>
                  <p className="StatusUserTime StatusUser">
                    {user.latest_enter.split("").slice(11, 16)}
                  </p>
                  <div className="CircleStatus OnStatus"></div>
                </>
              ) : (
                <>
                  <p className="StatusUserText StatusUser">{user.status}</p>
                  <div className="CircleStatus OffStatus"></div>
                </>
              )}
              <div>
                <img className="ImageAva" src={ava} alt="picture" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function Panel() {
  return (
    <div className="panel">
      <User />
    </div>
  );
}
