import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Pages from './pages';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Pages />
    </Router>
  );
};

export default App;
