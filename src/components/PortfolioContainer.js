import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import HeadingTitle from './pages/HeadingTitle';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {

    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <body>
    
    <header>
      <div class="row">
        <div class="col-3 headingtitle">
          <HeadingTitle />
        </div>
        <div class="col-9">
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </div>
    </header>
    <main>
      {/* We are passing the currentPage from state and the function to update it */}

      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </main>
    <Footer />
    </body>
  );
}
