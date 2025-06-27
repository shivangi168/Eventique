import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './index.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login'); // Start with login page

  const navigateToHome = () => {
    setCurrentPage('home');
  };

  const navigateToLogin = () => {
    setCurrentPage('login');
  };

  const navigateToSignUp = () => {
    setCurrentPage('signup');
  };

  const handleLogout = () => {
    setCurrentPage('login');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onLogout={handleLogout} />;
      case 'signup':
        return <SignUp onLogin={navigateToLogin} onSignUp={navigateToHome} />;
      case 'login':
      default:
        return <Login onSignUp={navigateToSignUp} onLogin={navigateToHome} />;
    }
  };

  return <div>{renderCurrentPage()}</div>;
};

export default App;
