/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import { Header } from "./Header";
import { Footer } from "./Footer";
import Contact from "./Header/Contact/Contact";
function DefaultLayout({ children }) {
  return (
    <div className="container">
      <Contact />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
