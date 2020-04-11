import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from "react-toastify";
import { Route, Redirect, Switch } from "react-router-dom";
// import { storeUser } from "./service/dataService.js";
import { connect } from "react-redux";
import * as actionTypes from './store/actions/index';
import Storage from "./service/Storage.js";

import NotFound from './component/not-found/NotFound';
import ProtectedRoute from './component/ProtectedRoute.jsx';
import Dashboard from './component/dashboard/Dashboard.jsx';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const serverData = new Storage();
const tempArr = [{ name: 'Alabi', age: 30, isOnline: true }];
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
    this.child = React.createRef();
  }



  render() {
    return (
      <div data-test="appComponent">
        <ToastContainer />
        <Switch>
          <Route path="/not-found" component={NotFound} />
          <Route path="/" component={Dashboard} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUser: (val) => dispatch({
      type: actionTypes.LOGIN_USER
    })
  }
}



App.propTypes = {
  onLoginUser: PropTypes.func,
};

App.defaultProps = {
  user: {},
};

export default connect(null, mapDispatchToProps)(App);


