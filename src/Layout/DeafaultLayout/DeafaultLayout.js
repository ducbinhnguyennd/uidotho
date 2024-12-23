import React from 'react';
import Navbar from './Header/MenuHeader/Navbar';
import { Footer } from './Footer';

function DefaultLayout({ children }) {
  return (
    <div className="container">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
