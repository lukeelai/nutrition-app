import { createStore, combineReducers } from "redux";

//Reducers
import food from "../reducers/food";

export default () => {
  const store = createStore(
    combineReducers({ food }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log(store.getState());
  return store;
};
