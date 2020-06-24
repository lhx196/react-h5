import { UPDATE_USER_NAME } from 'action/actionType';

interface typeAction {
  type: string;
  data: any;
  callback?: Function;
}

let userInfo = {
  name: 'admin',
};

const user = (state: any = userInfo, action: typeAction) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return Object.assign(state, action.data);
    default:
      return state;
  }
};

export default user;
