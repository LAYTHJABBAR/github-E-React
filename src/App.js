import React, { Component } from "react";
import NavBar from "./components/layOut/NavBar";
import "./App.css";
import Users from "./components/Users/User.js";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    Loading: false
  };

  async UNSAFE_componentWillMount() {
    this.setState({ Loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ users: res.data, Loading: true });
  }
  render() {
    return (
      <div className="App">
        <NavBar title="GitHub Engine" />
        <div className="container">
          <Users users={this.state.users} Loading={this.state.Loading} />
        </div>
      </div>
    );
  }
}

export default App;
