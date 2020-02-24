import { RouteComponentProps } from 'react-router-dom';
import rootReducer from 'reducer';

type TReducer = {
	store?: any;
};

export type TRouter = RouteComponentProps;

export type TPage = RouteComponentProps & TReducer;
