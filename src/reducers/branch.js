import {
    GET_BRANCH,
  } from '../actions/types';
const initialState = {
    branch:null,
    branches: [],
    loading: true,
    error: {}
};

function branchReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_BRANCH:
        return {
            ...state,
            branches: payload,
            loading: false
        };
      default:
        return state;
    }
  }
  
  export default branchReducer;