import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {UserFirstInterface} from '../webclient/components/index.jsx';
import MainComponent from '../webclient/components/index.jsx';
import {UserSavedNewsView} from '../webclient/components/index.jsx';
import {RegisterModule} from '../webclient/components/index.jsx';

// import Home1 from './views/home/home1';
// import MainComponent from './components/newsapp/MainComponent.jsx'
ReactDOM.render(
	<MuiThemeProvider>
		<Router history = {hashHistory}>
		      <Route path = "/UserFirstInterface" component = {UserFirstInterface}>
		         <IndexRoute component = {MainComponent} />
						 <Route path="/MainComponent" component={MainComponent}/>
		         <Route path = "/UserSavedNewsView" component = {UserSavedNewsView} />
						 <Route path = "/RegisterModule" component = {RegisterModule} />
		      </Route>
		   </Router>
			</MuiThemeProvider>,
  	document.getElementById('search')
);
