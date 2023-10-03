import React from 'react';

function Product({ name, price, image }) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  );
}
export default Product;
