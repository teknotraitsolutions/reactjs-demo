import api from '../utils/api';
import { LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT} from './types';
import {setAlert} from './alert'

//Register User

export const login = ({email,password}) =>async dispatch => {
     
     const body = JSON.stringify({email,password});
     try{
        const res = await api.post('/user/login',body);
        dispatch(
            {
            type:LOGIN_SUCCESS,
            payload:res.data,
        });
     }
     catch(err){
        const errors = err.response.data;
        if(errors){
            dispatch(setAlert(errors.msg,'danger'));
        }
        dispatch({
            type:LOGIN_FAIL
        });
     }
} 

// Logout
export const logout = () => ({ type: LOGOUT });