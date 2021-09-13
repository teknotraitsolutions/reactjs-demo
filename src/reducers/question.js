import {
    ADD_QUESTION,
    GET_QUESTION,
  } from '../actions/types';
const initialState = {
    question:null,
    questions: [],
    loading: true,
    showModal:true,
    error: {}
};

function questionReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case ADD_QUESTION:
        return {
          ...state,
          questions:[payload, ...state.questions],
          loading: false,
          showModal:false
        };
      case GET_QUESTION:
        return {
            ...state,
            questions: payload,
            showModal:true,
            loading: false
        };
      default:
        return state;
    }
  }
  
  export default questionReducer;