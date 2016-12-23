import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router';
export default class AppbarComponent extends React.Component {
  constructor(props)
  {
    super(props)
  }
  render()
  {
    const style = {
      links: {
        lineHeight: "55px"
      },
      button: {
        'color': 'white'
      }
    }
    return (
      <div style={style.links}>
        <Link to="UserSavedNewsView">
          <FlatButton label="My News" style={style.button}></FlatButton>
        </Link>
        <Link to="MainComponent"><FlatButton label="Home" style={style.button}/></Link>
        <Link to="RegisterModule"><FlatButton label="Register" style={style.button}/></Link>
      </div>
    )
  }
};
