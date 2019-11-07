import { ADD_FOOD } from "../actions/actionTypes";

const FoodDefaultState = [];

export default (state = FoodDefaultState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return [...state, action.food];
    default:
      return state;
  }
};
