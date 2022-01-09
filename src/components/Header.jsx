import React from "react";
import "./header.css";
import Person from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/iconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  const handleClick = (e) => {
    window.location.replace("/profile");
    
  };
  return (
    <div className="header">
      <IconButton onClick={handleClick}>
        <Person fontSize="large" className="headerIcon" />
      </IconButton>
      <img
        src="https://cdn-icons-png.flaticon.com/512/732/732251.png"
        alt=""
        className="headerLogo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="headerIcon" />
      </IconButton>
    </div>
  );
}

export default Header;
