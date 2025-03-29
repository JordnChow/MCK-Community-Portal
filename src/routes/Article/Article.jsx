import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'
import "./Article.css"
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export default function Article() {
    const { id } = useParams()
    const [ article, setArticle] = useState([])

    useEffect(() => {
        const fetchArticle = async () => {
            const { data, error } = await supabase
                .from('News')
                .select()
                .eq("id", id)

            if (error) {
                console.error('Error fetching news:', error);
            } else {
                setArticle(data[0]);
            }
        };

        fetchArticle()
    },[])
    console.log(article.image)
    return (
        <section className="article">
            <h1 className="article-heading">{article.heading}</h1>
            <p className="article-details">{article.details}</p>
            <img className="article-image" src={"../../"+ article.image} alt={article.heading} />
            <p className="article-info">{article.info}</p>
        </section>
    );
}