import React, { useState } from 'react';
import Product from './Product';

function ProductList() {
  const [subtotal, setSubtotal] = useState(0);

  const handleIncreaseSubtotal = (price) => {
    setSubtotal((prevSubtotal) => prevSubtotal + price);
  };

  const handleDecreaseSubtotal = (price) => {
    setSubtotal((prevSubtotal) => prevSubtotal - price);
  };

  const products = [
    {
      name: 'Guitar',
      price: 200,
      image:
        'https://guitar.com/wp-content/uploads/2023/05/Paulbugler_if_wes_anderson_designed_a_guitar_c8dccbfb-021a-42fe-affb-95cb876fe72a-copy.jpg',
    },
    {
      name: 'Drum',
      price: 300,
      image:
        'https://trixondrumsusa.com/wp-content/uploads/2022/10/Trixon-12-By-7-Junior-Marching-Snare-1.jpg',
    },
    {
      name: 'Piano',
      price: 1000,
      image:
        'https://kawaius.com/wp-content/uploads/2018/04/GX-2-Polished-Ebony.jpg',
    },
    {
      name: 'Flute',
      price: 50,
      image:
        'https://hilljemusic.com/wp-content/uploads/2019/01/400x200_flut.jpeg',
    },
  ];

  return (
    <div className="product-list">
      <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
      {products.map((product) => (
        <Product
          key={product.name}
          name={product.name}
          price={product.price}
          image={product.image}
          onIncrease={handleIncreaseSubtotal}
          onDecrease={handleDecreaseSubtotal}
        />
      ))}
    </div>
  );
}

export default ProductList;
