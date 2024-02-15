import React from "react";

import Header from "../Header/Header.jsx";
import "./App.css";
import GroceryForm from "../GroceryForm/GroceryForm.jsx";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <p>Under Construction...</p>
        <GroceryForm />
        <ShoppingList />
      </main>
    </div>
  );
}

export default App;
