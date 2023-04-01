import React from "react";
import "./RightBar.scss";

import Me from "../../assets/me.JPG";

function RightBar() {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggeriti per te</span>
          <div className="user">
            <div className="userInfo">
              <img src={Me} alt="" />
              <span>Matteo Grigoletto</span>
            </div>
            <div className="buttons">
              <button>Segui</button>
              <button>Non seguire</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Me} alt="" />
              <span>Matteo Grigoletto</span>
            </div>
            <div className="buttons">
              <button>Segui</button>
              <button>Non seguire</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Ultime attivita'</span>
          <div className="user">
            <div className="userInfo">
              <img src={Me} alt="" />
              <p>
                <span>Matteo Grigoletto</span> ciao
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Me} alt="" />
              <p>
                <span>Matteo Grigoletto</span> ciao
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Me} alt="" />
              <p>
                <span>Matteo Grigoletto</span> ciao
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Me} alt="" />
              <p>
                <span>Matteo Grigoletto</span> ciao
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="item">
          <span>Amici online</span>
          <div className="user">
            <div className="userInfo">
              <img src={Me} alt="" />
              <div className="online" />
              <span>Matteo Grigoletto</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Me} alt="" />
              <div className="online" />
              <span>Matteo Grigoletto</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Me} alt="" />
              <div className="online" />
              <span>Matteo Grigoletto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
