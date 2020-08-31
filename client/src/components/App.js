import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import About from './about'
import Login from './RegisterLogin'
import Register from "./RegisterLogin/register"
import uploadPage from "./RegisterLogin/uploadPage/uploadPage"


class App extends Component {
  state={
    boards:[
      {
        num:1,
        writer:"",
        title:""
      }
    ]
  }
  render(){
    const{boards } = this.state;
    const list = boards.map(function(row){
      return row.num + row.writer
    })
    return (
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/uploadPage" component={uploadPage} />
        </Switch>
      </div>
    );
  }
}





export default App;
