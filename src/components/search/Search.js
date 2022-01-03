import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      with: '55ch',
    },
  }
}));

const Search = () => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField id='outlined-basic' variant='outlined' style={{ width: "400px"}} />
      <Button variant='contained' color='primary' style={{ width: "80px", height: '54px'  }}>Search</Button>
    </form>
  )
}

export default Search;
