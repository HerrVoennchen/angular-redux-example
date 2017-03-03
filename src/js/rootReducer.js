import { combineReducers } from 'redux';
import usersReducer from './components/users/reducer';

const rootReducer = combineReducers({
  usersReducer
  //selectedReddit
});

export default rootReducer;