import Homepage from "./pages/homepage/homepage.jsx"
import LoginAndReg from "./pages/LoginAndReg/LoginAndReg.jsx"
import { Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <>

      <Routes>
        <Route path='login/' element={<LoginAndReg/>} ></Route>
        <Route path='/' element={<Homepage/>} ></Route>
      </Routes>
    </>
  );
}

export default App;
