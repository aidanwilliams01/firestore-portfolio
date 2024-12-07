import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <h1>Portfolio</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign-in">Admin Signin</Link>
        </li>
      </ul>
    </React.Fragment>
    
  );
}

export default Header;