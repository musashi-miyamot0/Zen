import Input from "./Input/InputField.jsx"
import RightPanel from "./registration/left_panel.jsx"
import Searcher from "./Searcher/Search.jsx"
import Panel from "./panel/Panel.jsx"

export default function Homepage(){
    return(
        <>
            <Panel/>
            <RightPanel/>
            <Searcher/>
            <Input/>
        </>
    )
}