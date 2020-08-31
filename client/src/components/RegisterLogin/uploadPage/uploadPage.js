import React, {Component } from 'react'
import CKEditor from 'ckeditor4-react'
import { Button, Form } from "react-bootstrap";


class uploadPage extends Component {

  render() {
    return (
      <div>
        <article>
          <h2>오늘 기록</h2>
          <form
            action="/create_process"
            method="post"
            onSubmit={function (e) {
              e.preventDefault();
              this.props.onSubmit(e.target.title.value, e.target.desc.value);
            }.bind(this)}
          >
            <p>
              <input type="text" name="title" placeholder="title"></input>
            </p>
            <p>
              {/* <CKEditor
                data={this.state.data}

                onChange={this.onEditorChange}
              ></CKEditor> */}
              <textarea name="desc" placeholder="description"></textarea>
              {/* <textarea name="desc" placeholder="description"></textarea> */}
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>

        {/* <Button onClick={this.writeBoard}>저장</Button> */}
      </div>
    );
  }
}


export default uploadPage