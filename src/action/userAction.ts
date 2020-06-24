import { UPDATE_USER_NAME } from './actionType';

export const updateUserName = (data: any, callback?: Function) => ({
  type: UPDATE_USER_NAME,
  data,
  callback,
});
