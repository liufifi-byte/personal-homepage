import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './styles/App.css';

const App = () => {
  const [role, setRole] = useState('planter');

  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login role={role} setRole={setRole} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;