import { ADD_SEARCH } from "../actions/actionTypes";

const SearchDefaultState = {};

export default (state = SearchDefaultState, action) => {
  switch (action.type) {
    case ADD_SEARCH:
      return { ...action.search };
    default:
      return state;
  }
};
