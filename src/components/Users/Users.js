import React from "react";
import UserItem from "./UsersItem";
import Spinner from "../layOut/Spinner.js";
import PropTypes from "prop-types";

const Users = ({ users, Loading }) => {
  if (Loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
Users.proType = {
  users: PropTypes.array.isRequired,
  Loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
