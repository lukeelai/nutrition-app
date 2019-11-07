import { ADD_SEARCH, RETRIEVE_FOOD } from "../actions/actionTypes";

const SearchDefaultState = {};

export default (state = SearchDefaultState, action) => {
  switch (action.type) {
    case ADD_SEARCH:
      return { ...action.search };
    case RETRIEVE_FOOD:
      return { ...action.search };
    default:
      return state;
  }
};
