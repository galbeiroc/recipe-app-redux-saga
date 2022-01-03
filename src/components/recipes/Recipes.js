import { useSelector } from 'react-redux';

import Recipe from '../recipeItem/Recipe';

const Recipes = () => {
  const { recipes } = useSelector(state => state.data);

  return (
    <>
    {
      recipes && recipes.hits && recipes.hits.map(({ recipe }) => (
        <Recipe key={recipe.label} {...recipe} />
      ))
    }
    </>
  );
};

export default Recipes;
