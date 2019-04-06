import React from "react";
import "./searchbar.css";
import styled from "styled-components";

import { Camera, Heart, User, Compass } from "react-feather";

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
  background-color: #ffffff;
`;

const Title = styled.div`
  width: 30%;
  display: flex;
  align-items: center;

  img {
    border-left: 1px solid black;
    padding-left: 1.5%;
    margin-top: 2%;
    margin-bottom: 1%;
    width: 37%;
  }

  .icons {
    width: 15%;
    height: 40px;
  }
`;

const Search = styled.div`
  input {
    height: 22px;
    width: 220px;
    text-align: center;
    background-color: #fafafa;
    color: #cacacc;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
  }
`;

const Symbols = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;

  .icons {
    cursor: pointer;
    width: 15%;
    height: 40px;
  }
`;

const SearchBar = props => {
  return (
    <TopBar>
      <Title>
        <Camera className="icons" />
        <img src="instagram.jpg" />
      </Title>

      <Search>
        <input
          type="text"
          placeholder="Search..."
          onChange={props.searchHandler}
        />
      </Search>

      <Symbols>
        <Compass className="icons" />
        <Heart className="icons" />
        <User className="icons" />
      </Symbols>
    </TopBar>
  );
};

export default SearchBar;
