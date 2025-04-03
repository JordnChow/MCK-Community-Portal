import React, { useEffect, useState } from "react";
import { Large, Normal } from "../../modules/News-Containers/containers";
import { createClient } from '@supabase/supabase-js'
import './sport.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export default function Sport() {
    const [news, setNews] = useState([]);
    const largeNews = news.filter(item => item.type == "Large")
    console.log("d", largeNews)
    const normalNews = news.filter(item => item.type == "Normal")
    console.log("e", normalNews)

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
                {normalNews.map((item) => (
                    <Normal {...item} key={item.id}/>
                ))}
            </Slider>
        );
    }

    useEffect(() => {
        const fetchNews = async () => {
            const { data, error } = await supabase
                .from('Sport')
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
            <div className="large-section">
                {
                    largeNews.map(item => (
                        <div className="large-container" key={item.id}>
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
