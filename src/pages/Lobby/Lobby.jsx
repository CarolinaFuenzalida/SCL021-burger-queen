import React from "react";
import { Link } from "react-router-dom";
import "./Lobby.css";

export const Lobby = () => {
  return (
    <div  className="divLobby">
        <picture className="Logo"> 
        <img  src="src\img\SanrioCoffeeLogo1.png" alt="Logo de Cafeteria, contiene personaje de Sanrio" />
        </picture>
        <button className="buttonRouter"> 
        <Link to="/Waiter">Mesero</Link> </button>
        <button className="buttonRouter"> <Link to="/Kitchen">Cocina</Link> </button>
    </div>
  );
};


