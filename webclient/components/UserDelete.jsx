import React from 'react';
import axios from 'axios';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Card,CardActions,CardHeader,CardMedia,CardTitle,CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
export  default class UserDelete extends React.Component{
  constructor (props){
    {
      super(props)
    }
      this.state = {
      open: false,
      }
  }
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  }
  ondelete()
  {
    var data=this.props.toDeleteData

    console.log(data._id);
    axios.post('/newspaper/deleteNews', {
      id:data._id,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.props.touserdelete();
    this.handleClose();
  }
  render() {

    var data=this.props.toDeleteData
    console.log(this.props.toDeleteData);
    const actions = [
      <FlatButton
        label="Cancel"  hoverColor="blue" onTouchTap={this.handleClose}
      />,
      <FlatButton label="Delete"  hoverColor="red" keyboardFocused={true} onTouchTap={this.ondelete.bind(this)}/>,
    ];
    const style={
      button:{
        backgroundColor:'red'
      }
    }

    return (
      <div>
        <RaisedButton label="Delete" buttonStyle={style.button} onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.toDeleteData.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          > Are U Sure U want to Delete
        </Dialog>
      </div>
    );
  }
}
