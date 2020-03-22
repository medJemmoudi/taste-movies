import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import { Provider } from 'react-redux';
import { configureStore } from './configureStore';
import { Store } from 'redux';
import { ApplicationState } from './store';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Routes } from './Routes';


const App: React.SFC = () => {
  const history = createBrowserHistory();
  const store: Store<ApplicationState> = configureStore(history);
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <TopBar />
          <Routes />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
