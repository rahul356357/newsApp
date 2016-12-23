import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const style = {
  margin: 12,
};
export default class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    onSearch() {
        var url = this.refs.data.getInputNode().value.toLocaleLowerCase();
      //    console.log(url);
        this.props.onSearch(url);
    }



    render()
    {
      const style=
      {
        div:{
        marginLeft:"35%",
        paddingTop:'10px'
      },
      button:{
        "background-color":"chocolate"
      },
      underlineStyle:{
        borderColor:'chocolate'
      }
      }
        return (
            <div style={style.div}>
         <TextField    underlineFocusStyle={style.underlineStyle} id="searchdata" ref='data' />
      <RaisedButton label="Search" primary={true} buttonStyle={style.button} onClick={this.onSearch.bind(this)} />
            </div>
        )
    }
}
