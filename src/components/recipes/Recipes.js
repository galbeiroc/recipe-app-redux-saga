import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Recipe from '../recipeItem/Recipe';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(1),
  }
}));

const Recipes = () => {
  const classes = useStyles();
  const { recipes } = useSelector(state => state.data);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
        {
          recipes && recipes.hits && recipes.hits.map(({ recipe }) => (
            <Recipe key={recipe.label} {...recipe} />
          ))
        }
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Recipes;
