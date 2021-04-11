import { combineReducers } from 'redux';
import commmentsReducer from 'reducers/comments';
import authReducer from 'reducers/auth';

export default combineReducers({
  comments: commmentsReducer,
  auth: authReducer,
});
