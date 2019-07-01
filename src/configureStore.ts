import { Store, createStore, applyMiddleware } from "redux";
import { ApplicationState, getRootReducer } from "./store";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import moviesSaga from "./store/movies/saga";
import { History } from 'history';
import { routerMiddleware } from 'connected-react-router';


export const configureStore = (history: History): Store<ApplicationState> => {
    let initialState: ApplicationState = {
        movies: {
            data: [],
            loading: false,
            error: ''
        }
    };

    const reduxSaga = createSagaMiddleware();
    const middlewares = [logger, routerMiddleware(history), reduxSaga];

    const store =  createStore(
        getRootReducer(history),
        initialState,
        applyMiddleware(...middlewares)
    );

    reduxSaga.run(moviesSaga);

    return store;
}