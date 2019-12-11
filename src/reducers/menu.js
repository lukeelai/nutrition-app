import { UPDATE_SELECT } from "../actions/actionTypes";
import moment from "moment";

const MenuDefaultState = moment().format("L");

export default (state = MenuDefaultState, action) => {
  switch (action.type) {
    case UPDATE_SELECT:
      return action.date;
    default:
      return state;
  }
};