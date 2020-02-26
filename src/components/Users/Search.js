import React, { Component } from "react";

class Search extends Component {

  state = {
    text: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  
  onSubmit = e => {
      e.preventDefault();
      this.props.searchUser(this.state.text)
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
              backgroundColor: "red",
              display: "block",
              margin: "auto"
            }}
          />
        </form>
      </div>
    );
  }
}

export default Search;
