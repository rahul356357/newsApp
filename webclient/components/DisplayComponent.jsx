import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SaveComponent from './SaveComponent.jsx';
export default class DisplayComponent extends React.Component {
    constructor(props) {
        super(props)
        this.tosnacksave=this.tosnacksave.bind(this);
    }
  tosnacksave() {
    this.props.snacktodisplay();
  }
    render() {
        var style = {
            img: {
                height: "400px"
            },
            card: {
                position: 'relative',
                width: '700px',
                color: 'red',
                marginRight: "25%",
                marginLeft: "25%"
            },
            cardaction: {
                marginLeft: "25%"
            },
            result: {
                paddingTop: "10px"
            }
        }
        if (this.props.data) {
            var result = this.props.data.articles.map((item)=>{return (
                    <div className="newsContainer">
                        <Card style={style.card}>
                            <CardHeader/>
                            <CardMedia overlay={< CardTitle title = {
                                item.title
                            }
                            subtitle = {
                                item.author
                            } />}>
                                <img src={item.urlToImage} style={style.img}/>
                            </CardMedia>
                            <CardTitle/>
                            <CardText>
                                {item.description}
                            </CardText>
                            <CardActions style={style.cardaction}>
                            <SaveComponent toSaveData={item} tocheck={this.tosnacksave.bind(this)}  ></SaveComponent>
                            </CardActions>
                        </Card>
                    </div>
                )
            });
        } else {
            return (
                <p></p>
            )
        }
        return (
            <div style={style.result}>{result}</div>

        );
    }
}
