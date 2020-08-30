import React from 'react';
import {Route, Switch} from "react-router-dom";
import About from './about'
import Login from './RegisterLogin'
import Register from "./RegisterLogin/register"
import uploadPage from "./RegisterLogin/uploadPage/uploadPage"


function App() {
  return (
    <div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <Route path="/uploadPage" component={uploadPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
