import api from '../utils/api';
import {
  GET_BRANCH,
  BRANCH_ERROR,
  CLEAR_BRANCH
} from './types';

//get all branchs
export const getBranch = () => async (dispatch) => {
dispatch({ type: CLEAR_BRANCH });

try {
    const res = await api.get('/branch/branches');
    dispatch({
    type: GET_BRANCH,
    payload: res.data
    });
} catch (err) {
    dispatch({
    type: BRANCH_ERROR,
    payload: { msg: err.response.statusText, status: err.response.status }
    });
}
};


