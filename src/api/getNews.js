import axios from 'axios';

export async function getNewsFeed(from, searchTerm) {
    const version = process.env.REACT_APP_API_VERSION
    const apiUrl = `https://newsapi.org/${version}/everything`
    from = '2023-10-03';

    try {
        const response = await axios.get(apiUrl,
            {
                params: {
                    sortBy: 'popularity',
                    pageSize: 25,
                    q: searchTerm,    
                    language: 'en',
                    from: from,
                    apiKey: process.env.REACT_APP_NEWS_API_KEY,
                },
            }
        );
        console.log("here");
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch News');
    }
}

export async function getAllNews(from) {
    const version = process.env.REACT_APP_API_VERSION
    const apiUrl = `https://newsapi.org/${version}/everything`
    from = '2023-10-03';

    try {
        const response = await axios.get(apiUrl,
            {
                params: {
                    sortBy: 'popularity',
                    pageSize: 25,
                    q: 'cryptocurrency',    
                    language: 'en',
                    from: from,
                    apiKey: process.env.REACT_APP_NEWS_API_KEY,
                },
            }
        );
        console.log("here");
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch News');
    }
}

export async function getTopHeadlines() {
    const version = process.env.REACT_APP_API_VERSION
    const apiUrl = `https://newsapi.org/${version}/top-headlines`
    const country = process.env.REACT_APP_NEWS_COUNTRY;

    try {
        const response = await axios.get(apiUrl, {
            params: {
                country: country,
                apiKey: process.env.REACT_APP_NEWS_API_KEY,
            },
        });
        console.log("here");
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch News');
    }
}