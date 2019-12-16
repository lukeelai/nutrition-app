import { TOGGLE_MODAL } from "../actions/actionTypes";

const ModalDefaultState = { modal: false };

export default (state = ModalDefaultState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, modal: !state.modal };
    default:
      return state;
  }
};
