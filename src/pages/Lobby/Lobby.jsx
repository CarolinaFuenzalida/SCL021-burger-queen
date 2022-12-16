import React from "react";
import { Link } from "react-router-dom";
import "./Lobby.css";


export const Lobby = () => {
  return (
    <div  className="divLobby">
        <picture className="Logo"> 
        <img  src="src\img\SanrioCoffeeLogo1.png" alt="Logo de Cafeteria, contiene personaje de Sanrio" />
        </picture>
        <Link to="/Waiter" className="buttonRouter"><button className="buttonL">Mesero</button></Link>
         <Link to="/Kitchen" className="buttonRouter"><button className="buttonL">Cocina</button></Link>
    </div>
  );
};


