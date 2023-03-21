import { useContext } from "react";
import { AuthContext } from "./Auth/AuthContext";

function Profile() {
  const { token } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile</h1>
      <p>Your secret token is: {token}</p>
    </div>
  );
}

export default Profile;