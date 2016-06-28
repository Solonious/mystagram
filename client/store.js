import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import reduser
import rootReducer from './redusers/index';

import comments from './data/comments';
import posts from './data/posts';

//create an object data
const defaultState = {
  posts,
  comments
};

const enchancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enchancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
