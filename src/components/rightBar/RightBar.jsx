import React from "react";
import classStyle from "./RightBar.module.scss";

import Me from "../../assets/me.JPG";

function RightBar() {
  return (
    <div className={classStyle.rightBar}>
      <div className={classStyle.container}>
        <div className={classStyle.item}>
          <span>Suggeriti per te</span>
          <div className={classStyle.user}>
            <div className={classStyle.userInfo}>
              <img src={Me} alt="" />
              <span>Matteo Grigoletto</span>
            </div>
            <div className={classStyle.buttons}>
              <button>Segui</button>
              <button>Non seguire</button>
            </div>
          </div>
          <div className={classStyle.user}>
            <div className={classStyle.userInfo}>
              <img src={Me} alt="" />
              <span>Matteo Grigoletto</span>
            </div>
            <div className={classStyle.buttons}>
              <button>Segui</button>
              <button>Non seguire</button>
            </div>
          </div>
        </div>
        <div className={classStyle.item}>
          <span>Ultime attivita'</span>
          <div className={classStyle.user}>
            <div className={classStyle.userInfo}>
              <img src={Me} alt="" />
              <p>
                <span>Matteo Grigoletto</span> ciao
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className={classStyle.user}>
            <div className={classStyle.userInfo}>
              <img src={Me} alt="" />
              <p>
                <span>Matteo Grigoletto</span> ciao
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className={classStyle.user}>
            <div className={classStyle.userInfo}>
              <img src={Me} alt="" />
              <p>
                <span>Matteo Grigoletto</span> ciao
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
          <div className={classStyle.user}>
            <div className={classStyle.userInfo}>
              <img src={Me} alt="" />
              <p>
                <span>Matteo Grigoletto</span> ciao
              </p>
            </div>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className={classStyle.item}>
          <span>Amici online</span>
          <div className={classStyle.user}>
            <div className={classStyle.userInfo}>
              <img src={Me} alt="" />
              <div className={classStyle.online} />
              <span>Matteo Grigoletto</span>
            </div>
          </div>
          <div className={classStyle.user}>
            <div className={classStyle.userInfo}>
              <img src={Me} alt="" />
              <div className={classStyle.online} />
              <span>Matteo Grigoletto</span>
            </div>
          </div>
          <div className={classStyle.user}>
            <div className={classStyle.userInfo}>
              <img src={Me} alt="" />
              <div className={classStyle.online} />
              <span>Matteo Grigoletto</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
