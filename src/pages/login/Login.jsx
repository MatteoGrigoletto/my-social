import React from "react";
import classStyle from "./Login.module.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={classStyle.login}>
      <div className={classStyle.card}>
        <div className={classStyle.left}>
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
        <div className={classStyle.right}>
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
