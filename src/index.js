import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Welcome from "./Welcome";
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router ,Route ,Switch} from "react-router-dom";
import Private from "./Private"
import AuthProvider from "./Auth/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <AuthProvider>

    <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Private path="/like" component={App} />
      </Switch>
    </Router>
    </AuthProvider>
       
  </React.StrictMode>,
  document.getElementById('root')
);

