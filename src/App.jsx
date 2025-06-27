import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import DiscoverEventsPage from './components/DiscoverEventsPage';
import CreateEventPage from './components/CreateEventPage';
import Header from './components/Header';
import Footer from './components/Footer';
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

  const navigateToDiscoverEvents = () => {
    setCurrentPage('discover-events');
  };

  const navigateToCreateEvent = () => {
    setCurrentPage('create-event');
  };

  const handleLogout = () => {
    setCurrentPage('login');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onLogout={handleLogout} onExploreEvents={navigateToDiscoverEvents} onCreateEvent={navigateToCreateEvent} />;
      case 'discover-events':
        return (
          <div>
            <Header onLogout={handleLogout} onExploreEvents={navigateToDiscoverEvents} onCreateEvent={navigateToCreateEvent} />
            <DiscoverEventsPage />
            <Footer />
          </div>
        );
      case 'create-event':
        return (
          <div>
            <Header onLogout={handleLogout} onExploreEvents={navigateToDiscoverEvents} onCreateEvent={navigateToCreateEvent} />
            <CreateEventPage />
            <Footer />
          </div>
        );
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
