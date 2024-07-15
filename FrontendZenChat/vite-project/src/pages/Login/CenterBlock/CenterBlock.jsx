/* eslint-disable no-unused-vars */
import "./CenterBlock.css";
import "../../homepage/registration/rightPanel.css";
import { ButtonClose } from "../../homepage/registration/left_panel.jsx";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PropTypes, { func, object } from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  setAction,
  setLocation,
  setName,
  setEmail,
  setPassword,
  setClear,
} from "../../../store/slice/appSlice.js";
import axios from "axios";

export default function CenterBlock() {
  const dispatch = useDispatch();
  const action = useSelector((state) => state.authSlice.action);
  const email = useSelector((state) => state.authSlice.email);
  const password = useSelector((state) => state.authSlice.password);
  const username = useSelector((state) => state.authSlice.name);
  const location = useSelector((state) => state.authSlice.location);

  dispatch(setLocation(useLocation()));
  const Login = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/v1/token/", {
      password: password,
      username: username,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((d)=>{
      localStorage.setItem('access',d.data.access);
      return <Navigate to={location.state?.from?.pathname || '/'}/>

    });
    
    
  };

  const Registr = (e) => {
    e.preventDefault();
    axios.post("http://localhost/api/v1/register/", {
      password: password,
      username: username,
      email: email,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  //TODO Добавить обработчики данных в запросы

  return (
    <div className="centerFlexBlock">
      <BlockForm title={"ZEN"}>
        {action === true ? (
          <FormLogin onSubmit={Registr}>
            <input
              type="email"
              onChange={(e) => {
                dispatch(setEmail(e.target.value));
              }}
              name="email"
              placeholder="Почта"
            />
          </FormLogin>
        ) : (
          <FormLogin onSubmit={Login}></FormLogin>
        )}
      </BlockForm>
    </div>
  );
}

function BlockForm({ title, children, customClassForm }) {
  const dispatch = useDispatch();
  return (
    <div className={customClassForm + " BlockForm"}>
      <h1>{title}</h1>
      <Link className="Close" to="/">
        <ButtonClose
          rounded={4}
          onClick={() => {
            dispatch(setClear());
          }}
        />
      </Link>
      {children}
    </div>
  );
}

function FormLogin({ children, onSubmit }) {
  const dispatch = useDispatch();
  const vallue = useSelector((state) => state.authSlice.action);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="username"
        onChange={(e) => {
          dispatch(setName(e.target.value));
        }}
        placeholder="Имя пользователя"
      />
      <input
        type="password"
        onChange={(e) => {
          dispatch(setPassword(e.target.value));
        }}
        name="password"
        placeholder="Пароль"
      />
      {children}
      <div className="container">
        <button type="submit">{vallue ? "Зарегистрироваться" : "Войти"}</button>
      </div>
      <div className="containerReg">
        <p
          onClick={() => {
            dispatch(setAction(vallue ? false : true));
          }}
        >
          {vallue
            ? "Already have an account? Login"
            : "Dont have an account? Register"}
        </p>
      </div>
    </form>
  );
}
FormLogin.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.object,
};
CenterBlock.propTypes = {
  children: PropTypes.object,
};

BlockForm.propTypes = {
  children: PropTypes.object,
  customClassForm: PropTypes.string,
  title: PropTypes.string,
};
