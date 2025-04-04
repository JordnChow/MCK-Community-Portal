import React, { useState } from "react";
import { createClient } from '@supabase/supabase-js';
import { Large, Normal } from "../../modules/News-Containers/containers";
import './Admin.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export default function Admin() {
    const [signedIn, setSignedIn] = useState(false);
    const [action, setAction] = useState(null);
    const [formData, setFormData] = useState({
        info: 'It utilizes a lightweight yet powerful sequentially-turbocharged rotary engine, making a strong 255 horsepower from just 1.3 litres. ',
        image: 'https://hips.hearstapps.com/hmg-prod/images/v12-rx7-2-1668441540.jpg?crop=0.7515555555555555xw:1xh;center,top&resize=1200:*',
        heading: 'The RX-7 is probably the best car in the world',
        details: '3/03/2025 By Jordan Chow',
        type: 'Normal',
        location: "News"
    });

    function SlideShow() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 3,
            slidesToScroll: 3,
        };
        return (
            <Slider {...settings}>
                {Array.from({ length: 3 }).map((_, i) => (
                    <Normal
                        key={i}
                        heading={formData.heading}
                        details={formData.details}
                        info={formData.info}
                        image={formData.image}
                    />
                ))}
            </Slider>
        );
    }

    async function logIn(event) {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        if (error) {
            alert("Error: " + error.message);
        } else {
            setSignedIn(true);
        }
    }

    function handleAction(event) {
        event.preventDefault();
        setAction(event.target.getAttribute('name'));
    }

    function handleCreate(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    async function handleCreateNew(event) {
        event.preventDefault();
        const location = formData.location;
        const paragraphs = formData.info.split('\n').map(p => p.trim()).filter(p => p); // Split info into paragraphs
        const dataToInsert = { ...formData, info: paragraphs };
        delete dataToInsert.location;

        const { error: insertError } = await supabase
            .from(location)
            .insert(dataToInsert);

        if (insertError) {
            console.error('Error inserting new record:', insertError);
            alert("Error occurred, please try again");
        } else {
            alert('Article created successfully');
        }
        setFormData({
            ...formData,
            location: location
        });
    }

    return (
        <section>
            {signedIn ? (
                <section className="admin">
                    <h1>Create a new post</h1>
                    <div>
                        <div className="form-wrapper">
                            <form className="createNew-form" onSubmit={handleCreateNew} autoComplete="off">
                                <div className="form-row">
                                    <div className="form-left">
                                        <div className="form-group">
                                            <label>Heading:</label>
                                            <input type="text" name="heading" value={formData.heading} onChange={handleCreate} placeholder="Heading" className="form-input" />
                                        </div>
                                        <div className="form-group">
                                            <label>Details:</label>
                                            <input type="text" name="details" value={formData.details} onChange={handleCreate} placeholder="Details" className="form-input" />
                                        </div>
                                        <div className="form-group">
                                            <label>Image:</label>
                                            <input type="text" name="image" value={formData.image} onChange={handleCreate} placeholder="Image link address" className="form-input" />
                                        </div>
                                        <div className="form-group">
                                            <label>Type:</label>
                                            <select name="type" value={formData.type} onChange={handleCreate} className="form-select">
                                                <option value="Normal">Normal</option>
                                                <option value="Large">Large</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Location:</label>
                                            <select name="location" value={formData.location} onChange={handleCreate} className="form-select">
                                                <option value="Sport">Sport</option>
                                                <option value="News">News</option>
                                                <option value="Achievements">Achievements</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-right">
                                        <div className="form-group">
                                            <label>Information:</label>
                                            <textarea name="info" value={formData.info} onChange={handleCreate} placeholder="Information on the topic" className="form-textarea" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit">Create Article</button>
                            </form>
                        </div>
                        <div className="container-large">
                            {
                                formData.type == "Normal" ?
                                    <div className="normal">
                                        <SlideShow />
                                    </div> :
                                    <div className="large">
                                        <Large
                                            heading={formData.heading}
                                            details={formData.details}
                                            info={Array.isArray(formData.info) ? formData.info : formData.info.split('\n').map(p => p.trim()).filter(p => p)} // Ensure info is an array
                                            image={formData.image}
                                        />
                                    </div>
                            }
                        </div>
                    </div>
                </section>
            ) : (
                <div className="login-form">
                    <div className="login-container">
                        <h1>Admin sign in page</h1>
                        <form onSubmit={logIn}>
                            <input type="text" name="email" placeholder="email" />
                            <input type="password" name="password" placeholder="password" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}