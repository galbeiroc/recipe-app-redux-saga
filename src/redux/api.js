import axios from 'axios';

const { REACT_APP_API_ID, REACT_APP_API_KEY } = process.env;

export const getRecipes = async(query) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_API_ID}&app_key=${REACT_APP_API_KEY}`;
  return await axios.get(url);
};
