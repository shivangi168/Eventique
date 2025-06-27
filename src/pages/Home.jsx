import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
// import CategoryFilter from '../components/CategoryFilter';
import EventsSection from '../components/EventsSection';
import HostEventsSection from '../components/HostEventsSection';
import FeaturesSection from '../components/FeaturesSection';
import StepsSection from '../components/StepsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Home = ({ onLogout, onExploreEvents, onCreateEvent }) => {
  return (
          <div className="pt-[60px] font-Roboto">
    {/* <div className="font-sans"> */}
      <Header onLogout={onLogout} onExploreEvents={onExploreEvents} onCreateEvent={onCreateEvent} />
      <Hero />
      {/* <CategoryFilter /> */}
      <EventsSection />
      <HostEventsSection />
      <FeaturesSection />
      <StepsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;
