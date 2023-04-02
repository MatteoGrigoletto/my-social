import React, { useContext } from "react";
import "./NavBar.scss";

import { Link } from "react-router-dom";
import image from "../../assets/me.JPG";
// icon
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { DarkModeContext } from "../../context/darkModeContext";

function NavBar() {
  const { toggle } = useContext(DarkModeContext);

  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>New Social</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon onClick={toggle} />
        <AppsOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Cerca" />
        </div>
      </div>
      <div className="right">
        <AccountCircleOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsActiveOutlinedIcon />
        <div className="user">
          <img src={image} alt="" />
          <span>Matteo Grigoletto</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
