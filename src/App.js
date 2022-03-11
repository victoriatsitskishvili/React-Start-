import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';

function App() {
  const [pages] = useState([
    {
      name: 'about me',
      description: 'Information about Victoria',
    },
    { name: 'portfolio', description: 'List of Victorias work' },
    { name: 'conact', description: 'Victorias contact information' },
    { name: 'resume', description: 'Victorias resume' },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);


  return (
    <div>
        <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;