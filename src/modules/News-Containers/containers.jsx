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
                    {props.image ? <img src={props.image} /> : <img src="src\assets\images.jpg" />}
                </div>
                <div className="right">
                    <h2>{props.heading ? props.heading : "The RX-7 is probably the best car in the world"}</h2>
                    <span>{props.details ? props.details : "3/03/2025 By Jordan Chow"}</span>
                    <p>{props.info ? props.info : "It utilizes a lightweight yet powerful sequentially-turbocharged rotary engine, making a strong 255 horsepower from just 1.3 litres. "}</p>
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
                    {props.image ? <img src={props.image} /> : <img src="src\assets\images.jpg" />}
                </div>
                <div className="bottom">
                    <h2>{props.heading ? props.heading : "The RX-7 is probably the best car in the world"}</h2>
                    <span>{props.details ? props.details : "3/03/2025 By Jordan Chow"}</span>
                    <p>{props.info ? props.info : "It utilizes a lightweight yet powerful sequentially-turbocharged rotary engine, making a strong 255 horsepower from just 1.3 litres. "}</p>
                </div>
            </div>
        </section>
    )
}

export { Large, Normal }
