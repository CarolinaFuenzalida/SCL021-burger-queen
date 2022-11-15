import React, { useState, useContext } from "react";
import  AllMenu  from "../menu.json";
import "../pages/Waiter/Waiter.css";
import { Provider, Context} from "./Context";



export const FilterMenu  = () => { 

const dataMenu = AllMenu.menu;

const globalContext = useContext(Context);
// Empieza por defecto en desayuno 
const Breakfast = dataMenu.filter((element) => element.type === "breakfast");
const [product, setProduct] = useState(Breakfast);
const typeProduct = (option) => {
   setProduct(dataMenu.filter((element) => element.type === option));
 };

return ( 
   <div className="DivOptions">
     <div className="SelectOption">  
     <button id="BreakfastButton" className="buttonRouter" onClick={() => typeProduct("breakfast")}>Desayuno</button>
     <button id="LunchButton" className="buttonRouter" onClick={() => typeProduct("lunch")}>Almuerzo</button>  
     <button id="DrinkButton" className="buttonRouter" onClick={() => typeProduct("drinks")}>Bebidas</button>  
     </div>
     <div id="displayMenu">
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