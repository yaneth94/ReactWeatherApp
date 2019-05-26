import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const initialState = {
    city: 'Buenos Aires,ar'
};

const composeEnhacers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//redux crear el store con la función vacia para que acepte la compilación
export const store = createStore(reducers, initialState,composeEnhacers(applyMiddleware(thunk)));
