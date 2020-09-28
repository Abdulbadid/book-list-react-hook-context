import React from 'react';
import BookList from './componenet/BookList';
import Navbar from './componenet/Navbar';
import NewBookForm from './componenet/NewBookForm';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
          <Navbar/>
          <BookList/>
          <NewBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
