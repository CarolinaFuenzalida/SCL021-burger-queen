import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";


export const Context = React.createContext();

export const Provider = ({ children }) => {
    //Estado para obtener el nombre del cliente y mesa
    const [client, setClient] = useState("");
    const [table, setTable] = useState("");
  
    //Estado para añadir productos al pedido
    const [products, setProducts] = useState([]);
  
    //Función para añadir productos al carro y aumentar cantidad
    const onAdd = (product) => {
        console.log("holisbobis")
        console.log(product)
      const exist = products.find((item) => item.id === product.id);
      if (exist) {
        setProducts(
          products.map((item) =>
          
            item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
          )
        );
      } else {
        setProducts([...products, { ...product, qty: 1 }]);
      }
      console.log(products)
    };
  
    //Función para restar cantidad
    const onRemove = (product) => {
      const exist = products.find((item) => item.id === product.id);
      if (exist.qty === 1) {
        setProducts(products.filter((item) => item.id !== product.id));
      } else {
        setProducts(
          products.map((item) =>
            item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
          )
        );
      }
    };
  
    //Función para eliminar productos
    const removeProducts = (product) => {
      const exist = products.find((item) => item.id === product.id);
      if (exist.qty) {
        setProducts(products.filter((item) => item.id !== product.id));
      }
    };
  
    //Función para el total
    const itemsPrice = products.reduce((a, c) => {
      return a + c.price * c.qty;
    }, 0);
  
    //Función para guardar orden de cliente a Firestore
    const resumeOrder = async () => {
      try {
        const docRef = await addDoc(collection(db, "Pedidos"), {
          client: client,
          table: table,
          total: itemsPrice,
          order: products,
          date: new Date(),
          status: "Pendiente",
        })
        console.log('Document written with ID: ', docRef.id);
        return docRef
      } catch (error) {
        throw new Error("Error al guardar el pedido");
      }
    };

    const newOrder = async(table, client, products, state, itemsPrice ) => {
      await addDoc(collection(db, "Pedidos"), {
        client: client,
        table: table,
        order: products,
        state: state,
        total: itemsPrice,
        date: new Date(),
     });
   }
  
    const props = {
      client,
      setClient,
      table,
      setTable,
      onAdd,
      onRemove,
      products,
      setProducts,
      removeProducts,
      itemsPrice,
      resumeOrder,
      newOrder
    };
  
    return <Context.Provider value={props}>{children}</Context.Provider>;
  }
   




