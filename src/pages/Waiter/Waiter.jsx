import React, { useState, useContext } from "react";
import { FilterMenu } from "../../components/FilterMenu";
import "./Waiter.css";
import { Context } from "../../components/Context";
import Swal from "sweetalert2";
import { NavBar } from "../../components/NavBar";
import { BiTrash, BiPlus, BiMinus, BiArrowBack} from "react-icons/bi";



export const Waiter = () => { 

  const globalContext = useContext(Context);
  
   const sendOrder = () => {
    if (globalContext.client === "" || globalContext.table === "") {
      Swal.fire({
        title: "Ups...",
        text: "Creo que olvidaste escribir el nombre o mesa del cliente",
        icon: "error",
      });
    } else if (globalContext.products.length === 0) {
      Swal.fire({
        title: "Espera un momento!",
        text: "No has ingresado productos al pedido",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "¿Deseas confirmar el pedido?",
        text: "Si tienes dudas, consúltalo con el cliente",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Enviado", "El pedido ha sido enviado a Cocina", "success");
          globalContext.setProducts([]);
          globalContext.setClient("");
          globalContext.setTable("");
          console.log(globalContext.table, globalContext.client, globalContext.products, "pending", globalContext.itemsPrice)
          globalContext.newOrder(globalContext.table, globalContext.client, globalContext.products, "pending", globalContext.itemsPrice)
          
        }
      });
    }
  };

  const onChange = (e) => {
    if (e.target.name === "client") {
      globalContext.setClient(e.target.value);
    } else if (e.target.name === "table") {
      globalContext.setTable(e.target.value);
    }
  };

 return ( 
    <div className="mainDivWaiter">
      <NavBar/>
      <div className="DivLeft"> 
      <div className="OptionTables"> 
      <input className="inputCostumer" id="inputName" placeholder="Ingresa Nombre del cliente" name="client"
       onChange={onChange}></input>
      <input className="inputCostumer" id="inputTable" placeholder="N° de Mesa" name="table"
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
                  > <BiMinus/>
                  </button>
                  <p>{item.qty}</p>
                  <button className="EditButton"
                    onClick={() => globalContext.onAdd(item)}
                  > <BiPlus/>
                  </button>
                </div>
                <button className="EditButton"  
                  onClick={() => globalContext.removeProducts(item)}
                  > <BiTrash />
                </button>
              </section>
            ))}
          </section>
        ) : (
          <div className="BeforeOrder">
            <h1 > Selecciona algo del Menú </h1>
            <img  src="https://cdn.discordapp.com/attachments/1037900045095284787/1065335682614177893/GudetamaChef1.png" ></img>
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
