import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  TOGGLE_TEXT
} from "../actions/actionTypes";

const MenuDefaultState = [
  {
    date: "12/12/2019",
    plaintext: true,
    T1: "Squat",
    T1_Weight: "90",
    T1_Last: "5",
    T2: "Bench",
    T2_Weight: "37.5",
    T2_Last: "Fail",
    T3: "Chinups",
    T3_Weight: "85",
    T3_Last: "20"
  }
];

export default (state = MenuDefaultState, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
      return [...state, action.workout];
    case UPDATE_WORKOUT:
      return state;
    case TOGGLE_TEXT:
      console.log(!state[0].plaintext);
      return [{ ...state[0], plaintext: !state[0].plaintext }];
    default:
      return state;
  }
};
