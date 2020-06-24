import { combineReducers } from 'redux';
import counter from './countReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  counter,
  user, // 计数器
});

export default rootReducer;
