import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Provider store={store}>
      {loggedIn ? <Dashboard /> : <Login onLoginSuccess={() => setLoggedIn(true)} />}
    </Provider>
  );
};

export default App;
