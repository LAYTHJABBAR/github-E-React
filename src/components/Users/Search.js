import React, { Component } from "react";

class Search extends Component {

  state = {
    text: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  
  onSubmit = e => {
      e.preventDefault();
      if (this.state.text === '') {
          this.props.setAlert("Please Enter a Name on the block" , 'danger') 
      } else {
          this.props.searchUser(this.state.text)
          this.setState({text: ''})
      }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search User"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            name="Submit"
            value="Search"
            className="btn  btn-block"
            style={{
              width: "90px",
              backgroundColor: "green",
              display: "block",
              margin: "auto"
            }}
          />
        
        </form>
        <br></br>
        {this.props.showClear &&   <button className="btn btn-block"    style={{
              width: "90px",
              backgroundColor: "red",
              display: "block",
              margin: "auto"
            }} onClick={this.props.clearUser}>Clear</button>}
      </div>
    );
  }
}

export default Search;
