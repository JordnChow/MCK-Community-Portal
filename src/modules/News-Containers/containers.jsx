import React from "react";
import './containers.css'

/* 
Expected, props.:
- heading
- details
- info
- image
*/

function Large(props) {
    return (
        <section className="large">
            <div className="container">
                <div className="left">
                    {props.image ? <img src={props.image} /> : <></>}
                </div>
                <div className="right">
                    <h2>{props.heading}</h2>
                    <span>{props.details}</span>
                    <p>{props.info}</p>
                </div>
            </div>
        </section>
    )
}

function Normal(props) {
    return (
        <section className="normal">
            <div className="container">
                <div className="top">
                    {props.image ? <img src={props.image} /> :<></>}
                </div>
                <div className="bottom">
                    <h2>{props.heading }</h2>
                    <span>{props.details}</span>
                    <p>{props.info}</p>
                </div>
            </div>
        </section>
    )
}

export { Large, Normal }
