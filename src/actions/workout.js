import { ADD_WORKOUT, UPDATE_WORKOUT } from "./actionTypes";

export const addWorkout = workout => ({
  type: UPDATE_WORKOUT,
  workout
});

export const updateWorkout = (id, update) => ({
  type: UPDATE_WORKOUT,
  id,
  update
});
