import React from "react";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Lobby">Lobby</Link>
        </li>
        <li>
          <Link to="/Waiter">Waiter</Link>
        </li>
        <li>
          <Link to="/Kitchen">Kitchen</Link>
        </li>
      </ul>
    </div>
  );
};
