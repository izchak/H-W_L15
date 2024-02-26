import { useState } from "react"
import AddStudent from "./AddStudent";

const HeaderLogo =(props)=>{

    const [islcickd,setIsclickd]=useState(false);
    const [add,setAdd]=useState("Add student")

    function addUser(){
        if(islcickd===false){
            setIsclickd(true)
            setAdd("Cancel")
            
        }else{
            setIsclickd(false)
            setAdd("Add student")
        }
    }
    return(
        <div className="header_logo">
            <h1>Students list</h1>
            {islcickd && <AddStudent addNewStudent={props.updateList}/>}
            <button className="btn_add" onClick={addUser}>{add}</button>
        </div>
    )
}

export default HeaderLogo