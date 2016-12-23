import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog'
import {Link} from "react-router";
import AppbarComponent from './AppbarComponent.jsx'
export default class UserFirstInterface extends React.Component{
constructor(props)
{
super(props)
}
render ()
{
const style={
  appbar:{
    backgroundColor:"chocolate"
  }
}
  return(
    <div>
    <AppBar title="Diginews" iconClassNameRight="muidocs-icon-navigation-expand-more" style={style.appbar}  iconElementRight={<AppbarComponent/>} />
     {this.props.children}
    </div>
)
}



}
