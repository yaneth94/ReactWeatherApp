import {createStore} from 'redux';
//redux crear el store con la función vacia para que acepte la compilación
export const store = createStore(() => {}, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
