import React, { useState } from 'react';

function Product({ name, price, image, onIncrease, onDecrease }) {
  const [count, setCount] = useState(0);

  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
      onDecrease(price);
    }
  };

  const handlePlusClick = () => {
    setCount(count + 1);
    onIncrease(price);
  };

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
