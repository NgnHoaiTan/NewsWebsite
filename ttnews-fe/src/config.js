const API_URL ='https://newsapi.org/v2/';
const API_KEY = '4ef95643983144b0afadc627e6ad6f1f';
const POPULAR_URL = `${API_URL}everything?q=Apple&from=2021-09-21&sortBy=popularity&apiKey=${API_KEY}`;
const TOP_HEADLINES_URL = `${API_URL}top-headlines?country=us&apiKey=${API_KEY}`;

export {
    API_URL,
    API_KEY,
    POPULAR_URL,
    TOP_HEADLINES_URL
};