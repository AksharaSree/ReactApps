import React, { useEffect, useState, useContext } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {ProductContext} from '../App';


function ProductList() {
  let navigate = useNavigate();

  const context = useContext(ProductContext);
  

  // let getProducts = async () => {
  //   if(context.products.length === 0)
  //     navigate('/');

  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);
  
  
  //const [products, setProducts] = useState([]);

  // let getProducts = async () => {
  //   await axios
  //     .get(`https://614eac01b4f6d30017b482dc.mockapi.io/Products`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setProducts(response.data);
  //       // Paginator(1);
  //     });
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  // let handleDelete = async (id) => {
  //   await axios
  //     .delete("https://614eac01b4f6d30017b482dc.mockapi.io/Products/" + id)
  //     .then((response) => {
  //       console.log(response.data);
  //       getProducts();
  //     });
  // };

  
  let handleDelete = async (product) => {
    await axios
      .delete("https://614eac01b4f6d30017b482dc.mockapi.io/Products/" + product.ProductID)
      .then((response) => {
        console.log(response.data);
debugger;
        let index = context.products.findIndex(elem=>  elem.ProductID === product.ProductID);
        context.products.splice(index,1);
        context.setProducts([...context.products]);

console.log(context.products);
      //  getProducts();
      });
  };

  let handleAdd = () => {
    navigate("/add-product");
  };

  

  return (
    <>
      <main className="col-md-9">
        <header className="border-bottom mb-4 pb-3">
          <div className="form-inline">
            <span className="mr-md-auto">{context.products.length} Items found </span>
            <div className="btn-group">
              <button
                className="btn btn-outline-secondary active"
                data-toggle="tooltip"
                title="Add Product"
                onClick={handleAdd}
                data-original-title="List view"
              >
                <i className="fa fa-plus"></i>
                &nbsp; Add Product
              </button>
            </div>
          </div>
        </header>

        {context.products.map((product, i) => {
          return (
            <article className="card card-product-list" key={product.ProductID}>
              <div className="row no-gutters">
                <ProductCard productDetail={product} />

                <aside className="col-sm-3">
                  <div className="info-aside">
                    <div className="price-wrap">
                      <span className="price h5">
                        <i className="fa fa-inr"></i> {product.Price}
                      </span>
                      <del className="price-old">
                        <i className="fa fa-inr"></i>
                        {product.MaxRetailPrice}
                      </del>
                    </div>                   
                    <br />
                    <p>
                      {/* <button className="btn btn-success btn-block">
                        Details
                      </button> */}
                      <button
                        onClick={() => {
                          navigate("/edit-product/" + product.ProductID);
                        }}
                        className="btn btn-success btn-block"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-primary btn-block"
                        onClick={() => handleDelete(product)}
                      >
                        Delete
                      </button>
                    </p>
                  </div>
                </aside>
              </div>
            </article>
          );
        })}       
      </main>
    </>
  );
}

export default ProductList;
