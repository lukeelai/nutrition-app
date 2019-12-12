import { ADD_WORKOUT, UPDATE_WORKOUT, TOGGLE_TEXT } from "./actionTypes";

export const addWorkout = workout => ({
  type: ADD_WORKOUT,
  workout
});

export const updateWorkout = (id, update) => ({
  type: UPDATE_WORKOUT,
  id,
  update
});

export const toggleText = update => ({
  type: TOGGLE_TEXT,
  update
});
