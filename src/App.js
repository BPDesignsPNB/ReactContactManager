import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header
              titulo="Contact Manager"
            />
            <div className="container">
                <Switch>
                  <Route exact path="/contacts/add" component={AddContact}/>
                  <Route exact path="/contacts/edit/:id" component={EditContact}/>
                  <Route exact path="/" component={Contacts}/>
                  <Route exact path="/about" component={About}/>
                  <Route component={NotFound}/>
                </Switch>
            </div>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
