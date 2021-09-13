/* eslint-disable import/no-anonymous-default-export */
import { LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT } from "../actions/types";
import jwtDecode from "jwt-decode";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('token') ? true : false,
    role:localStorage.getItem('role'),
    loading:true,
    user:null
}

export default function(state = initialState, action) {
    const {type, payload} = action;
    
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token',payload.token);
            const decodedToken = jwtDecode(payload.token);
            const role = decodedToken.user.role;
            localStorage.setItem('role',role);
            localStorage.setItem('isActivated',true);
            return{
                ...state,
                ...payload,
                isAuthenticated:true,
                role:role,
                loading:false
            }
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('isActivated');
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                role:null,
                loading:false
            }
            default :
            return state;

    }
}