import React, { useContext } from "react";

import "./LeftBar.scss";

import Me from "../../assets/me.JPG";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";

function LeftBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        {/* first menu */}
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Amici</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Gruppi</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Negozio</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Guarda</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Ricordi</span>
          </div>
        </div>
        <hr />
        {/* second menu */}
        <div className="menu">
          <span>Programmi</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Eventi</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Giochi</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Galleria</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Video</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messaggi</span>
          </div>
        </div>
        <hr />
        {/* third menu */}
        <div className="menu">
          <span>Altro</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fondatori</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorial</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Corsi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
