import { createStore } from 'redux';
import reducer from './reducer';
// import thunkMiddleware from 'redux-thunk'

const store = createStore(reducer);

export default store;