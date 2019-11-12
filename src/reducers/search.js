import { ADD_SEARCH, RETRIEVE_FOOD } from "../actions/actionTypes";

const SearchDefaultState = {};

export default (state = SearchDefaultState, action) => {
  switch (action.type) {
    case ADD_SEARCH:
      console.log(action.search.foods);
      return {
        ...action.search,
        foods: action.search.foods.filter(food => food.brandOwner !== undefined)
      };
    case RETRIEVE_FOOD:
      return { ...action.search };
    default:
      return state;
  }
};
