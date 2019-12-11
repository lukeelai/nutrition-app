import { UPDATE_SELECT, UPDATE_MONTH } from "./actionTypes";

export const updateSelect = date => ({
  type: UPDATE_SELECT,
  date
});

export const updateMonth = (start, end) => ({
  type: UPDATE_MONTH,
  start,
  end
});
