import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';


function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={movies}/>
    </div>
  );
}

export default App;
