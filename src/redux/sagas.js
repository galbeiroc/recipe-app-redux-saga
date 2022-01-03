import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as types from './actionsTypes';
import { getRecipes } from './api';

function* onLoadRecipeAsync({ query }) {
  try {
    const response = yield call(getRecipes, query);
    yield put({ type: types.FETCH_RECIPE_SUCCESS, payload: response.data });
  } catch(error) {
    yield put({ type: types.FETCH_RECIPE_ERROR, payload: error });
  }
};

function* onLoadRecipe() {
  yield takeLatest(types.FETCH_RECIPE_SENDING, onLoadRecipeAsync);
};

const recipeSaga = [fork(onLoadRecipe)];

export default function* rootSaga() {
  yield all([...recipeSaga])
};
