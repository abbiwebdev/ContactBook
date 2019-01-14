import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { Provider } from './Context';
import Contacts from './Contacts';
import Form from './Form';
import About from './About';
import Notfound from './Notfound';
import Test from './Test';
import Editcontact from './EditContact';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
      <div className="App">
       <Header brand="cL" />
         <div className="container">
           <Switch>
              <Route exact path="/" component={Form} />
              <Route exact path="/about" component={About} />
              <Route exact path="/Test" component={Test} />
              <Route exact path="/contacts/add" component={Contacts} />
              <Route exact path="/contacts/add/edit/:id" component={Editcontact} />
              <Route component={Notfound} />
           </Switch>
         </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
