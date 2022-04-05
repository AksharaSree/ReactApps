import React from 'react';


function ProductCard(props) {



//   <article className="card card-product-list">
    //     <div className="row no-gutters">
    //       <aside className="col-md-3">
    //         <a href={props.productDetail.ProductUrl} className="img-wrap">
    //           <img alt="title" src={props.productDetail.ProductImage} />
    //         </a>
    //       </aside>

    //       <div className="col-md-6">
    //         <div className="info-main">
    //           <a href={props.productDetail.ProductUrl} className="h5 title">
                 
    //             {props.productDetail.Name} 
    //           </a>
    //           <div className="rating-wrap mb-3">
    //             <ul className="rating-stars">
    //               <li style={{ width: "80%" }} className="stars-active">
    //                 <i className="fa fa-star"></i> 
    //                 <i className="fa fa-star"></i>
    //                 <i className="fa fa-star"></i> 
    //                 <i className="fa fa-star"></i>
    //                 <i className="fa fa-star"></i>
    //               </li>
    //               <li>
    //                 <i className="fa fa-star"></i> 
    //                 <i className="fa fa-star"></i>
    //                 <i className="fa fa-star"></i> 
    //                 <i className="fa fa-star"></i>
    //                 <i className="fa fa-star"></i>
    //               </li>
    //             </ul>
    //             <div className="label-rating">
    //               {props.productDetail.RatingAvg}/5
    //             </div>
    //           </div>

    //           {/* <p>  ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p> */}

    //           {/* <div
                
    //             className="celwidget"
    //             data-feature-name="featurebullets"
    //             data-csa-c-id="z7rw2x-57qkyj-smkwkp-760kpm"
    //             data-cel-widget="featurebullets_feature_div"
    //           >
    //             <div
                 
    //               className="a-section a-spacing-medium a-spacing-top-small"
    //             >
    //               <hr />
    //               <h5 className="a-size-base-plus a-text-bold">
                    
    //                 About this item
    //               </h5>
    //               <ul className="a-unordered-list a-vertical a-spacing-mini">
    //                 <li>
    //                   <span className="a-list-item">                        
    //                     WIND CHIMES ATTRACT POSITIVE ENERGY AND PROSPERITY :
    //                     Wind chimes help to attract positive energy and suppress
    //                     ill luck.&nbsp;The gentle tinkling sound that emanates
    //                     from it helps this energy to linger on and meander
    //                     gently in your space thereby attracting prosperity.
    //                   </span>
    //                 </li>
                    
    //               </ul>
    //             </div>
    //           </div> */}

    //           <div
    //             className="celwidget"
    //             data-feature-name="productOverview"
    //             data-cel-widget="productOverview_feature_div"
    //           >
    //             <div className="a-section a-spacing-small a-spacing-top-small">
    //               <table className="a-normal a-spacing-micro">
                     
    //                 <tbody>
    //                   <tr className="a-spacing-small">
                         
    //                     <td className="a-span3">
                           
    //                       <span className="a-size-base a-text-bold">
    //                         Colour
    //                       </span> 
    //                     </td>
    //                     <td className="a-span9">
    //                       <span className="a-size-base">{props.productDetail.ColorsAvailable[0]}</span>
    //                     </td> 
    //                   </tr>
    //                   <tr className="a-spacing-small">
                         
    //                     <td className="a-span3">
                           
    //                       <span className="a-size-base a-text-bold">Brand</span>
    //                     </td> 
    //                     <td className="a-span9">
                           
    //                       <span className="a-size-base">{props.productDetail.Brand}</span> 
    //                     </td> 
    //                   </tr>
                    
    //                   <tr className="a-spacing-small">
                       
    //                     <td className="a-span3">
                         
    //                       <span className="a-size-base a-text-bold">
    //                         Inventory Count
    //                       </span>
    //                     </td>
    //                     <td className="a-span9">
                          
    //                       <span className="a-size-base">                            
    //                         {props.productDetail.InventoryCount}
    //                       </span>
    //                     </td>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <aside className="col-sm-3">
    //         <div className="info-aside">
    //           <div className="price-wrap">
    //             <span className="price h5">
                   
    //               <i className="fa fa-inr"></i> {props.productDetail.Price} 
    //             </span>
    //             <del className="price-old">
                   
    //               <i className="fa fa-inr"></i> 
    //               {props.productDetail.MaxRetailPrice}
    //             </del>
    //           </div>
    //           {/* <p className="text-success">Free shipping</p> */}
    //           <br />
    //           <p>
    //             <button
                 
    //               className="btn btn-success btn-block">
                   
    //               Details 
    //             </button>
    //             <button
                 
    //               className="btn btn-success btn-block">
                   
    //               Edit 
    //             </button>
    //             <button className="btn btn-primary btn-block" onClick={() => handleDelete(props.productDetail.ProductID)}>
                   
    //               Delete 
    //             </button>
    //           </p>
    //         </div>
    //       </aside>
    //     </div>
    //   </article>



    return <>
    
<aside className="col-md-3">
            <a href={props.productDetail.ProductUrl} className="img-wrap">
              <img alt="title" src={props.productDetail.ProductImage} />
            </a>
          </aside>

          <div className="col-md-6">
            <div className="info-main">
              <a href={props.productDetail.ProductUrl} className="h5 title">
                 
                {props.productDetail.Name} 
              </a>
              <div className="rating-wrap mb-3">
                <ul className="rating-stars">
                  <li style={{ width: "80%" }} className="stars-active">
                    <i className="fa fa-star"></i> 
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i> 
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i> 
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i> 
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
                <div className="label-rating">
                  {props.productDetail.RatingAvg}/5
                </div>
              </div>

              {/* <p>  ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p> */}

              {/* <div
                
                className="celwidget"
                data-feature-name="featurebullets"
                data-csa-c-id="z7rw2x-57qkyj-smkwkp-760kpm"
                data-cel-widget="featurebullets_feature_div"
              >
                <div
                 
                  className="a-section a-spacing-medium a-spacing-top-small"
                >
                  <hr />
                  <h5 className="a-size-base-plus a-text-bold">
                    
                    About this item
                  </h5>
                  <ul className="a-unordered-list a-vertical a-spacing-mini">
                    <li>
                      <span className="a-list-item">                        
                        WIND CHIMES ATTRACT POSITIVE ENERGY AND PROSPERITY :
                        Wind chimes help to attract positive energy and suppress
                        ill luck.&nbsp;The gentle tinkling sound that emanates
                        from it helps this energy to linger on and meander
                        gently in your space thereby attracting prosperity.
                      </span>
                    </li>
                    
                  </ul>
                </div>
              </div> */}

              <div
                className="celwidget"
                data-feature-name="productOverview"
                data-cel-widget="productOverview_feature_div"
              >
                <div className="a-section a-spacing-small a-spacing-top-small">
                  <table className="a-normal a-spacing-micro">
                     
                    <tbody>
                      <tr className="a-spacing-small">
                         
                        <td className="a-span3">
                           
                          <span className="a-size-base a-text-bold">
                            Colour
                          </span> 
                        </td>
                        <td className="a-span9">
                          <span className="a-size-base">{props.productDetail.ColorsAvailable[0]}</span>
                        </td> 
                      </tr>
                      <tr className="a-spacing-small">
                         
                        <td className="a-span3">
                           
                          <span className="a-size-base a-text-bold">Brand</span>
                        </td> 
                        <td className="a-span9">
                           
                          <span className="a-size-base">{props.productDetail.Brand}</span> 
                        </td> 
                      </tr>
                    
                      <tr className="a-spacing-small">
                       
                        <td className="a-span3">
                         
                          <span className="a-size-base a-text-bold">
                            Inventory Count
                          </span>
                        </td>
                        <td className="a-span9">
                          
                          <span className="a-size-base">                            
                            {props.productDetail.InventoryCount}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

    
          </>
}

export default ProductCard
