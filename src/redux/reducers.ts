// reducers.js
import { combineReducers } from 'redux';
import { SET_TRUTH_TABLE, SET_TABLE_HEADER } from './action';

const initialState = {
  truthTable: [],
  tableHeader: [],
};

export const calcReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TRUTH_TABLE:
      return { ...state, truthTable: action.payload };
    case SET_TABLE_HEADER:
      return { ...state, tableHeader: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  calc: calcReducer
})
