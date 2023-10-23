import React, { useEffect, useState } from 'react';
import { Sidebar, FeaturedArticle, Article } from '../components';
import { getAllNews } from '../api/getNews';
import getDate from '../utils/dates';
import { v4 as uuidv4 } from 'uuid';

const Feed = () => {
    const [news, setNews] = useState(null);
    const [featured, setFeatured] = useState(null);

    useEffect(() => {
        const from = getDate();
        const localNews = JSON.parse(localStorage.getItem('feedNews'));
        const localFeatured = JSON.parse(localStorage.getItem('feedFeatured'));

        if (localNews && localFeatured) {
            setNews(localNews);
            setFeatured(localFeatured);
        } else {
            const fetchedData = async () => {
                const data = await getAllNews(from);
                const articles = data.articles;
                const filteredNews = articles.filter((item, index) => index !== 0);

                setNews(filteredNews);
                setFeatured(data.articles[0]);

                localStorage.setItem('feedNews', JSON.stringify(filteredNews));
                localStorage.setItem('feedFeatured', JSON.stringify(data.articles[0]));
            };
            fetchedData();
        }
    }, [])

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex">
                <div className="w-3/4 p-4 my-10 mx-5">
                    {featured ? (
                        <FeaturedArticle featured={featured} />
                    ) : (
                        <p>Loading...</p>
                    )
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {news ? (
                            <>
                                {news.map((item, i) => (
                                    <Article key={uuidv4()} item={item} />

                                ))}
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default Feed