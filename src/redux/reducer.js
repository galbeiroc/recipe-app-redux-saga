import * as types from './actionsTypes';

const initialState = {
  recipes: [],
  error: null,
  loading: false,
};

const recipeReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_RECIPE_SENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.FETCH_RECIPE_SUCCESS: {
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      }
    }
    case types.FETCH_RECIPE_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    }
    default: {
      return state;
    }
  }
};

export default recipeReducer;
