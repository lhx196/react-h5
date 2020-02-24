import { combineReducers } from 'redux';
import counter from './countReducer';

const rootReducer = combineReducers({
	counter, // 计数器
});

export default rootReducer;
