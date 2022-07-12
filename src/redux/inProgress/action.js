import * as types from "./actionTypes";

export const completeInpro = (inpro) => ({
    type: types.COMPLETE_INPRO,
    payload: inpro,
});

export const addInpro = (inpro) => ({
    type: types.ADD_INPRO,
    payload: inpro,

});

export const updateInpro = (inpro) => ({
    type: types.UPDATE_INPRO,
    payload: inpro,
});