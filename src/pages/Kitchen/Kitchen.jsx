import { NavBar } from "../../components/NavBar";
import { KitchenOrders } from "../../components/KitchenOrders";
import React, { useState, useEffect, useContext } from "react";
import "./Kitchen.css";

export const Kitchen = () => {

  return (
    <div className="mainKitchen">
      <NavBar></NavBar>
      <div className="typeOfOrder">
        <button className="buttonOrders" id="AllOrders">
          Pedidos
        </button>
        <button className="buttonOrders" id="PendingOrders">
          Pedidos Pendientes
        </button>
        <button className="buttonOrders" id="CookingOrders">
          Pedidos en Preparación
        </button>
      </div>
      <div className="displayOrders">
        <KitchenOrders />
      </div>
    </div>
  );
};
