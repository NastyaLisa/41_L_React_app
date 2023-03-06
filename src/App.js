import React, { useState, useEffect } from "react";

function App() {
  // const [coffe, setCoffe] = useState(0);
  // const [sugar, setSugar] = useState(0);
  // const addCoffe = () => setCoffe(coffe + 1);
  // const addSugar = () => setSugar(sugar + 1);
  // const removeCoffe = () => setCoffe(coffe - 1);
  // const removeSugar = () => setSugar(sugar - 1);

  const [products, setProducts] = useState({
    coffee: 0,
    sugar: 0,
  });

  const addCoffee = () => {
    setProducts({
      ...products,
      coffee: products.coffee + 1,
    });
  };
  const addSugar = () => {
    setProducts({
      ...products,
      sugar: products.sugar + 1,
    });
  };
  const removeCoffee = () => {
    if (products.coffee > 0) {
      setProducts({
        ...products,
        coffee: products.coffee - 1,
      });
    }
  };
  const removeSugar = () => {
    if (products.sugar > 0) {
      setProducts({
        ...products,
        sugar: products.sugar - 1,
      });
    }
  };

  const save = () => {
    localStorage.setItem("coffee", products.coffee);
    localStorage.setItem("sugar", products.sugar);
  };

  const clear = () => {
    localStorage.removeItem("coffee");
    localStorage.removeItem("sugar");
    setProducts({
      coffee: 0,
      sugar: 0,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("coffee")) {
      setProducts({
        ...products,
        coffee: +localStorage.getItem("coffee"),
        sugar: +localStorage.getItem("sugar"),
      });
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list</h1>
        <div className="product">
          <span>{`Coffee: ${products.coffee}`}</span>
          <button onClick={addCoffee}>Add</button>
          {products.coffee > 0 && (
            <button onClick={removeCoffee} disabled={products.coffee === 0}>
              Remove
            </button>
          )}
        </div>
        <div className="product">
          <span>{`Sugar: ${products.sugar}`}</span>
          <button onClick={addSugar}>Add</button>
          {products.sugar > 0 && (
            <button onClick={removeSugar} disabled={products.sugar === 0}>
              Remove
            </button>
          )}
        </div>
        <div className="save">
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default App;
