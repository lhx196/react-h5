export const countAdd = (data: any, callback?: Function) => ({
	type: 'COUNT_ADD',
	data,
	callback,
});

export const countDec = (data: any, callback?: Function) => ({
	type: 'COUNT_DES',
	data,
	callback,
});
