import React from "react";
import './containers.css'

/* 
Expected, props.:
- heading
- details
- info
- image
*/

function truncateText(paragraph, wordLimit) {
    const words = paragraph.split(" ");
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + ". See more...";
    }
    return paragraph;
}

function Large(props) {
    let infoArray = Array.isArray(props.info) ? props.info : [props.info]; // Normalize info to an array
    if (typeof props.info === "string" && props.info.startsWith("[")) {
        try {
            infoArray = JSON.parse(props.info); // Parse stringified JSON array
        } catch (e) {
            console.error("Error parsing info field:", e);
        }
    }
    const truncatedInfo = infoArray.map(paragraph => truncateText(paragraph, 25)); // Truncate once
    return (
        <section className="large">
            <div className="container">
                <div className="left">
                    {props.image ? <img src={props.image} /> : <></>}
                </div>
                <div className="right">
                    <h2>{props.heading}</h2>
                    <span>{props.details}</span>
                    <p>{truncatedInfo[0]}</p>
                </div>
            </div>
        </section>
    );
}

function Normal(props) {
    let infoArray = Array.isArray(props.info) ? props.info : [props.info]; // Normalize info to an array
    if (typeof props.info === "string" && props.info.startsWith("[")) {
        try {
            infoArray = JSON.parse(props.info); // Parse stringified JSON array
        } catch (e) {
            console.error("Error parsing info field:", e);
        }
    }
    console.log("Normal component infoArray:", infoArray); // Debugging log
    const truncatedInfo = infoArray.map(paragraph => truncateText(paragraph, 25)); // Truncate once
    return (
        <section className="normal">
            <div className="container">
                <div className="top">
                    {props.image ? <img src={props.image} /> : <></>}
                </div>
                <div className="bottom">
                    <h2>{props.heading}</h2>
                    <span>{props.details}</span>
                    <p>{truncatedInfo[0]}</p>
                </div>
            </div>
        </section>
    );
}

export { Large, Normal };
