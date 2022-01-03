# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Redux Saga

#### Middleware API
Creates a Redux middleware and connects the Sagas to the Redux Store
#### Effects
To generalize, triggering Side Effects from inside a Saga is always done by yielding some declarative Effect. (You can also yield Promise directly, but this will make testing difficult as we saw in the first section.)
We saw that using Effects like `call` and `put`, combined with high-level APIs like `takeEvery` allows us to achieve the same things as `redux-thunk`, but with the added benefit of easy testability.

But `redux-saga` provides another advantage over `redux-thunk`. In the Advanced section you'll encounter some more powerful Effects that let you express complex control flows while still allowing the same testability benefit.

* Effect creators

##### call
Creates a plain object describing the function call. The `redux-saga` middleware takes care of executing the function call and resuming the generator with the resolved response.
```js
const response = yield call(getRecipes, query);
```

##### put
Creates an Effect description that instructs the middleware to schedule the dispatching of an action to the store. This dispatch may not be immediate since other tasks might lie ahead in the saga task queue or still be in progress.

You can, however, expect the store to be updated in the current stack frame (i.e. by the next line of code after `yield put(action))` unless you have other Redux middlewares with asynchronous flows that delay the propagation of the action.

```js
yield put({ type: types.FETCH_RECIPE_SUCCESS, payload: response.data });
```

##### fork
Creates an Effect description that instructs the middleware to perform a non-blocking call on fn

* Arguments​
`fn: Function` - A Generator function, or normal function which returns a Promise as result
`args: Array<any>` - An array of values to be passed as arguments to fn
returns a Task object.

<b>Notes​</b>
fork, like call, can be used to invoke both normal and Generator functions.

```js
const recipeSaga = [fork(onLoadRecipe)];
```

##### takeLatest
Forks a `saga` on each action dispatched to the Store that matches `pattern`. And automatically cancels any previous `saga` task started previously if it's still running.

Each time an action is dispatched to the store. And if this action matches `pattern`, `takeLatest` starts a new `saga` task in the background. If a `saga` task was started previously (on the last action dispatched before the actual action), and if this task is still running, the task will be cancelled.

`pattern: String | Array | Function `- for more information see docs for `take(pattern)`.

`saga: Function` - a Generator function.

`args: Array<any>` - arguments to be passed to the started task. takeLatest will add the incoming action to the argument list (i.e. the action will be the last argument provided to `saga`).

```js
yield takeLatest(types.FETCH_RECIPE_SENDING, onLoadRecipeAsync);
```

##### takeEvery
Spawns a saga on each action dispatched to the Store that matches pattern.

`pattern: String | Array | Function` - for more information see docs for `take(pattern)`

`saga: Function` - a Generator function

`args: Array<any>` - arguments to be passed to the started task. `takeEvery` will add the incoming action to the argument list (i.e. the action will be the last argument provided to `saga`).

 <b>Notes​</b>
`takeEvery` is a high-level API built using take and fork. Here is how the helper could be implemented using the low-level Effects.

* Effect combinators

##### all
Creates an Effect description that instructs the middleware to run multiple Effects in parallel and wait for all of them to complete. It's quite the corresponding API to standard `Promise#all`.
