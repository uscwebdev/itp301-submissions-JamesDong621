import React, { useState } from 'react';

function Product({ name, price, image }) {
  const [count, setCount] = useState(0);

  function handleMinusClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handlePlusClick() {
    setCount(count + 1);
  }

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <div className="product-counter">
        <button onClick={handleMinusClick}>-</button>
        <span>{count}</span>
        <button onClick={handlePlusClick}>+</button>
      </div>
    </div>
  );
}

export default Product;
