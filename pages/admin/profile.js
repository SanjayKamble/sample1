import axios from "axios";
import { useEffect, useState } from "react";

function profile() {
  const [user, setUser] = useState({});

  async function fetchUser() {
    const tokenStr = "8|pEraOMwc7jD04D3jG4KcZi3uZGeRPYEhGUIbAL7v";
    //{"message":"success","token":"8|pEraOMwc7jD04D3jG4KcZi3uZGeRPYEhGUIbAL7v"}
    axios
      .get("http://localhost:8000/api/user", {
        headers: { Authorization: `Bearer ${tokenStr}` },
      })
      .then((response) => {
        setUser(response.data);
        console.log(user);
      });
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <h1>Profile</h1>
    </>
  );
}

export default profile;
