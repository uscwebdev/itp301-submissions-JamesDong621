import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import Header from './Header';
import ProductList from './ProductList';
import Footer from './Footer';
import './styles.css'; // Assuming you will have this CSS file.

function MainApp() {
  return (
    <div className="app">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);
