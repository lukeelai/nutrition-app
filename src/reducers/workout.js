import { ADD_WORKOUT, UPDATE_WORKOUT } from "../actions/actionTypes";
import moment from "moment";

const MenuDefaultState = [{ plaintext: true }];

export default (state = MenuDefaultState, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
      return [...state, action.workout];
    case UPDATE_WORKOUT:
      return state;
    default:
      return state;
  }
};
