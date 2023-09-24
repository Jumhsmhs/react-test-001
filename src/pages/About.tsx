import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <p>This is the About Page</p>
      <button onClick={() => navigate("/" , {state: "From the About Page"})}>Redirect</button>
    </div>
  );
}

export default About;
