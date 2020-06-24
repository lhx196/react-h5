import { COUNTER_ADD, COUNTER_DES } from './actionType';

export const countAdd = (data: any, callback?: Function) => ({
  type: COUNTER_ADD,
  data,
  callback,
});

export const countDec = (data: any, callback?: Function) => ({
  type: COUNTER_DES,
  data,
  callback,
});
