import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import UserDisplayAll from "./UserDisplayAll.jsx"
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import Snackbar from 'material-ui/Snackbar';
export default class UserSavedNewsView extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            data: "",
            render: false,
            open:false
        }
    }
  
    datafetch()
    {
        axios.get('/newspaper/searchall').then(function(response) {
            this.setState({data: response.data})
        }.bind(this)).catch(function(error) {
            console.log(error);
        }.bind(this));
    }
    handleTouchTap = () => {
        this.setState({
          open: true,
        });
      };

   Snackbarrequest()
   {
     this.handleTouchTap();
   }
handleRequestClose = () => {
        this.setState({
          open: false,
        });
      };
    componentWillMount()
    {
        this.datafetch()
    }
    render()
    {
        const style = {
            div: {
                marginLeft: "43%",
                paddingTop: '10px'
            },
            button: {
                color: 'chocolate'
            }
        }
        return (
            <div>
                <UserDisplayAll data={this.state.data} dataGetter={this.datafetch.bind(this)}  getsnackbar={this.Snackbarrequest.bind(this)}  />
                <Snackbar
          open={this.state.open}
          message="Operation Succesfull"
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
            </div>
        )

    }

}
