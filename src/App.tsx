import React from 'react';
import './App.scss';
import TopBar from './components/TopBar';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';
import { Store } from 'redux';
import { ApplicationState } from './store';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

const App: React.SFC = () => {
  const history = createBrowserHistory();
  const store: Store<ApplicationState> = configureStore(history);
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <TopBar />
          <Route path="/" exact component={Home} />
          <Route path="/details/:movieName" component={Details} />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
