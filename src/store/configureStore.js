import { createStore, combineReducers } from "redux";

//Reducers
import food from "../reducers/food";
import search from "../reducers/search";
import menu from "../reducers/menu";
import workout from "../reducers/workout";

export default () => {
  const store = createStore(
    combineReducers({ food, search, menu, workout }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log(store.getState());
  return store;
};
