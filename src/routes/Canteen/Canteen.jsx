import React from "react";
import "./canteen.css";

export default function Canteen() {
    
    return (
        <section className="canteen">
            <div className="canteen-column">
                <h2>Breakfast</h2>
                <ul>
                    <li>Lasagne (home style) – $5.50</li>
                    <li>Gnocchi (hand-rolled slow-cooked beef bolognese gnocchi) – $7.00</li>
                    <li>Spaghetti Bosciola (pasta with sweet creamy bacon and mushroom sauce) – $7.00</li>
                    <li>Spaghetti Bolognese (ground beef garlic onions spices) – $7.00</li>
                </ul>
                <h2>Gluten Free</h2>
                <ul>
                    <li>Potato Bake – $6.50</li>
                    <li>Fried Rice – $6.50</li>
                    <li>Butter Chicken – $6.50</li>
                    <li>Chicken Tender Wrap – $6.50</li>
                </ul>
            </div>
            <div className="canteen-column">
                <h2>Lunch</h2>
                <ul>
                    <li>Fried Rice (classic popular Chinese-style fried rice) – $5.50</li>
                    <li>Butter Chicken (with mildly spiced gravy) – $7.00</li>
                    <li>Beef Sausage Roll (4oz 100% seasoned beef) – $5.00</li>
                    <li>Spinach & Feta Roll – $5.00</li>
                    <li>Beef Pie (4oz 100% minced lean beef) – $5.00</li>
                </ul>
                <h2>Snacks</h2>
                <ul>
                    <li>Seasonal Fruit – $1.50</li>
                    <li>Popcorn – $2.50</li>
                    <li>Red Rock Chips – $2.50</li>
                    <li>Garlic Bread – $2.50</li>
                    <li>Gourmet Muffins – $2.50</li>
                </ul>
            </div>
            <div className="canteen-column">
                <h2>Drinks</h2>
                <ul>
                    <li>Plain Milk – Small $2.00 / Regular $2.50</li>
                    <li>Flavoured Milk – Small $3.50 / Regular $4.50</li>
                    <li>Water – $2.00</li>
                    <li>Orange Juice – $4.00</li>
                    <li>Up & Go – $4.00</li>
                    <li>Zero Sugar Drinks (various flavors) – $2.80</li>
                </ul>
            </div>
        </section>
    );
}