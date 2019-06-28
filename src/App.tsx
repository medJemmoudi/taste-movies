import React from 'react';
import './App.scss';
import { Container } from 'react-bootstrap';
import TopBar from './components/TopBar';
import SearchField from './components/SearchField';
import MoviesList from './components/Movies/Listing';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';
import { Store } from 'redux';
import { ApplicationState } from './store';

const App: React.FC = () => {
  const store: Store<ApplicationState> = configureStore();
  return (
    <Provider store={store}>
      <div className="App">
        <TopBar />
        <Container>
          <SearchField />
          <MoviesList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
