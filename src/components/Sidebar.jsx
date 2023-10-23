import React, { useEffect, useState } from 'react'
import { getTopHeadlines } from '../api/getNews';
import TopHeadline from './TopHeadline';

const Sidebar = () => {
  const [headlines, setHeadlines] = useState(null);

  useEffect(() => {
    const localNews = JSON.parse(localStorage.getItem('topHeadlines'));

    if (localNews) {
      setHeadlines(localNews);
    } else {
      const fetchedData = async () => {
        const data = await getTopHeadlines();
        const articles = data.articles;
        setHeadlines(articles);
        localStorage.setItem('topHeadlines', JSON.stringify(articles));
      };
      fetchedData();
    }
  }, [])
  return (
    <div className="w-3/5 p-4 mx-5 my-2">
      <h3 className='font-semibold text-xl text-center mb-3 mt-8 ms-1 text-gray-950'>Top Headlines</h3>
      {headlines ? (
        <>
          {headlines.map((item, i) => (
            <TopHeadline key={item+i} topHeadline={item} />
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Sidebar