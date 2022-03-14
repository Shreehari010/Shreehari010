import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import NavTopReducer from './NavTopReducer';



export default (history) => combineReducers({
  router: connectRouter(history),
  NavTopReducer:NavTopReducer,
});
      