
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ContentRoll from '@/components/ContentRoll';
import KnowHow from '@/components/KnowHow';
import ContinuousLearner from '@/components/ContinuousLearner';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ContentRoll />
        <KnowHow />
        <ContinuousLearner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
