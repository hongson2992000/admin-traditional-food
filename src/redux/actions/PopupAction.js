import {createAction} from "redux-actions"

export const getType = (reduxAction) =>{
    return reduxAction().type;
}

//Modal Manage Food
export const showModalCreateFood = createAction("SHOW_CREATE_FOOD_MODAL");
export const hideModalCreateFood = createAction("HIDE_CREATE_FOOD_MODAL");