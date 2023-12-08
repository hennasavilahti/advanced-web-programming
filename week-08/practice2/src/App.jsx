import { useState, useCallback, useEffect } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

import './App.css';
import './ProductList.css';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);

      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      setError(error.message);
      console.error('Error: ', error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let content = <p>No product data found</p>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Fetching data... </p>;
  }

  if (products.length > 0) {
    content = <ProductList products={products} />;
  }

  // 1. Add a handler function that will make the post request with the form data
  const addProductHandler = async (product) => {
    try {
      setError(null);
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error('Something went wrong - product not added!');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  // 2. Pass the handler function as property to the ProductForm component
  return (
    <>
      <h1>Incorporating data to React</h1>
      <div className="card">
        <button onClick={fetchProducts}>Fetch Products</button>
      </div>
      <div>
        <ProductForm addProductHandler={addProductHandler} />
      </div>
      <div className="product__list">{content}</div>
    </>
  );
}

export default App;
