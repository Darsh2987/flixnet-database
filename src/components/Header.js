import React from "react";
import Buttons from "./Buttons";

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="header__logo">Flixnet</h1>
      <Buttons setUsersChoice={props.setUsersChoice} />
    </div>
  );
};

export default Header;
