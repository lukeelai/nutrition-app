import { ADD_FOOD, RETRIEVE_FOOD } from "./actionTypes";

export const addFood = food => ({
  type: ADD_FOOD,
  food
});

export const retrieveFood = (food, page) => ({
  type: RETRIEVE_FOOD,
  food,
  page
});
