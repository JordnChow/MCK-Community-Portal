import React, { useState } from "react";
import "./footer.css";
import crestImage from "../../assets/Marist_College_Kogarah_crest.png"; // Import the image

export default function Footer() {
    const [isHighContrast, setIsHighContrast] = useState(false);

    const toggleContrast = () => {
        setIsHighContrast(!isHighContrast);
        document.body.classList.toggle("high-contrast", !isHighContrast);
    };

    return (
        <section className={`footer ${isHighContrast ? "high-contrast" : ""}`}>
            <div className="image">
                <img src={crestImage} height="200px" alt="Marist College Kogarah Crest"></img>
            </div>
            <div className="accessibility">
                <h3>Accessibility Features:</h3>
                <h4>Translate:</h4>
                <ul><a href="https://jordnchow-github-io.translate.goog/MCK-Community-Portal/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en-US&_x_tr_pto=wapp">Français(French)</a></ul>
                <ul><a href="https://jordnchow-github-io.translate.goog/MCK-Community-Portal/?_x_tr_sl=en&_x_tr_tl=zh-CN&_x_tr_hl=en-US&_x_tr_pto=wapp">Mandarin(普通话)</a></ul>
                <ul><a href="https://jordnchow-github-io.translate.goog/MCK-Community-Portal/?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=en-US&_x_tr_pto=wapp#/">Hindi(हिंदी)</a></ul>
                <ul></ul>
                <h4><button onClick={toggleContrast}>High Contrast</button></h4>
                <h4>Don't have your language?</h4>
                <p>Try use <strong><a href="https://translate.google.com.au/?sl=auto&tl=en&op=websites">Google Translate's</a></strong> website translate function.</p>
            </div>
            <div className="copyright">
                <h3>Copyrights:</h3>
                <p>All images used in the homepage are the property of Marist College Kogarah, Aaron Knight or Jordan Chow.
                    <br /><br />
                    Aaron and Jordan productions will not take responsibility for images and/or
                    intellectual property. It is the responsibility of the article writers to ensure they have the
                    appropriate permissions. </p>
            </div>
        </section>
    );
}