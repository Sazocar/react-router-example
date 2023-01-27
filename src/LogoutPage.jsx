import { useAuth } from "./auth";

const LogoutPage = () => {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  }

  return (
    <>
      <p>LogoutPage</p>

      <form onSubmit={logout}>
        <label>Do you want to logout?</label>

        <button type="submit">Logout</button>
      </form>
    </>
  );
}

export { LogoutPage };
