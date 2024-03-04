const TOKEN_KEY = 'ACCESS_TOKEN';

export const setAccessToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
}

export const clearAccessToken = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const getAccessToken = () => {
    return localStorage.getItem(TOKEN_KEY);
}