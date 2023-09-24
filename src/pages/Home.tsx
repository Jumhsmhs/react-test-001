import React from "react";
import { useNavigate } from "react-router-dom";

function Home({ login }: any) {
  const navigate = useNavigate();
  return (
    <div>
      <p>This is the Home Page</p>
      <button
        onClick={() => {
          login();
          navigate("/dashboard");
        }}
      >
        Login
      </button>
      {/* {location.state}  */}
      {/* state --> ถูกส่งมาจากหน้า contact */}
    </div>
  );
}

export default Home;
