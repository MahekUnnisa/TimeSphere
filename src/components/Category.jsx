import { Sidebar, Article } from '../components';
import React, { useEffect, useState } from 'react';
import { getNewsFeed } from '../api/getNews';
import getDate from '../utils/dates';
import { useParams } from 'react-router-dom';
import FeaturedCategory from './FeaturedCategory';

const Category = () => {
    const { category } = useParams();
    const [featured, setFeatured] = useState(null);
    const [news, setNews] = useState(null);

    useEffect(() => {
        const from = getDate();
        const localNews = JSON.parse(localStorage.getItem(category));
        const localFeatured = JSON.parse(localStorage.getItem(category + 'Featured'));

        if (localNews && localFeatured) {
            setNews(localNews);
            setFeatured(localFeatured);
        } else {
            const fetchedData = async () => {
                const data = await getNewsFeed(from, category);
                const articles = data.articles;
                const filteredNews = articles.filter((item, index) => index !== 0);

                setNews(filteredNews);
                setFeatured(data.articles[0]);

                localStorage.setItem(category, JSON.stringify(filteredNews));
                localStorage.setItem(category + 'Featured', JSON.stringify(data.articles[0]));
            };

            fetchedData();
        }
    }, [category])

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex">
                <div className="w-4/5 p-4 mx-4">
                    <h3 className='font-extrabold text-2xl mb-3 mt-8 ms-1 text-gray-950'>{category}</h3>
                    {featured ? (
                        <FeaturedCategory articleItem={featured} />
                    ) : (
                        <p>Loading...</p>
                    )
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {news ? (
                            <>
                                {news.map((item, i) => (
                                    <Article key={item.url+i} item={item} />
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

export default Category