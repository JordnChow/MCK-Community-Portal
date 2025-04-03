import React from "react";
import "./footer.css"

export default function Footer() {

    const contrast = () => {
        const stylesheet = document.styleSheets[1];
        console.log(stylesheet.cssRules)
        stylesheet.cssRules[0].style.setProperty("color", "black", "important");
        stylesheet.cssRules[0].style.setProperty("background-color", "white", "important");
    }
    let isHighContrast = false;

    const toggleContrast = () => {
        const stylesheet = document.styleSheets[1];
        isHighContrast = !isHighContrast;

        if (isHighContrast) {
            stylesheet.cssRules[0].style.setProperty("color", "black", "important");
            stylesheet.cssRules[0].style.setProperty("background-color", "white", "important");
        } else {
            stylesheet.cssRules[0].style.removeProperty("color");
            stylesheet.cssRules[0].style.removeProperty("background-color");
        }
    };
    return (
        <section className="footer">
            <div className="image">
                <img src="src\assets\Marist_College_Kogarah_crest.png" height="200px"></img>
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
                <p>All images used are the property of Marist College Kogarah, Aaron Knight or Jordan Chow.
                    <br /><br />
                    Aaron and Jordan productions will not take responsibility for images and/or
                    intellectual property. It is the responsibility of the article writers to ensure they have the
                    appropriate permissions. </p>
            </div>
        </section>
    )
}