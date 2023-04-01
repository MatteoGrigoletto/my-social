import React from "react";
import "./Register.scss";

import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>
            New <br /> World
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            tempore fugiat commodi numquam illum ipsum odio deleniti nostrum
            similique, mollitia quos pariatur iste? Rem temporibus accusamus
            ipsa, libero ea reiciendis.
          </p>
          <span>Possiedi un account?</span>
          <Link to="/">
            <button>Accedi</button>
          </Link>
        </div>
        <div className="right">
          <h1>Registrati</h1>
          <form action="">
            <input type="text" placeholder="Inserisci il tuo nome" />
            <input type="text" placeholder="Inserisci il tuo cogome" />
            <input type="email" placeholder="Inserisci la tua email" />
            <input type="password" placeholder="Inserisci la tua password" />
            <button>Registrati</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
