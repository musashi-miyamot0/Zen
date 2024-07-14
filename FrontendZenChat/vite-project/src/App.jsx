import Homepage from "./pages/homepage/homepage.jsx";
import Login from "./pages/Login/Login.jsx";
import { Routes, Route } from "react-router-dom";
import Private from "./utils/route/Private.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route  exact path="/login-and-reg/" element={<Login />}></Route>

        <Route  path='/'element={<Private/>}>
            <Route exact path="/" element={<Homepage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
