import React from 'react';
import Navbar from './Header/MenuHeader/Navbar';
import { Footer } from './Footer';
import  {Header}  from './Header';
import  Contact  from './Header/Contact/Contact';

function DefaultLayout({ children }) {
  return (
    <div className="container">
      <Contact/>
      <Header/>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
