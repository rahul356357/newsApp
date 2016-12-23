import React from 'react';
import Sample from '../../components/newsapp/index.jsx';
 import FlatButton from 'material-ui/FlatButton';
 import AppBar from 'material-ui/AppBar';
 import {Link} from 'react-router';
  import UserSavedNewsView from '../../components/newsapp/UserSavedNewsView.jsx';
//This is a view layout, hence avoid putting any business logic
export default class Component extends React.Component {
	render () {
		return(
      <div>
      <AppBar title="NewsSearch" iconElementRight={<FlatButton label="Login"/>} >
      <Link to="/a">my Headlines</Link>
    </AppBar>
		<Sample/>
  </div>
		)

}
}
export {UserSavedNewsView} ;
