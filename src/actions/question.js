import api from '../utils/api';
import { setAlert } from './alert';
import {
  ADD_QUESTION,
  GET_QUESTION,
  QUESTION_ERROR,
  CLEAR_QUESTION
} from './types';

//get all questions
export const getQuestion = () => async (dispatch) => {
dispatch({ type: CLEAR_QUESTION });

try {
    const res = await api.get('/question/questions');
    dispatch({
    type: GET_QUESTION,
    payload: res.data
    });
} catch (err) {
    dispatch({
    type: QUESTION_ERROR,
    payload: { msg: err.response.statusText, status: err.response.status }
    });
}
};

export const addQuestion = formData => async dispatch => {
    try {
      const res = await api.post('/question/question', formData);
  
      dispatch({
        type: ADD_QUESTION,
        payload: res.data
      });
      dispatch(setAlert('Question Created', 'success'));
    } catch (err) {
      dispatch({
        type: QUESTION_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
      // dispatch(setAlert('Invalid inputs please fill again', 'danger'));
    }
  };
