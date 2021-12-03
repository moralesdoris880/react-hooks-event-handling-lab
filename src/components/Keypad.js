import React from "react";

function Keypad(){
    return(
        <div>
            <input onChange={e => console.log('Entering password...')} type={"password"}></input>
        </div>
    )
}

export default Keypad
