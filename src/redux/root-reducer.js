import { combineReducers } from 'redux';

import recipeReducer from './reducer';

export const rootReducer = combineReducers({ data: recipeReducer });
