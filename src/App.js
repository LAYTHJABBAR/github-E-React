import React, { Component } from "react";
import NavBar from "./components/layOut/NavBar";
import "./App.css";
import Users from "./components/Users/User.js";
import axios from "axios";
import Search from "./components/Users/Search.js";
import Alert from './components/layOut/Alert.js'



class App extends Component {
  state = {
    users: [],
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
    this.setState({ Loading:true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&clinet_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, Loading: false });
  };

  // clear Search user 

  clearUser = () => this.setState({users: [], Loading: false, alert: null})

  setAlert = (msg, type) => {
 this.setState({alert: {msg: msg , type: type}})
  }

  render() {
    return (
      <div className="App">
        <NavBar title="GitHub Engine" />
        <Alert alert={this.state.alert} />
        <Search searchUser={this.searchUser} clearUser={this.clearUser} showClear={(this.state.users.length > 0 || this.state.alert !== null)? true : false} setAlert={this.setAlert}/>
        <div className="container">
          <Users users={this.state.users} Loading={this.state.Loading} />
        </div>
      </div>
    );
  }
}

export default App;
