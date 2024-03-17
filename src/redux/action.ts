// actions.js
export const SET_TRUTH_TABLE = 'SET_TRUTH_TABLE';
export const SET_TABLE_HEADER = 'SET_TABLE_HEADER';

export const setTruthTable = (truthTable: any) => ({
  type: SET_TRUTH_TABLE,
  payload: truthTable,
});

export const setTableHeader = (tableHeader: any) => ({
  type: SET_TABLE_HEADER,
  payload: tableHeader,
});
