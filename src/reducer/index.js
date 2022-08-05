import { combineReducers } from 'redux';
import AllpostReducer from '../reducer/allpostReducer';
import selectPostReducer from './reducerSelectedPost';

const rootReducer = combineReducers({
    allPosts:AllpostReducer,
    selectedPost:selectPostReducer
  });
  export default rootReducer;
