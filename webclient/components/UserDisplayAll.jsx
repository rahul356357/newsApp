import React from 'react';
import {Card,CardActions,CardHeader,CardMedia,CardTitle,CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import UserUpdate from './UserUpdate.jsx';
import UserDelete from './UserDelete.jsx';
export default class UserDisplayAll extends React.Component {
    constructor(props) {
        super(props)
        this.state={
          render:false
        }
    }
    fetchAgain(){
      this.props.dataGetter();
      this.props.getsnackbar();
    }
    render() {
    var style={
     img :{
     height:"400px"
   },
   card: {
     position: 'relative',
     width: '700px',
     color: 'red',
     marginRight:"25%",
     marginLeft:"25%"
   },
     button:
     {
       display:'inline'
     }
  }

       if (this.props.data) {
         var result=this.props.data.map((item) =>{return(<div className="row">
      <Card style={style.card}>
      <CardHeader/>
      <CardMedia
       overlay={<CardTitle title={item.title} subtitle={item.author} />}>
      <img src={item.urlToImage} style={style.img} />
      </CardMedia>
      <CardTitle title={item.comment}  />
      <CardText>
      {item.description}
      </CardText>
      <CardActions>
        <div style={style.button}>
      <UserUpdate toUpdateData={item} touserupdate={this.fetchAgain.bind(this)}> </UserUpdate>
      <UserDelete toDeleteData={item} touserdelete={this.fetchAgain.bind(this)}></UserDelete>
    </div>
      </CardActions>
      </Card>
        </div>)})
        } else {
            return (<p></p>)
        }
        return (
          <div className="row">{result}</div>
        );
    }
}
