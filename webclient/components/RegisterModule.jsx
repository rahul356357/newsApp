import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import axios from 'axios';
import Drawer from 'material-ui/Drawer';
import {hashHistory} from 'react-router';
export default class RegisterModule extends React.Component {
    constructor(props)
    {
        super(props)

        this.state = {
            open: false,
            msg: "",
            drawer: true
        }
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    toAuthenticate()
    {
        var username = this.refs.username.getValue();
        var password = this.refs.password.getValue();
        axios.post('/login', {
            username: username,
            password: password
        }).then(function(response) {
            console.log(response)
            this.setState({open: false})
            hashHistory.push('/UserFirstInterface');
            console.log(response);
        }.bind(this)).catch(function(error) {
            this.setState({open:true});
            console.log(error);
            this.setState({msg:"something is wrong"})
        }.bind(this))
    }

    closeevent()
    {
        axios.get('/login/logout').then(function(response) {
            console.log(response)
            this.setState({drawer: false})
        }.bind(this)).catch(function(response) {
            console.log(response)
        })
    }

    handleToggle = () => this.setState({
        drawer: !this.state.open
    });

    render()
    {
        const actions = [< FlatButton label = "Login" primary = {
                true
            }
            onTouchTap = {
                this.toAuthenticate.bind(this)
            } />];
        const styles = {

            floatingLabelStyle: {
                color: 'chocolate'
            },
            floatingLabelFocusStyle: {
                color: 'chocolate'
            },
            floatingLabelFocusStyle: {
                color: 'chocolate'
            },
            underlineStyle: {
                borderColor: 'chocolate'
            }

        }
        return (
            <div>
                <Drawer width={200} openSecondary={true} open={this.state.drawer}>
                    <RaisedButton label="Login" onTouchTap={this.handleOpen}/>
                    <RaisedButton label="logout" onTouchTap={this.closeevent.bind(this)}/>
                    <Dialog title="Login" actions={actions} modal={false} open={this.state.open}>
                        <TextField floatingLabelText="Username" floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} hintText="username" ref="username"/>
                        <br></br>
                        <TextField floatingLabelText="Password" floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineStyle} hintText="password" ref="password"/>
                        <br></br><span style={{color:"red"}}>{this.state.msg}</span>
                    </Dialog>
                </Drawer>
            </div>
        )
    }
}
