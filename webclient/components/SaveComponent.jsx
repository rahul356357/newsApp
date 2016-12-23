import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
export default class SaveComponent extends React.Component {
  constructor(props)
  {
    super(props)
    this.savenews = this.savenews.bind(this);
    this.state={
      data:""
    }
  }
  savenews()
  {
    var toSaveData = this.props.toSaveData
    var comment = this.refs.data.getInputNode().value
    axios.post('newspaper/saveNews', {
      author: toSaveData.author,
      title: toSaveData.title,
      description: toSaveData.description,
      url: toSaveData.url,
      urlToImage: toSaveData.urlToImage,
      publishedAt: toSaveData.publishedAt,
      comment: comment
    }).then(function(response) {
    }.bind(this)).catch(function(error) {
      console.log(error);
    }.bind(this))
    this.props.tocheck();
  }
  render()
  {
    const style = {
      button: {
        backgroundColor: "green"
      },
      underlineStyle:
      {
        borderColor:'chocolate'
      }
    }
    return (
      <div>
        <TextField  underlineFocusStyle={style.underlineStyle}    name="Comment" hintText="Comment" ref="data"/>
        <FlatButton label="Save" style={style.button} onClick={this.savenews}/>
      </div>

    )
  }
}
