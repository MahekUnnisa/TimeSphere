import React, { useEffect, useState } from 'react'
import { getNewsFeed } from '../api/getNews'
import getDate from '../utils/dates';
import Sidebar from '../components/Sidebar';

const Featured = () => {
    const [news, setNews] = useState(null);
    const [featured, setFeatured] = useState(null);

    useEffect(() => {
        const from = getDate();
        const fetchedData = async () => {
            const data = await getNewsFeed(from);
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
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                            <img
                                src={featured.urlToImage}
                                alt="Featured Article"
                                className="w-full h-auto"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{featured.title}</h2>
                                <p className="text-gray-600">{featured.author}</p>
                            </div>
                        </div>
                        ) : (
                            <p>Loading...</p>
                        )
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {news ? (
                            <>
                                {news.map((item) => (
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                        <img
                                            src={item.urlToImage}
                                            alt={item.title}
                                            className="w-full h-auto"
                                        />
                                        <div className="p-4">
                                            <p>{item.author}</p>
                                            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                        <div className="px-4 pt-1 pb-2">
                                            <a target='_blank' rel='noreferrer' className="text-fuchsia-700 hover:text-slate-950" href={item.url}>Read more ...</a>
                                        </div>
                                    </div>

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