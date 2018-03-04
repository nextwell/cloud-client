import {createStore} from 'redux';

import AllReducers from './reducers/index.jsx';

const store = createStore(AllReducers);

export { store };