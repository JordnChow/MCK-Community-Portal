import React from "react";
import "./homepage.css";
import NewsImage from "../../assets/news.jpg";
import SportImage from "../../assets/Cocurricular-Sport.jpg";
import CanteenImage from "../../assets/canteeen.jpg"
import achievementsImage from "../../assets/achievements.jpg"

export default function Homepage() {
    const vh = screen.availHeight / 100
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