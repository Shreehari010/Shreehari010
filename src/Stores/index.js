import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';

import reducers from '../reducers/index'

export default createStore(reducers, {}, applyMiddleware(Thunk));
