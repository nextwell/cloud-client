import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';



import { store } from './store/store.jsx';

import WebPage from './containers/WebPage.jsx';



let app = document.getElementById('root');






class App extends React.Component {
	render(){
		return (
			<Provider store={store}>
			
				<WebPage />

			</Provider>
		);
	}
}




ReactDOM.render(<App />, app);