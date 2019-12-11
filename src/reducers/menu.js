import { ADD_SELECT } from "../actions/actionTypes";
import moment from "moment";

const MenuDefaultState = moment().format("L");

export default (state = MenuDefaultState, action) => {
  switch (action.type) {
    case ADD_SELECT:
      return action.key;
    default:
      return state;
  }
};
