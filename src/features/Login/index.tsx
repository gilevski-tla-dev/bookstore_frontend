import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../entites/session/authSlice";

import styles from "./login.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    // Here process the form data
    console.log(username, password);
    dispatch(login(username));
  };
  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <h2>Авторизация</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
        placeholder="Введите имя пользователя"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        placeholder="Введите пароль"
      />
      <button type="submit">Войти</button>
    </form>
  );
};

export default Login;
