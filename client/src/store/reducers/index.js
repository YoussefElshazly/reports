import { combineReducers } from 'redux';

import report from './report';
import loader from './loader';

export default combineReducers({
  report,
  loader,
});
