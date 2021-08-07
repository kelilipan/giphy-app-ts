export const getSearchImage = async (query) => {
  const API_KEY = process.env.REACT_APP_GIPHY_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12`;
  const response = await fetch(url).then((data) => data.json());
  return response;
};

export const getTrending = async () => {
  const limit = 20;
  const API_KEY = process.env.REACT_APP_GIPHY_KEY;
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}`;
  const response = await fetch(url).then((data) => data.json());
  return response;
};
