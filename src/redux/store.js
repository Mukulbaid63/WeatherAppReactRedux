import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import RootSagas from './sagas/RootSagas'


const sagaMiddleware=createSagaMiddleware();

const store=createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSagas);


export default store;