import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'
import "./Article.css"

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export default function Article() {
    const { id } = useParams()
    const [ article, setArticle] = useState([])

    const [item_id, location] = id.split("-");
    

    useEffect(() => {
        const fetchArticle = async () => {
            const { data, error } = await supabase
                .from(location)
                .select()
                .eq("id", item_id);

            if (error) {
                console.error('Error fetching news:', error);
            } else {
                const fetchedArticle = data[0];
                if (typeof fetchedArticle.info === "string" && fetchedArticle.info.startsWith("[")) {
                    try {
                        fetchedArticle.info = JSON.parse(fetchedArticle.info); // Parse stringified JSON array
                    } catch (e) {
                        console.error("Error parsing info field:", e);
                    }
                }
                setArticle(fetchedArticle);
            }
        };

        fetchArticle();
    }, []);
    return (
        <section className="article">
            <h1 className="article-heading">{article.heading}</h1>
            <p className="article-details">{article.details}</p>
            <img className="article-image" src={article.image} alt={article.heading} />
            <br/><br/>
            <span>
                Image Link: {article.image}
            </span>
            <br/><br/>
            {Array.isArray(article.info) ? (
                article.info.map((paragraph, index) => (
                    <p key={index} className="article-info">{paragraph}<br/><br/></p>
                ))
            ) : (
                <p className="article-info">{article.info}</p>
            )}
        </section>
    );
}