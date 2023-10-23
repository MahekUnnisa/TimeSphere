import axios from 'axios';

const version = process.env.REACT_APP_API_VERSION
const baseUrl = process.env.REACT_APP_API_BASE_URL
const country = process.env.REACT_APP_NEWS_COUNTRY
const apiKey = process.env.REACT_APP_NEWS_API_KEY


export async function getNewsFeed(from, searchTerm) {
    const apiUrl = `${baseUrl}/${version}/search`

    try {
        const response = await axios.get(apiUrl,
            {
                params: {
                    max: 25,
                    q: searchTerm,
                    lang: 'en',
                    apikey: apiKey,
                },
            }
        );

        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch News');
    }
}

export async function getAllNews(from) {
    const apiUrl = `${baseUrl}/${version}/search`

    try {
        const response = await axios.get(apiUrl, {
            params: {
                country: country,
                apikey: apiKey,
            },
        });

        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch News');
    }
}

export async function getTopHeadlines() {
    const apiUrl = `${baseUrl}/${version}/top-headlines`

    try {
        const response = await axios.get(apiUrl, {
            params: {
                country: country,
                apikey: apiKey,
            },
        });

        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch News');
    }
}