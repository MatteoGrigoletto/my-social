import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>
            New <br /> Social
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            tempore fugiat commodi numquam illum ipsum odio deleniti nostrum
            similique, mollitia quos pariatur iste? Rem temporibus accusamus
            ipsa, libero ea reiciendis.
          </p>
          <span>Non hai un'account?</span>
          <Link to="/register">
            <button>Registrati</button>
          </Link>
        </div>
        <div className="right">
          <h1>Accedi</h1>
          <form action="">
            <input type="text" placeholder="Inserisci il tuo nome" />
            <input type="password" placeholder="Inserisci la tua password" />
            <button>Accedi</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
