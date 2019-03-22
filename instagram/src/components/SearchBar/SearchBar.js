import React from "react";
import "./searchbar.css";

import { Camera, Heart, User, Compass } from "react-feather";

const SearchBar = props => {
  return (
    <div className="top-bar">
      <div className="title">
        <Camera className="icons" />
        <img src="instagram.jpg" />
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={props.searchHandler}
        />
      </div>

      <div className="symbols">
        <Compass className="icons" />
        <Heart className="icons" />
        <User className="icons" />
      </div>
    </div>
  );
};

export default SearchBar;
