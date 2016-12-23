import React from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Card,CardActions,CardHeader,CardMedia,CardTitle,CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import ActionAndroid from 'material-ui/svg-icons/action/android';
export default class UserUpdate extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      open: false
    }
  }
  handleOpen = () => {
    this.setState({open: true});
  };
  handleClose = () => {
    this.setState({open: false});
  }

  onUpdate(){
    var data=this.props.toUpdateData
    var comment=this.refs.ChangedComment.getInputNode().value;
    console.log(comment);
    axios.post('/newspaper/update', {
      id:data._id,
      comment:comment
    }).then(function (response) {

    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
    this.handleClose();
    alert('onUpdate');
    this.props.touserupdate();
    this.props.getsnackbar();
  }
  render() {
    const style={
      button:{
        "float":'left',
        backgroundColor:"green"
      },
      underlineStyle:
      {
        borderColor:"chocolate"
      }
    }
    var data=this.props.toUpdateData
    const actions = [
      <FlatButton
        label="Cancel" hoverColor="red" onTouchTap={this.handleClose}
      />,
      <FlatButton label="Update"  hoverColor="green" keyboardFocused={true} onTouchTap={this.onUpdate.bind(this)}
      />,
    ];
    return (
      <div>
        <RaisedButton label="Update" buttonStyle={style.button} onTouchTap={this.handleOpen} style={style.button} />
        <Dialog
          title={this.props.toUpdateData.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          >
            <TextField ref='ChangedComment'
              hintText="Change comment"
              fullWidth={true}
              underlineFocusStyle={style.underlineStyle}
              floatingLabelText={data.comment}
            />
          </Dialog>
        </div>
      );
    }
  }
