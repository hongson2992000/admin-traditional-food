import {
  getType,
  hideModalCreateFood,
  showModalCreateFood,
} from "../actions/PopupAction";

const initialState = {
  isShowNewFood: false,
};
export default function PopupReducer(state = initialState, action) {
  switch (action.type) {
    case getType(showModalCreateFood):
      return {
        ...state,
        isShowNewFood: true,
      };
    case getType(hideModalCreateFood):
      return {
        ...state,
        isShowNewFood: false,
      };
    default:
      return state;
  }
}
