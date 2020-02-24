import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Pages from './pages';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';
import './App.css';

let store = createStore(rootReducer);

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<Pages />
			</Router>
		</Provider>
	);
};

export default App;
