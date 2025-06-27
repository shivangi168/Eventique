import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import Footer from '../components/Footer';

const Home = () => {
  return (
          <div className="pt-[60px] font-Roboto">
    {/* <div className="font-sans"> */}
      <Header />
      <Hero />
      <CategoryFilter />
      {/* Add EventCard list below here later */}
      <Footer />
    </div>
  );
};

export default Home;
