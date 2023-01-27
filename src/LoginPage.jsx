import { useState } from "react";
import { Navigate } from "react-router-dom";
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

  if (auth.user) {
    return <Navigate to={'/profile'}/>
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