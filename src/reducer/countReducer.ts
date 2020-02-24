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

export default function counter(state: any = defaultState, action: any) {
  switch (action.type) {
    case 'COUNT_ADD':
      // 加
      return Object.assign({}, state, {
        count: state.count + action.data,
      });
    case 'COUNT_DES':
      // 减
      return Object.assign({}, state, {
        count: state.count - action.data,
      });
    default:
      return state;
  }
}
