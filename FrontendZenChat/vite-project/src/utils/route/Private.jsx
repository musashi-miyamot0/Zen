import { useLocation,Navigate, Outlet } from "react-router-dom";

const Private = () =>{
    const token = true
    const location = useLocation()
    if (!token){
        location.state = 'Для продолжения авторизуйтесь'
        return(
            token ? <Outlet/> : <Navigate to='login-and-reg/' state={{from:location}}/>
        )
    }
    return <Outlet/>;

}
export default Private;