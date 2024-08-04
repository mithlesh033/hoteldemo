import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import InfoSection from './components/InfoSection';
import BookingSection from './components/BookingSection';
import WeddingsSection from './components/WeddingsSection';
import OffersSection from './components/OffersSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <InfoSection />
      <BookingSection />
      <WeddingsSection />
      <OffersSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
