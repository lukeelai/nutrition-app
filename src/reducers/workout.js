import {
  ADD_WORKOUT,
  UPDATE_WORKOUT,
  TOGGLE_TEXT,
  TOGGLE_READONLY
} from "../actions/actionTypes";

const WorkoutDefaultState = [
  {
    date: "12/12/2019",
    plaintext: true,
    readonly: false,
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

// plaintext: true
// readonly: false
const testState = [
  {
    12162019: {
      T1: ["Squat", "90", "5", true, false],
      T2: ["Bench", "37.5", "Fail", true, false],
      T3: ["Chinups", "85", "20", true, false]
    },
    12182019: {
      T1: ["Deadlift", "90", "5", true, false],
      T2: ["OHP", "12.5", "10", true, false],
      T3: ["Bicep Curls", "20", "15", true, false]
    }
  }
];

export default (state = testState, action) => {
  switch (action.type) {
    case ADD_WORKOUT:
      return [...state, action.workout];
    case UPDATE_WORKOUT:
      return [{ ...state[0], T1_Weight: action.update }];
    case TOGGLE_TEXT:
      return [{ ...state[0], plaintext: !state[0].plaintext }];
    case TOGGLE_READONLY:
      return [{ ...state[0], readonly: !state[0].readonly }];
    default:
      return state;
  }
};
