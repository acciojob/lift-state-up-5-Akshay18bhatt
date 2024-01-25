import React,{useState} from "react";
import Child from "./Child";

const Parent= ()=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div>
            <h1>Parent Component</h1>
            <Child setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        </div>
    )
}

export default Parent