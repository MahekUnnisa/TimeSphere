import { Article, FeaturedArticle, Sidebar } from '../components';
import React, { useEffect, useState } from 'react'
import { getAllNews } from '../api/getNews'
import getDate from '../utils/dates';
import Categories from './Categories';
import getData from '../utils/data';

const Featured = () => {
    const [news, setNews] = useState(null);
    const [featured, setFeatured] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        const from = getDate();
        const categoryData = getData();
        setCategories(categoryData);

        const localNews = JSON.parse(localStorage.getItem('news'));
        const localFeatured = JSON.parse(localStorage.getItem('featured'));

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

                localStorage.setItem('news', JSON.stringify(filteredNews));
                localStorage.setItem('featured', JSON.stringify(data.articles[0]));
            };
            fetchedData();
        }
    }, [])

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex">
                <div className="w-3/4 p-4 mx-5 my-10">
                    {featured ? (
                        <FeaturedArticle featured={featured} />
                    ) : (
                        <p>Loading...</p>
                    )
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
                    {categories ? (
                        <>
                            {categories.map((item) => (
                                <Categories category={item} />
                            ))}
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default Featured