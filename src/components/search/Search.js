import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import * as types from '../../redux/actionsTypes';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      with: '55ch',
    },
  }
}));

const Search = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.FETCH_RECIPE_SENDING, query })
  }, [query, dispatch]);

  const handleSearch = () => {
    setQuery(search);
    setSearch("");
  };

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField
        id='outlined-basic'
        variant='outlined'
        style={{ width: "400px"}}
        type="text"
        value={search}
        onChange={({ target: { value }}) => setSearch(value)}
      />
      <Button
        variant='contained'
        color='primary'
        style={{ width: "80px", height: '54px'  }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </form>
  )
}

export default Search;
