import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog'
import axios from 'axios';
import SearchComponent from './SearchComponent.jsx';
import DisplayComponent from './DisplayComponent.jsx';
import Snackbar from 'material-ui/Snackbar';
export default class Sample extends React.Component {
  constructor(props)
  {
    super(props)
    this.searchHeadline = this.searchHeadline.bind(this);
    this.state = {
      source: '',
      data: '',
      open: ''
    }
  }

  handleTouchTap() {
    this.setState({open: true})
  }

  handleRequestClose()
  {
    this.setState({open: false})
  }

  Snackbarrequest()
  {
    this.handleTouchTap();
  }

  searchHeadline(source) {
    this.setState({source: source})
    const NEWS_API_URL = 'https://newsapi.org/v1/articles?apiKey=f0c1205477404fde9aa56e2dbda30d6b';
    var encodedSource = encodeURIComponent(source.replace(/ /g, ''));
    var requestUrl = `${NEWS_API_URL}&source=${encodedSource}`;
    axios.get(requestUrl).then(function(response) {
      this.setState({data: response.data})
    }.bind(this)).catch(function(error) {
      console.log(error);
    }.bind(this));
  }

  render()
  {
    return (
      <div>

        <SearchComponent onSearch={this.searchHeadline.bind(this)}></SearchComponent>
        <DisplayComponent data={this.state.data} snacktodisplay={this.Snackbarrequest.bind(this)}/>
        <Snackbar open={this.state.open} message="Save Succesfull" autoHideDuration={2000} onRequestClose={this.handleRequestClose.bind(this)}/>
      </div>
    )
  }
}
