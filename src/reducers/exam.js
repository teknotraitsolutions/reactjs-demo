import {
    GET_EXAM,
  } from '../actions/types';
const initialState = {
    exam:null,
    exams: [],
    loading: true,
    error: {}
};

function examReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_EXAM:
        return {
            ...state,
            exams: payload,
            loading: false
        };
      default:
        return state;
    }
  }
  
  export default examReducer;