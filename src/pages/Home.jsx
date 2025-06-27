import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
// import CategoryFilter from '../components/CategoryFilter';
import EventsSection from '../components/EventsSection';
import Footer from '../components/Footer';

const Home = ({ onLogout }) => {
  return (
          <div className="pt-[60px] font-Roboto">
    {/* <div className="font-sans"> */}
      <Header onLogout={onLogout} />
      <Hero />
      {/* <CategoryFilter /> */}
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Home;
