import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layOut/NavBar";
import "./App.css";
import Users from "./components/Users/Users.js";
import axios from "axios";
import Search from "./components/Users/Search.js";
import Alert from "./components/layOut/Alert.js";
import About from "./components/pages/About.js";
import User from "./components/Users/User.js";

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    Loading: false,
    alert: null
  };

  // async UNSAFE_componentWillMount() {
  //   this.setState({ Loading: false });
  //   const res = await axios.get(
  //     `https://api.github.com/users?${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, Loading: true });
  // }
  // search user from github
  searchUser = async text => {
    this.setState({ Loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&clinet_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, Loading: false });
  };

  // clear Search user

  clearUser = () => this.setState({ users: [], Loading: false, alert: null });

  // set Alert when trying to search without entring any data
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  //  get user function

  getUser = async userName => {
    this.setState({ Loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&clinet_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data, "lets see");
    this.setState({ user: res.data, Loading: false });
  };

  // get repos for user
  getUserRepos = async userName => {
    this.setState({ Loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=6&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&clinet_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data, "lets see");
    this.setState({ repos: res.data, Loading: false });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar title="GitHub Engine" />
          <Alert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search
                    searchUser={this.searchUser}
                    clearUser={this.clearUser}
                    showClear={
                      this.state.users.length > 0 || this.state.alert !== null
                        ? true
                        : false
                    }
                    setAlert={this.setAlert}
                  />
                  <div className="container">
                    <Users
                      users={this.state.users}
                      Loading={this.state.Loading}
                    />
                  </div>
                </Fragment>
              )}
            ></Route>
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                  getUser={this.getUser}
                  repos={this.state.repos}
                  getUserRepos={this.getUserRepos}
                  user={this.state.user}
                  Loading={this.state.Loading}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
