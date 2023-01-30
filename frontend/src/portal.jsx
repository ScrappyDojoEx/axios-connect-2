import React from 'react';
import Register from './register';

export default function Portal(){
    const [display, setDisplay] = React.useState("portal");
    
    const handleDisplayChange = (display) => {
        setDisplay(display);
    }
    
    const portal = (
        <>
            <button onClick = {() => handleDisplayChange("register")}>
                Register
            </button>
            <button>LogIn</button>
        </>
    )

    const register = (
        <>
            <Register />
            <button onClick={() => {handleDisplayChange("portal")}}>
                Back
            </button>
        </>
    )

    return(
        <>
            {display === "portal" && portal}
            {display === "register" && register} 
        </>
    );
}