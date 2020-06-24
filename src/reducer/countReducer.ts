import { COUNTER_ADD, COUNTER_DES } from 'action/actionType';
/**
 * 计数信息
 */

interface typeAction {
  type: string;
  data: any;
  callback?: Function;
}

let defaultState = {
  count: 0,
};

export default function counter(state: any = defaultState, action: typeAction) {
  switch (action.type) {
    case COUNTER_ADD:
      // 加
      return Object.assign({}, state, {
        count: state.count + action.data,
      });
    case COUNTER_DES:
      // 减
      return Object.assign({}, state, {
        count: state.count - action.data,
      });
    default:
      return state;
  }
}
