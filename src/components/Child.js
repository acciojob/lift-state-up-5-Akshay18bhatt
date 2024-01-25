import React from "react";


const Child =({setIsLoggedIn ,isLoggedIn})=>{

    function handelLogin(e){
        e.preventDefault();
        setIsLoggedIn(true);
    }
    return(
        <div>

            {isLoggedIn?<p>You are logged in!</p> :<form onSubmit={handelLogin}>
                Username:<input type="text" placeholder="Enter Name"></input> <br/><br/>
                Password:<input type="text" placeholder="Enter Password"></input> <br/>
                <button>Login</button>
            </form>}
            
        </div>
    )
}

export default Child