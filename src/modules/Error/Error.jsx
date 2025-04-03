import React from "react";
import "./error.css"

export default function Error(props){
    return(
        <div className="error">
            <h1>Oops, you caught us</h1>
            <p>It's not your fault, it's ours. It seems like there are no articles published.</p>
        </div>
    )
}