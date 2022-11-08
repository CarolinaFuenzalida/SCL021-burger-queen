import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import  AllMenu  from "../../menu.json";
import "./Waiter.css";




  
export const Waiter = () => { 
   // Guardamos el Menú
  const dataMenu = AllMenu.menu;

 // const globalContext = useContext(Context);
 // Empieza por defecto en desayuno 

 const Button = dataMenu.filter((element) => element.type === "breakfast");
  const [product, changeProduct] = useState(Button);
  const typeProduct = (option) => {
    changeProduct(dataMenu.filter((element) => element.type === option));
  };

 return ( 
    
    <div className="mainDivWaiter">
      <div className="DivLeft"> 
      <button className="buttonRouter" id="backWaiter"> {" "}<Link to="/">Back</Link>{" "}</button>
      <div className="OptionTables"> <input  className="inputCostumerName" id="inputTable" placeholder="Ingresa Número de Mesa"></input></div>
       
      
      <input  className="inputCostumerName" placeholder="Ingresa Nombre del cliente"></input>
      
        <div className="SelectOption">  
        <button id="BreakfastButton" className="buttonRouter" onClick={() => typeProduct("breakfast")}>Desayuno</button>
        <button id="LunchButton" className="buttonRouter" onClick={() => typeProduct("lunch")}>Almuerzo</button>  
        <button id="DrinkButton" className="buttonRouter" onClick={() => typeProduct("drinks")}>Bebidas</button>  
         </div>
         <div id="displayMenu">
        {product.map((e) => (
          <div key={e.id}>
            <button className="SelectedMenu">
              <p>{e.name}</p>
              <p >${e.price}</p>
              <img src={e.image}></img>
              <p id="itemDescription">{e.description}</p>
            </button>
          </div>
        ))}
      </div>

 
        <div className="DivRight"> </div>
         </div>
    </div>
  );
};

/*  <div id="displayMenu"> 
            { dataMenu.breakfast.map(element => (
                <div className="SelectedMenu">
                {element.name} 
                {element.price}
                </div>)) }  */