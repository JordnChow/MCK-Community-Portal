import React, { useEffect, useState } from "react";
import { Large, Normal } from "../../modules/News-Containers/containers";
import { createClient } from '@supabase/supabase-js'
import './news.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export default function News() {
    const [news, setNews] = useState([]);

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
                {news.map((item) => (
                    <Normal {...item} />
                ))}
            </Slider>
        );
    }

    useEffect(() => {
        const fetchNews = async () => {
            const { data, error } = await supabase
                .from('News')
                .select('*');

            if (error) {
                console.error('Error fetching news:', error);
            } else {
                setNews(data);
            }
        };

        fetchNews();
    }, []);
    
    return (
        <section className="news">
            <div className="large">
                {
                    news.map(item => (
                        <Large key={item.id} {...item} />
                    ))
                }
            </div>
            <div className="normal">
                <SlideShow />
            </div>
        </section>
    )
}
