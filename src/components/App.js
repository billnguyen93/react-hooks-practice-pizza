import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [selectedPizza, setSelectedPizza] = useState({})

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(resp => resp.json())
      .then(data => setPizzas(data))
  }, [])

  function selectPizza(pizzaObj) {
    setSelectedPizza(pizzaObj)
  }

  function handlePizzaChange(updatedPizza) {
    const updatedPizzas = pizzas.map((pizza) => (
      pizza.id === updatedPizza.id ? updatedPizza : pizza
    ))
    setSelectedPizza(updatedPizza)
    setPizzas(updatedPizzas)
  }
   

  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza} handlePizzaChange={handlePizzaChange}/>
      <PizzaList pizzas={pizzas} selectPizza={selectPizza}/>
    </>
  );
}

export default App;
