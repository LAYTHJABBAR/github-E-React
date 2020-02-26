import React, { Component } from "react";
import NavBar from "./components/layOut/NavBar";
import "./App.css";
import Users from "./components/Users/User.js";
import axios from "axios";
import Search from "./components/Users/Search.js";
class App extends Component {
  state = {
    users: [],
    Loading: false
  };

  async UNSAFE_componentWillMount() {
    this.setState({ Loading: false });
    const res = await axios.get(
      `https://api.github.com/users?${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, Loading: true });
  }

  searchUser = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&clinet_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, Loading: true });
  };

  render() {
    return (
      <div className="App">
        <NavBar title="GitHub Engine" />
        <Search searchUser={this.searchUser} />
        <div className="container">
          <Users users={this.state.users} Loading={this.state.Loading} />
        </div>
      </div>
    );
  }
}

export default App;
