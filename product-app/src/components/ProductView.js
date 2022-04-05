import React, {useEffect, useContext} from 'react';
import SideBar from "./SideBar";
import ProductList from "./ProductList";
import {ProductContext} from '../App';
import { useNavigate } from "react-router-dom";

function ProductView() {

  const context = useContext(ProductContext);
  let navigate = useNavigate();

  let getProducts = async () => {
    if(context.products.length === 0)
      navigate('/');

  };

  useEffect(() => {
    getProducts();
  }, []);
  
    return <div className="row">
        <SideBar />
        <ProductList />
      </div>
   
}

export default ProductView
