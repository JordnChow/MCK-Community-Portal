import React, { useState } from "react";
import { createClient } from '@supabase/supabase-js';
import { Large, Normal } from "../../modules/News-Containers/containers";
import './Admin.css';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export default function Admin() {
    const [signedIn, setSignedIn] = useState(false);
    const [action, setAction] = useState(null);
    const [formData, setFormData] = useState({
        info: '',
        image: '',
        heading: '',
        details: '',
        type: 'Normal'
    });

    async function logIn(event) {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        console.log(email + password);
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
        console.log(event.target.getAttribute('name'));
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
        console.log(formData)
        const { error: insertError } = await supabase
            .from('News')
            .insert(formData);

        if (insertError) {
            console.error('Error inserting new record:', insertError);
        } else {
            alert('Article created successfully');
        }
    }

    function Edit() {
        return (
            <div className="edit">
                <h1>Edit a post</h1>
            </div>
        );
    }

    return (
        <section>
            {signedIn ? (
                <section className="admin">
                    <h1>Welcome to the Admin Panel</h1>
                    <button type="submit" name="Create" onClick={handleAction}>Create a new post</button>
                    <button type="submit" name="Edit" onClick={handleAction}>Edit a previous post</button>
                    {action === "Create" && (
                        <div>
                            <h1>Create a new post</h1>
                            <div className="form-wrapper">
                                <form className="createNew-form" onSubmit={handleCreateNew} autoComplete="off">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Heading:</label>
                                            <input type="text" name="heading" value={formData.heading} onChange={handleCreate} placeholder="Heading" className="form-input" />
                                        </div>
                                        <div className="form-group">
                                            <label>Details:</label>
                                            <input type="text" name="details" value={formData.details} onChange={handleCreate} placeholder="Details" className="form-input" />
                                        </div>
                                    </div>
                                    <label>Information:</label>
                                    <textarea name="info" value={formData.info} onChange={handleCreate} placeholder="Information on the topic" className="form-textarea" /><br />
                                    <label>Image:</label>
                                    <input type="text" name="image" value={formData.image} onChange={handleCreate} placeholder="Image link address" className="form-input" />
                                    <label>Type:</label>
                                    <select name="type" value={formData.type} onChange={handleCreate} className="form-select">
                                        <option value="Normal">Normal</option>
                                        <option value="Large">Large</option>
                                    </select>
                                    <button type="submit">Create Article</button>
                                </form>
                            </div>
                            <div className="container-large">
                                {
                                    formData.type == "Normal" ?
                                        <div className="normal">
                                            <Normal
                                                heading={formData.heading}
                                                details={formData.details}
                                                info={formData.info}
                                                image={formData.image}
                                            />
                                        </div> :
                                        <div className="large">
                                            <Large
                                                heading={formData.heading}
                                                details={formData.details}
                                                info={formData.info}
                                                image={formData.image}
                                            />
                                        </div>
                                }
                            </div>
                        </div>
                    )}
                    {action === "Edit" && (
                        <Edit />
                    )}
                </section>
            ) : (
                <form onSubmit={logIn}>
                    <input type="text" name="email" placeholder="email" />
                    <input type="password" name="password" placeholder="password" />
                    <button type="submit">Submit</button>
                </form>
            )}
        </section>
    );
}