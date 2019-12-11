import { UPDATE_SELECT, UPDATE_MONTH } from "../actions/actionTypes";
import moment from "moment";

const MenuDefaultState = {
  startOfMonth: moment().startOf("month"),
  endOfMonth: moment().endOf("month"),
  date: moment().format("L")
};

export default (state = MenuDefaultState, action) => {
  switch (action.type) {
    case UPDATE_SELECT:
      return { ...state, date: action.date };
    case UPDATE_MONTH:
      return { ...state, startOfMonth: action.start, endOfMonth: action.end };
    default:
      return state;
  }
};
