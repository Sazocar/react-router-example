import { useState } from "react";
import { useAuth } from "./auth";

const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = useState('');

  const onChangeValue = (event) => {
    setUsername(event.target.value);
  }

  const login = (e) => {
    e.preventDefault();
    auth.login({username});
  }

  return (
    <>
      <p>LoginPage</p>

      <form onSubmit={login}>
        <label>Username</label>
        <input type="text" value={username} onChange={onChangeValue}/>
        
        <button type="submit">Login</button>
      </form>

    </>
  );
}

export { LoginPage };