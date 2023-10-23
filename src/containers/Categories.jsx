import React, { useEffect, useState } from 'react'
import getDate from '../utils/dates';
import { getNewsFeed } from '../api/getNews';
import { Article } from '../components';
import FeaturedCategory from '../components/FeaturedCategory';

const Categories = (props) => {
    const [category, setCategory] = useState(null)
    const [featured, setFeatured] = useState(null)
    useEffect(() => {
        const from = getDate();
        const fetchedData = async () => {
            const data = await getNewsFeed(from, props.category);
            const articles = data.articles;
            const filteredData = articles.filter((item, index) => index !== 0);

            setCategory(filteredData);
            setFeatured(data.articles[0]);

            localStorage.setItem(props.category, JSON.stringify(filteredData));
            localStorage.setItem('featured', JSON.stringify(data.articles[0]));
        };
        fetchedData();
    }, [props.category])

    return (
        <div className="mt-4">
            <h3 className='font-extrabold text-3xl mb-3 mt-8 ms-1 text-gray-950'>{props.category}</h3>
            {featured ? (
                <FeaturedCategory articleItem={featured} />
            ) : (
                <p>Loading...</p>
            )
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {category ? (
                    <>
                        {category.map((item, i) => (
                            <Article key={item.url+i} item={item} />
                        ))}
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Categories