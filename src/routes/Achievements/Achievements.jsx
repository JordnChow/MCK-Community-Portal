import React, { useEffect, useState } from "react";
import { Large, Normal } from "../../modules/News-Containers/containers";
import { createClient } from '@supabase/supabase-js'
import './achievements.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export default function News() {
    const [news, setNews] = useState([]);
    const largeNews = news.filter(item => item.type == "Large")
    const normalNews = news.filter(item => item.type == "Normal")
    const navigate = useNavigate();

    function SlideShow() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 3,
            slidesToScroll: 3,
        };
        return (

            <Slider {...settings} >
                {normalNews.map((item) => (
                    <div onClick={() => navigate(`/Article/${item.id}`, { state: item })}>
                        <Normal {...item} key={item.id} />
                    </div>
                ))}
            </Slider>
        );
    }

    useEffect(() => {
        const fetchNews = async () => {
            const { data, error } = await supabase
                .from('Achievements')
                .select('*');

            if (error) {
                console.error('Error fetching news:', error);
            } else {
                setNews(data);
            }
        };

        fetchNews();

    }, []);
    console.log(news)
    return (
        <section className="news">

            <div className="large-section">
                {
                    largeNews.map(item => (
                        <div className="large-container" key={item.id} onClick={() => navigate(`/Article/${item.id}`, { state: item })}>
                            <Large  {...item} />
                        </div>
                    ))
                }
            </div>
            {
                normalNews.length > 1 ? (
                    <div className="normal-section">
                        <SlideShow />
                    </div>
                ) : <></>
            }
        </section>
    )
}
