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
        loading: action.payload.loading,
      }
    }
    case types.FETCH_RECIPE_SUCCESS: {
      return {
        ...state,
        recipes: action.payload.recipes,
        loading: action.payload.loading
      }
    }
    case types.FETCH_RECIPE_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: action.payload.loading
      }
    }
    default: {
      return state;
    }
  }
};

export default recipeReducer;
