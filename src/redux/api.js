import axios from 'axios';

export const getRecipes = async(query) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
  await axios.get(url);
};
