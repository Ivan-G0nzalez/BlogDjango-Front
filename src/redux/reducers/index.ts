import { combineReducers } from 'redux';
import blog from './blog';
import categories from './category';

export default combineReducers({
  blog,
  categories,
});
