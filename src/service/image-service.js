import axios from 'axios';

const API_KEY = '39892147-054eca5fcd8481a2b07ecccd0';
const BASE_URL = 'https://pixabay.com/api/';

export const getImage = async (query, page = 1, perPage = 12) => {
  const response = await axios.get(
    `${BASE_URL}?q=${query}}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  return {
    hits: response.data.hits,
    totalHits: response.data.totalHits,
  };
};
