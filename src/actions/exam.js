import api from '../utils/api';
import {
  GET_EXAM,
  EXAM_ERROR,
  CLEAR_EXAM
} from './types';

//get all exams
export const getExam = () => async (dispatch) => {
dispatch({ type: CLEAR_EXAM });

try {
    const res = await api.get('/exam/exams');
    dispatch({
    type: GET_EXAM,
    payload: res.data
    });
} catch (err) {
    dispatch({
    type: EXAM_ERROR,
    payload: { msg: err.response.statusText, status: err.response.status }
    });
}
};


