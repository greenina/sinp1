import React, {Component } from 'react'
import CKEditor from 'ckeditor4-react'
import { Button, Form } from "react-bootstrap";
// import axios from 'axios';
// import $ from 'jquery'
// import {} from 'jquery.cookie'
// axios.defaults.withCredentials = true
// const headers = {withCredentials:true}
// function uploadPage(){
//     return(
//         <div>

//         </div>
//     )
// }

class uploadPage extends Component {
  state = {
    data: "",
    title: "",
  };
  onEditorChange = (evt) => {
    this.setState({
      data: evt.editor.getData(),
    });
  };
  //   componentDidMount() {
  //     if (this.props.location.query !== undefined) {
  //       this.title.value = this.props.location.query.title;
  //     }
  //   }

  //   componentWillMount() {
  //     if (this.props.location.query !== undefined) {
  //       this.setState({
  //         data: this.props.location.query.content,
  //       });
  //     }
  //   }
  writeBoard = () => {
    // let url;
    // let send_param;

    const title = this.title.value;
    const content = this.state.data;
    if (title === undefined || title === "") {
      alert("글 제목을 입력 해주세요.");
      title.focus();
      return;
    } else if (content === undefined || content === "") {
      alert("글 내용을 입력 해주세요.");
      content.focus();
    }
    // if (content === "") {
    //   alert("글을 입력하세요");
    //   content.focus();
    // }
    // url = "http://localhost:3000/";
    // send_param = {
    //   headers,
    //   _id: $.cookie("login_id"),
    //   title: title,
    //   content: content,
    // };
  };

  render() {
    return (
      <div>
        <h2>오늘의 기록</h2>
        <Form.Control 
        type="text"
        placeholder="날짜 및 제목"
        ref={ref => (this.title = ref)}
         />
        <CKEditor
          data={this.state.data}
          onChange={this.onEditorChange}
        ></CKEditor>
        <Button onClick={this.writeBoard}>저장</Button>
      </div>
    );
  }
}


export default uploadPage