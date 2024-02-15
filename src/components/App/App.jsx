import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../Header/Header.jsx";
import "./App.css";
import GroceryForm from "../GroceryForm/GroceryForm.jsx";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";

function App() {
  const [groceryItems, setGroceryItems] = useState([]);

  const getGroceries = () => {
    axios({
      method: "GET",
      url: "/api/groceries",
    })
      .then((response) => {
        setGroceryItems(response.data);
      })
      .catch((error) => {
        console.log("Error getting items", error);
      });
  };

  useEffect(() => {
    getGroceries();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <GroceryForm getGroceries={getGroceries} />
        <ShoppingList groceryItems={groceryItems} getGroceries={getGroceries} />
      </main>
    </div>
  );
}

export default App;
