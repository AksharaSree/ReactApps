import React from "react";

function ProductCard(props) {
  return (
    <>
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
                      <span className="a-size-base a-text-bold">Colour</span>
                    </td>
                    <td className="a-span9">
                      <span className="a-size-base">
                        {props.productDetail.ColorsAvailable[0]}
                      </span>
                    </td>
                  </tr>
                  <tr className="a-spacing-small">
                    <td className="a-span3">
                      <span className="a-size-base a-text-bold">Brand</span>
                    </td>
                    <td className="a-span9">
                      <span className="a-size-base">
                        {props.productDetail.Brand}
                      </span>
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
  );
}

export default ProductCard;
