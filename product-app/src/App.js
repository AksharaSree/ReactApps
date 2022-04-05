import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import ProductView from "./components/ProductView";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";


export const ProductContext = React.createContext();

function App() {




  const [products, setProducts] = useState([]);
  let [productCount, setProductCount] = useState(products.length);

  let getProducts = async () => {
    await axios
      .get(`https://614eac01b4f6d30017b482dc.mockapi.io/Products`)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        // Paginator(1);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Router>
       <ProductContext.Provider value={{ products,setProducts, productCount, setProductCount }} >
      <section className="section-content padding-y">
        <div className="container">
          <Routes>
            <Route path="/all-products" element={<ProductView />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path = '/edit-product/:id' element={<EditProduct/>}/>
            <Route path="/" element={<ProductView />} />
          </Routes>
        </div>
      </section>
      </ProductContext.Provider>
    </Router>
  );
}

export default App;
