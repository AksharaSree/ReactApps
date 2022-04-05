import { useState } from 'react';
import './App.css';

function App() {


let [cartItemsCount,setCart] = useState(0);
let [total, setTotal]=useState(0);
let [cartItems, setCartItems] = useState([]);

function handleAddToCart(item){
  setCart(cartItemsCount+1);  
  setTotal(prev=>prev+item.Price);
  setCartItems(existItems => [...existItems, item]);
  
}

function handleRemoveCart(item){
  setCart(prev=>prev-1);  
  setTotal(prev=>prev-item.Price);
  let index = cartItems.findIndex(x => x.id ===item.id);
  cartItems.splice(index,1);
  setCartItems(existItems => [...cartItems]);
}

  return (
   <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="https://startbootstrap.com/previews/shop-homepage">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="https://startbootstrap.com/previews/shop-homepage">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://startbootstrap.com/previews/shop-homepage">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="https://startbootstrap.com/previews/shop-homepage" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="https://startbootstrap.com/previews/shop-homepage">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="https://startbootstrap.com/previews/shop-homepage">Popular Items</a></li>
                                <li><a className="dropdown-item" href="https://startbootstrap.com/previews/shop-homepage">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartItemsCount}</span>
                        </button>
                        <label className="price-padding">Total Price: ${total.toFixed(2)}</label>
                    </form>
                </div>
            </div>
        </nav>
        
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                             
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                             
                            <div className="card-body p-4">
                                <div className="text-center">
                                     
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                     
                                    $40.00 - $80.00
                                </div>
                            </div>
                             
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="https://startbootstrap.com/previews/shop-homepage">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                             
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                             
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                             
                            <div className="card-body p-4">
                                <div className="text-center">
                                     
                                    <h5 className="fw-bolder">Special Item</h5>
                                     
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                     
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                             
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                              {
                        cartItems.findIndex(x => x.id === 1) > -1 ?  
                                <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleRemoveCart({id:1, Category:"Special Item", Price:18})}>Remove From Cart</button></div>:                                        
                                <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleAddToCart({id:1, Category:"Special Item", Price:18})}>Add To Cart</button></div>
                              }

                      
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                             
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                             
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                             
                            <div className="card-body p-4">
                                <div className="text-center">
                                     
                                    <h5 className="fw-bolder">Sale Item</h5>
                                     
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                             
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            {

cartItems.findIndex(x => x.id === 2) > -1 ?  
<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleRemoveCart({id:2, Category:"Sale Item", Price:25})}>Remove From Cart</button></div>:                                        
<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleAddToCart({id:2, Category:"Sale Item", Price:25})}>Add To Cart</button></div>

                            }

                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                             
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                             
                            <div className="card-body p-4">
                                <div className="text-center">
                                     
                                    <h5 className="fw-bolder">Popular Item</h5>
                                     
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                     
                                    $40.00
                                </div>
                            </div>
                             
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            {


cartItems.findIndex(x => x.id === 3) > -1 ?  
<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleRemoveCart({id:3, Category:"Popular Item", Price:40})}>Remove From Cart</button></div>:                                        
<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleAddToCart({id:3, Category:"Popular Item", Price:40})}>Add To Cart</button></div>

                            }
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                             
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                             
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                             
                            <div className="card-body p-4">
                                <div className="text-center">
                                     
                                    <h5 className="fw-bolder">Sale Item</h5>
                                     
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            {
cartItems.findIndex(x => x.id === 4) > -1 ?  
<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleRemoveCart({id:4, Category:"Sale Item", Price:25})}>Remove From Cart</button></div>:                                        
<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleAddToCart({id:4, Category:"Sale Item", Price:25})}>Add To Cart</button></div>                              
                            }
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                          
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                  
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    
                                    $120.00 - $280.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href=" https://startbootstrap.com/previews/shop-homepage">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Special Item</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                   
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            {
cartItems.findIndex(x => x.id === 5) > -1 ?  
<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleRemoveCart({id:5, Category:"Special Item", Price:18})}>Remove From Cart</button></div>:                                        
<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleAddToCart({id:5, Category:"Special Item", Price:18})}>Add To Cart</button></div>                                 
                            }
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    $40.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            {

cartItems.findIndex(x => x.id === 6) > -1 ?  
<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleRemoveCart({id:6, Category:"Popular Item", Price:40})}>Remove From Cart</button></div>:                                        
<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleAddToCart({id:6, Category:"Popular Item", Price:40})}>Add To Cart</button></div> 

                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
        </footer>
   </>
  );
}

export default App;
