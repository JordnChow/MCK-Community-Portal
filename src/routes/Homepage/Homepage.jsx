import React from "react";
import "./homepage.css";
import NewsImage from "../../assets/news.jpg";
import SportImage from "../../assets/Cocurricular-Sport.jpg";
import CanteenImage from "../../assets/canteeen.jpg"
import achievementsImage from "../../assets/achievements.jpg"

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="background"></div>
            <div className="information">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Summary_Container
                                    title="News"
                                    information=""
                                    url={NewsImage}
                                />
                            </td>
                            <td>
                                <Summary_Container
                                    title="Sport"
                                    information=""
                                    url={SportImage}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Summary_Container
                                    title="Canteen"
                                    information=""
                                    url={CanteenImage}
                                />
                            </td>
                            <td>
                                <Summary_Container
                                    title="Achievements"
                                    information=""
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
        <div className="Summary_Container" style={{ backgroundImage: `url(${props.url})` }}>
            <h1>{props.title}</h1>
            <p>{props.information}</p>
        </div>
    )
}