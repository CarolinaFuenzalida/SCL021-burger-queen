import React, { useState, useContext } from "react";
import  AllMenu  from "../menu.json";
import "../pages/Waiter/Waiter.css";
import { Provider, Context} from "./Context";

export const FilterMenu  = () => { 

// Guardo Menú en una variable
const dataMenu = AllMenu.menu;
// Traer Global Context para extraer funciones (onAdd)
const globalContext = useContext(Context);
// Empieza por defecto en desayuno 
const Breakfast = dataMenu.filter((element) => element.type === "breakfast");
// Usar State para actualizar información, se inicia en Breakfast
const [product, setProduct] = useState(Breakfast);
// Función de filtrado por opción seleccionada
const typeProduct = (option) => {
   setProduct(dataMenu.filter((element) => element.type === option));
 };

return ( 
   <div className="DivOptions">
     <div className="SelectOption">  
     <button className="buttonRouter" onClick={() => typeProduct("breakfast")}>Desayuno</button>
     <button className="buttonRouter" onClick={() => typeProduct("lunch")}>Almuerzo</button>  
     <button className="buttonRouter" onClick={() => typeProduct("drinks")}>Bebidas</button>  
     </div>
     <div className ="displayMenu">
       {product.map((e) => (
         <div key={e.id}>
           <button className="SelectedMenu" onClick={() => globalContext.onAdd(e)}>
             <p>{e.name}</p>
             <p >${e.price}</p>
             <img src={e.image}></img>
             <p id="itemDescription">{e.description}</p>
           </button>
     </div>
       ))}
     </div>
     </div>
 );
};