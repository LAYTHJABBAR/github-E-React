import React, {Component} from 'react';
import NavBar from './components/layOut/NavBar'
import './App.css';
import Users from "./components/Users/User.js"
class App extends Component {
  render() {

    return (
      <div className="App">
        <NavBar title = 'GitHub Engine'/>
         <div className="container" >

        <Users />
         </div>

         
       
      </div>
    );
  }
}

export default App;
