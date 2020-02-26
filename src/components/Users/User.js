import React, { Fragment, Component } from "react";
import Spinner from "../layOut/Spinner.js";
import Repos from "../pages/Repos/Repos.js";
import { Link } from "react-router-dom";

class User extends Component {
  UNSAFE_componentWillMount() {
    console.log(this.props.match.params.login);
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gist,
      company,
      hireable
    } = this.props.user;

    const { Loading } = this.props;

    if (Loading) {
      return <Spinner />;
    } else {
      return (
        <Fragment>
          <Link to="/" className="btn btn-light">
            Back to Home Page
          </Link>
          Hirable:{" "}
          {hireable ? (
            <i className="fas fa-check tex-success" />
          ) : (
            <i className="fas fa-times-circle text-dange" />
          )}
          <div className="card grid-2">
            <div className="all-center">
              <img
                src={avatar_url}
                className="round-img"
                alt=""
                style={{ width: "150px" }}
              />
              <h1>{name}</h1>
              {location && <p>location: {location}</p>}
            </div>
            <div>
              {bio && (
                <Fragment>
                  <h2>Bio</h2>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} className="btn btn-dark my-1">
                Visit GitHub Profile
              </a>
              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <strong>UserName: </strong>
                      {login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company: </strong>
                      {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong>
                      {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="card text-center">
            <div className="badge badge-primary">Follower: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-danger">
              Public Repos: {public_repos}
            </div>
            <div className="badge badge-dark">Public Gist: {public_gist}</div>
          </div>
          <Repos repos={this.props.repos} />
        </Fragment>
      );
    }
  }
}

export default User;
