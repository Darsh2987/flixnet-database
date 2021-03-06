import React from "react";
import Buttons from "./Buttons";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__inner">
        <h1 className="header__logo">
          <a href="/">Flixnet DB</a>
        </h1>
        <Buttons setUsersChoice={props.setUsersChoice} />
      </div>
    </div>
  );
};

export default Header;
