import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Buttons from "./Buttons";

const Header = (props) => {
  const [hideHamburgerIcon, setHideHamburgerIcon] = useState("");
  const [showCrossIcon, setsShowCrossIcon] = useState("");

  const showMobileNav = () => {
    setHideHamburgerIcon(true);
    setsShowCrossIcon(true);
  };

  function closeNav() {
    setHideHamburgerIcon(false);
    setsShowCrossIcon(false);
  }

  return (
    <div className="header">
      <div className="header__inner">
        <h1 className="header__logo">
          <a href="./">Flixnet DB</a>
        </h1>
        <Buttons setUsersChoice={props.setUsersChoice} hideHamburgerIcon={hideHamburgerIcon} />
        <FontAwesomeIcon icon={faBars} onClick={showMobileNav} className={hideHamburgerIcon ? "fa-bars--invisible" : ""} />
        <FontAwesomeIcon icon={faTimes} onClick={closeNav} className={showCrossIcon ? "fa-times--visible" : ""} />
      </div>
    </div>
  );
};

export default Header;
