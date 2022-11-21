import { db } from "../firebase"
import React, { useState, useEffect, useContext } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import "../pages/Kitchen/Kitchen.css"

export const KitchenOrders = () => {

   const [orders, setOrders] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "Pedidos"), orderBy("date", "asc")),
      (snapshot) => {
        const products = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setOrders(products);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []); 


 return orders.length > 0 ? ( (
        orders.map((order) => (
         <div key={order.id} className="mainOrder">
        <header className="orderHeader"> 
        <p> Cliente : {order.client} </p>
        <p> Mesa :  {order.table} </p>
        </header>
        {order.order.map((item) => (
            <div key={item.id} className="orderItems">
            <h1>
              {item.qty}
            </h1>
            <div className="itemName">
            {item.name}
            </div>
            </div>
        ) )}
        <button className="buttonOrders" id="btnChangeStatus"> Preparar </button>
        </div>
        )))) : (
            <section className="">
            <h1>No hay pedidos pendientes c: </h1>
          </section>

        )

        
}; 