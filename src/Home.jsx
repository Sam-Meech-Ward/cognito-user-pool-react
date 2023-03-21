import { useContext } from "react";
import { AuthContext } from "./Auth/AuthContext";

function Home() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <>
          <p>Welcome! You are logged in.</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in to access more features.</p>
      )}
    </div>
  );
}

export default Home;