import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import About from './about'
import Login from './RegisterLogin'
import Register from "./RegisterLogin/register"
import uploadPage from "./RegisterLogin/uploadPage/uploadPage"
import CKEditor from "ckeditor4-react";
import Subject from "./Subject";
import readPage from "./RegisterLogin/uploadPage/readPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content = 1;
    this.state = {
      subject: { title: "WEB", sub: "World Wide Web!" },
      selected_content_id: 1,
      contents: [{ id: 1, title: "0813", desc: "신프신프" }],
    };
  }
  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }

  getContent() {
    var _title,
      _desc,
      _article = null;
    // if (this.state.mode === "welcome") {
    //   _title = this.state.welcome.title;
    //   _desc = this.state.welcome.desc;
    //   _article = <readPage title={_title} desc={_desc}></readPage>;
    // } else if (this.state.mode === "read") {
    //   var _content = this.getReadContent();
    //   _article = (
    //     <readPage title={_content.title} desc={_content.desc}></readPage>
    //   );
    // } else if (this.state.mode === "create") {
      _article = (
        <uploadPage
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            var _contents = Array.from(this.state.contents);
            _contents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        ></uploadPage>
      );
    // }
    return _article;
  }
  // state={
  //   boards:[
  //     {
  //       num:1,
  //       writer:"",
  //       title:""
  //     }
  //   ]
  // }
  render() {
    // const{boards } = this.state;
    // const list = boards.map(function(row){
    //   return row.num + row.writer
    // })
    var _title,
      _desc,
      _article = null;
    _article = <uploadPage></uploadPage>;
    return (
      <div>
        ONEUL ILGI
        {/* <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        {this.getContent()}
        </div> */}
        
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
