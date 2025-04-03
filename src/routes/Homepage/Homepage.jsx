import React, { useState, useEffect } from "react";
import "./homepage.css";
import NewsImage from "../../assets/news.jpg";
import SportImage from "../../assets/Cocurricular-Sport.jpg";
import CanteenImage from "../../assets/canteeen.jpg"
import achievementsImage from "../../assets/achievements.jpg"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);


export default function Homepage() {
    const [showPopup, setShowPopup] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const popupShown = localStorage.getItem("popupShown");
        if (!popupShown) {
            const timer = setTimeout(() => {
                setShowPopup(true);
                localStorage.setItem("popupShown", "true");
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, []);

    async function handleSubmit(){
        const { error: insertError } = await supabase
            .from("feedback")
            .insert({"feedback": feedback, "rating":rating});
        insertError? alert(insertError): null
        setShowPopup(false);
    };

    const handleClose = () => setShowPopup(false);

    const vh = screen.availHeight / 100;
    return (
        <div className="homepage">
            <div className="background">
                <div className="background-overlay">
                    <h1 className="portal-title">MCK Community Portal</h1>
                    <p className="portal-summary">Welcome to the MCK Community Portal, your one-stop destination for news, sports, canteen updates, and achievements.</p>
                    <button onClick={() => window.scroll({ top: 92 * vh, behavior: "smooth" })}>&darr;</button>
                </div>
            </div>
            <div className="information">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Summary_Container
                                    title="News"
                                    information="Stay updated with the latest news and announcements."
                                    url={NewsImage}
                                />
                            </td>
                            <td>
                                <Summary_Container
                                    title="Sport"
                                    information="Explore the latest sports updates and events."
                                    url={SportImage}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Summary_Container
                                    title="Canteen"
                                    information="Check out the canteen menu and updates."
                                    url={CanteenImage}
                                />
                            </td>
                            <td>
                                <Summary_Container
                                    title="Achievements"
                                    information="Celebrate our community's achievements and milestones."
                                    url={achievementsImage}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>We value your feedback!</h2>
                        <textarea
                            placeholder="Leave your feedback here..."
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                        />
                        <div className="rating">
                            <label>Rate us:</label>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    className={rating >= star ? "selected" : ""}
                                    onClick={() => setRating(star)}
                                >
                                    {star}★
                                </button>
                            ))}
                        </div>
                        <button onClick={handleSubmit} className="Submit">Submit</button>
                        <button onClick={handleClose} className="Submit">Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

function Summary_Container(props) {
    return (
        <div
            className="summary-container"
            style={{ backgroundImage: `url(${props.url})` }}
        >
            <div className="summary-overlay">
                <h1 className="summary-title">{props.title}</h1>
                <p className="summary-info">{props.information || "Click to learn more!"}</p>
            </div>
        </div>
    );
}