import globalIco from "../../../assets/svg/globalIco.svg";
import search from "../../../assets/svg/searcher.svg";
import "./search.css";
import "../app.css";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Searcher() {
  const [searcher, setSearcher] = useState("");
  const [datatop, setdataTop] = useState([]);

  const setValue = (event) => {
    if (event.target.value.length === 0) {
      setdataTop([]);
    } else {
      setSearcher(event.target.value);
    }
  };

  useEffect(() => {
    if (searcher) {
      axios
        .get(`http://127.0.0.1:8000/api/v1/search/?username=${searcher}`, {
          "Access-Control-Allow-Origin": "http://localhost",
        })
        .then((response) => {
          console.log(response.data);
          setdataTop(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [searcher]);

  return (
    <section className="searchWindow">
      <div className="InputFL">
        <img className="searchSVG" src={search} alt="search" />
        <input
          onChange={setValue}
          type="text"
          placeholder="Что ищем?"
          name="Search"
          id="Searcher"
        />
      </div>

      <div className="TopUser">
        {datatop.length > 0
          ? datatop.map((user, index) => {
              return <TopUser user={user} key={index} />;
            })
          : ""}
      </div>
      <div className=" ContainerGlobalSearchText">
        <img src={globalIco} alt="GlobalIco" />
        <a href="" className="GlobalSearch">
          Глобальный Поиск
        </a>
      </div>
    </section>
  );
}

function TopUser({ user }) {
  return (
    <li className="blockUserInTop">
      <p>{user.username}</p>
      {!user.is_active ? (
        <div className="CircleStatus OnStatus"></div>
      ) : (
        <div className="CircleStatus OffStatus"></div>
      )}
    </li>
  );
}
TopUser.propTypes = {
  user: PropTypes.object.isRequired,
};

//TODO доделать поиск
