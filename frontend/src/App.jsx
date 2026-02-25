import { useEffect, useState, useMemo } from 'react'
import './App.css'
import ProductList from './ProductList';

function App() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));

    fetch('http://localhost:8080/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        product => product.category?.id === Number(selectedCategory)
      );
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered.sort((a, b) =>
      sortOrder === "asc"
        ? a.price - b.price
        : b.price - a.price
    );

    return filtered;

  }, [products, selectedCategory, searchTerm, sortOrder]);

  return (
    <div className="container d-flex flex-column min-vh-100">

      <h1 className="my-4 text-center">Bharadwaj Product Catalog</h1>

      <div className="row align-items-center mb-4 g-3">

        <div className="col-md-3 col-sm-12">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-5 col-sm-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-md-4 col-sm-12">
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Price: Low → High</option>
            <option value="desc">Price: High → Low</option>
          </select>
        </div>

      </div>

      <div className="flex-grow-1">
        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <p className="text-center">No Products Found</p>
        )}
      </div>

      <footer className="footer mt-4 py-3 text-center">
        <p className="mb-0">
          © 2026 All Rights Reserved |{" "}
          <a
            href="https://www.youtube.com/@Code-with-Bharadwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Bharadwaj
          </a>
        </p>
      </footer>

    </div>
  );
}

export default App;