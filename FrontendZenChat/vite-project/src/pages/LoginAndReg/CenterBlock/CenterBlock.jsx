import "./CenterBlock.css";
import "../../homepage/registration/rightPanel.css"
import {ButtonClose} from '../../homepage/registration/left_panel.jsx'
import { Link } from "react-router-dom";
import { func } from "prop-types";

export default function CenterBlock() {
  return (
    <div className="centerFlexBlock">
      <div className="BlockForm">
        <h1>Zen</h1>
        <Link className='Close' to='/'>
          <ButtonClose rounded={4} />
        </Link>
        <FormLogin/>
      </div>
    </div>
  );
}

function FormLogin() {
  return(
    <form action="" method="POST">
          <input type="text" name='username' placeholder="Имя пользователя"/>
          <input type="password" name='password' placeholder="Пароль"/>
          
          <div className="container">
          <button type="submit">
            Войти
          </button>

          </div>
          <div className="containerReg">
          <Link to='/'>Dont have an account? Register</Link>
          </div>
        </form>
  )
}
