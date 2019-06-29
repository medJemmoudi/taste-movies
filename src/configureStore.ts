import { Store, createStore, applyMiddleware } from "redux";
import { ApplicationState, getRootReducer } from "./store";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import moviesSaga from "./store/movies/saga";


export const configureStore = (): Store<ApplicationState> => {
    let initialState: ApplicationState = {
        movies: {
            data: [],
            loading: false,
            error: ''
        }
    };

    const reduxSaga = createSagaMiddleware();
    const middlewares = [logger, reduxSaga];

    const store =  createStore(
        getRootReducer(),
        initialState,
        applyMiddleware(...middlewares)
    );

    reduxSaga.run(moviesSaga);

    return store;
}