import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import TopBar from './components/TopBar';
import SearchField from './components/SearchField';
import MoviesList from './components/Movies/Listing';

const App: React.FC = () => {
  return (
    <div className="App">
      <TopBar />
      <Container>
        <SearchField />
        <MoviesList />
      </Container>
    </div>
  );
}

export default App;
