import { Sidebar, Navbar, Article } from '../components';
import React, { useEffect, useState } from 'react';
import { getNewsFeed } from '../api/getNews';
import getDate from '../utils/dates';
import { useParams } from 'react-router-dom';

const Category = () => {
    const { category } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        const from = getDate();
        const fetchedData = async () => {
            const data = await getNewsFeed(from, category);
            const articles = data.articles;
            const filteredNews = articles.filter((item, index) => index !== 0);

            setNews(filteredNews);

            localStorage.setItem(category, JSON.stringify(filteredNews));
        };
        fetchedData();
    }, [category])

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen flex">
                <Sidebar />
                <div className="w-4/5 p-4">
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

export default Category