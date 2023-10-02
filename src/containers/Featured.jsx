import { Article, FeaturedArticle, Sidebar } from '../components';
import React, { useEffect, useState } from 'react'
import { getNewsFeed } from '../api/getNews'
import getDate from '../utils/dates';

const Featured = () => {
    const [news, setNews] = useState(null);
    const [featured, setFeatured] = useState(null);

    useEffect(() => {
        const from = getDate();
        const fetchedData = async () => {
            const data = await getNewsFeed(from, 'technology');
            const articles = data.articles;
            const filteredNews = articles.filter((item, index) => index !== 0);

            setNews(filteredNews);
            setFeatured(data.articles[0]);

            localStorage.setItem('news', JSON.stringify(filteredNews));
            localStorage.setItem('featured', JSON.stringify(data.articles[0]));
        };
        fetchedData();
    }, [])

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex">
                <Sidebar />
                <div className="w-4/5 p-4">
                    {featured ? (
                        <FeaturedArticle featured={featured} />
                    ) : (
                        <p>Loading...</p>
                    )
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {news ? (
                            <>
                                {news.map((item) => (
                                    <Article item={item} />
                                ))}
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Featured