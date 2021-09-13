import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import question from './question';
import exam from './exam';
import branch from './branch';

export default combineReducers({alert,auth,question,exam,branch});