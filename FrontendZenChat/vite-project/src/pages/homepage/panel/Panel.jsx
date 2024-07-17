import "../app.css";
import ava from "../../../assets/загрузка.jpeg";
import data from "../../../assets/fake_data_us.json";
// import { useDispatch, useSelector } from "react-redux";

function User() {
  // const userAuth = useSelector((state) => state.StatusApp.user);
  // const dispatch = useDispatch();
  return (
    <>
      <div className="darkfoucus"></div>
      <BurgerMenu />
      <div className="User_List">
        {data.map((user) => {
          return (
            <div key={user.Name} className="User">
              <div className="Data_User">
                {user.Name.length > 7 ? (
                  <p className="NameUser"> {user.Name}</p>
                ) : (
                  <p className="NameUser"> {user.Name}</p>
                )}
                {user.status === "offline" ? (
                  <>
                    <div className="StatusUserTimeDiv">
                      <p className="StatusUserTime StatusUser">
                        {user.latest_enter.split("").slice(11, 16)}
                      </p>
                    </div>
                    <div className="circleDiv">
                      <div className="CircleStatus OffStatus"></div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="circleDiv">
                      <div className="CircleStatus OnStatus"></div>
                    </div>
                  </>
                )}
                <img className="ImageAva" src={ava} alt="picture" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function animationBurgerMenu() {
  document
    .querySelector(".burgerMenuDivContainer")
    .classList.toggle("animationBurgerMenu");
  const darkFocusElement = document.querySelector(".darkfoucus");

  switch (darkFocusElement.style.display) {
    case "block":
      darkFocusElement.style.display = "none";
      break;
    case "none":
    default:
      darkFocusElement.style.display = "block";
      break;
  }
}
function BurgerMenu() {
  return (
    <div onClick={animationBurgerMenu} className="burgerMenu">
      <div className="burgerMenuDivContainer">
        <div className="burgerMenuDiv one-line"></div>
        <div className="burgerMenuDiv two-line"></div>
        <div className="burgerMenuDiv three-line"></div>
      </div>
    </div>
  );
}

export default function Panel() {
  return (
    <div className="panel">
      <User />
    </div>
  );
}
