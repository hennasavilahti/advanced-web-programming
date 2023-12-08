import ProductList from './ProductList';

import './App.css';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');

      if (!response.ok) {
        throw new Error('Error with fetching products');
      }

      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.error(error.message);
    }
    setIsLoading(false);
  };

  let content = <p>No products available</p>;

  if (error) {
    content = <p>{error.message}</p>;
  }

  if (isLoading) {
    content = <p>🔃 Fetching products...</p>;
  }

  if (products.length > 0) {
    content = <ProductList products={products} />;
  }

  return (
    <>
      <h1>Incorporating data to React</h1>
      <div className="card">
        <button onClick={fetchProducts}>Fetch Products</button>
      </div>
      <div className="card">{content}</div>
    </>
  );
}

export default App;
