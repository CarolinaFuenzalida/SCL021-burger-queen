import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FilterMenu } from "../../components/FilterMenu";
import "./Waiter.css";
import { Context } from "../../components/Context";
import {  Order} from "../../components/Order";

export const Waiter = () => { 

  const globalContext = useContext(Context);
  const sendOrder = () => {
    if (globalContext.client === "" || globalContext.table === "") {
      alert("Creo que olvidaste escribir el nombre o mesa del cliente");
    } 
     else {
      confirm(true).then((result) => {
        if (result =  true) {
          alert("Enviado");
          globalContext.resumeOrder();
          globalContext.setProducts([]);
          globalContext.changeClient("");
          globalContext.changeTable("");
        }
      });
    }
  };

  const onChange = (e) => {
    if (e.target.name === "client") {
      globalContext.changeClient(e.target.value);
    } else if (e.target.name === "table") {
      globalContext.changeTable(e.target.value);
    }
  };

 return ( 
    <div className="mainDivWaiter">
      <header className="Top">
      <button className="buttonRouter" id="backWaiter"> {" "}<Link to="/">Back</Link>{" "}</button>
      <img src="src\img\SanrioCoffeeLogo1.png"></img>
      <button className="buttonRouter" id="backWaiter"> {" "}<Link to="/Kitchen">Cocina</Link>{" "}</button> 
      </header>
      <div className="DivLeft"> 
      <div className="OptionTables"> 
      <input className="inputCostumer" id="inputName" placeholder="Ingresa Nombre del cliente" name="client"
                onChange={onChange}></input>
      <input className="inputCostumer" id="inputTable" placeholder="N° de Mesa"   name="table"
                onChange={onChange}></input>
      </div>
      <FilterMenu/>
      </div>
        <div className="DivRight"> 
        <main className="DivProducts">
        {globalContext.products.length >= 1 ? (
          
          <section className="DivProducts">
            <div className="ShowClientNameTable"> 
            <p>Cliente:  {globalContext.client} </p>
            <p>Mesa:  {globalContext.table} </p>    </div>
            
            {globalContext.products.map((item) => (
              <section key={item.id} className ="ProductsToOrder">
                <div className="ProductName">
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>
                <div className="AddOrRemove">
                  <button className="EditButton"
                    onClick={() => globalContext.onRemove(item)}
                  >
                    -
                  </button>
                  <p>{item.qty}</p>
                  <button className="EditButton"
                    onClick={() => globalContext.onAdd(item)}
                  >
                    +
                  </button>
                </div>
                <button  className="EditButton"
                  onClick={() => globalContext.removeProducts(item)}
                >
                  x
                </button>
              </section>
            ))}
          </section>
        ) : (
          <div className="BeforeOrder">
            <h1 > Selecciona algo del Menú </h1>
            <img  src="src\img\MyMelodyOops.png" ></img>
          </div>
        )} 
       
      </main> 
      <div className="TotalAndOrder"> 
      <section>
      
       
          <p>Total: $ {globalContext.itemsPrice} </p>
       
    
    </section>
      <button className="buttonOrder" onClick={() => sendOrder()}>
              Enviar Pedido
            </button>
            </div>
         </div>
    
    </div>
  );
};