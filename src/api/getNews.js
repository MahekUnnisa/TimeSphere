import axios from 'axios';

export async function getNewsFeed(from) {
    const version = process.env.REACT_APP_API_VERSION
    const apiUrl = `https://newsapi.org/${version}/everything`
    const country = process.env.REACT_APP_NEWS_COUNTRY;
    from = '2023-09-30';

    try {
        const response = await axios.get(apiUrl,
            {
                params: {
                    sortBy: 'popularity',
                    pageSize: 10,
                    q: 'beauty',
                    language: 'en',
                    from: from,
                    apiKey: process.env.REACT_APP_NEWS_API_KEY,
                },
            }
        );
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
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch News');
    }
}