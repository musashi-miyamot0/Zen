import Input from "./Input/InputField.jsx"
import RightPanel from "./registration/left_panel.jsx"
import Searcher from "./Searcher/Search.jsx"
import Panel from "./panel/Panel.jsx"
import {instance} from "../../api.config.js";
import { useEffect } from "react";
import { setUser } from "../../store/slice/statusAuthSlice.js";
export default function Homepage(){
    useEffect(()=>{
        instance.get('http://localhost:8000/api/v1/get_user/').then(data=>{
            setUser(data.data.user)
        })})
    return(
        <>
            <Panel/>
            <RightPanel/>
            <Searcher/>
            <Input/>
        </>
    )
    }