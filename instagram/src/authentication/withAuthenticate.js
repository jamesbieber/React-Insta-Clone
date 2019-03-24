import React from "react";
import "../app.css";

import Login from "../components/Login/Login";

const withAuthenticate = PostPage => Login =>
  class withAuthenticate extends React.Component {
    state = {
      loggedIn: false
    };

    componentDidMount() {
      if (localStorage.getItem("username") === null) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn === true) return <PostPage />;
      return <Login />;
    }
  };

export default withAuthenticate;
