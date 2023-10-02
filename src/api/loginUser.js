export async function fetchGoogleUserInfo(accessToken) {
    try {
        const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch Google user info');
    }
}