import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

function AddProduct() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Name: "",
      MaxRetailPrice: 0.0,
      Price: 0.0,
      ProductUrl: "",
      Description: "",
      InventoryCount: 0,
      ProductImage: "",
      Category: "",
      Brand: "",
      Color:""
    },
    validationSchema: yup.object({
      Name: yup.string().required("Required"),
      MaxRetailPrice: yup.number().required("Required").min(100.0),
      Price: yup.number().required("Required").min(1.0),
      ProductUrl: yup.string().url("Invalid url address").required("Required"),
      Description: yup.string(),
      InventoryCount: yup
        .number()
        .required("Required")
        .min(1)
        .positive()
        .integer(),
      ProductImage: yup.string().url("Invalid image url address"),
      Category: yup.string(),
      Brand: yup.string().required("Required"),
      DateCreated: yup.date().default(function () {
        return new Date();
      }),
      Color: yup.string(),
    }),
    onSubmit: (values) => {
      saveHandler(values);
    },
  });

  let saveHandler = async (data) => {
    try {
      let res = await axios
        .post("https://614eac01b4f6d30017b482dc.mockapi.io/Products", data)
        .then((response) => {
          console.log(response);
          navigate("/all-products");
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(res);
      navigate("/all-products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3> Add Product </h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input
                id="Name"
                name="Name"
                type="text"
                className="form-control"
                placeholder="Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.Name}
              />
              {formik.touched.Name && formik.errors.Name ? (
                <div style={{ color: "red" }}>{formik.errors.Name}</div>
              ) : null}
            </div>
          </div>

          <div className="col-6">
            <div className="form-group">
              <label htmlFor="Category">Category</label>

              <input
                id="Category"
                name="Category"
                type="text"
                className="form-control"
                placeholder="Category"
                onChange={formik.handleChange}
                value={formik.values.Category}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="Price">Price</label>
              <input
                id="Price"
                name="Price"
                type="text"
                className="form-control"
                placeholder="Price"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.Price}
              />
              {formik.touched.Price && formik.errors.Price ? (
                <div style={{ color: "red" }}>{formik.errors.Price}</div>
              ) : null}
            </div>
          </div>

          <div className="col-6">
            <div className="form-group">
              <label htmlFor="MaxRetailPrice">Max Retail Price</label>
              <input
                id="MaxRetailPrice"
                name="MaxRetailPrice"
                type="text"
                className="form-control"
                placeholder="Max Retail Price"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.MaxRetailPrice}
              />
              {formik.touched.MaxRetailPrice && formik.errors.MaxRetailPrice ? (
                <div style={{ color: "red" }}>
                  {formik.errors.MaxRetailPrice}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="ProductUrl">Product Url</label>
              <input
                id="ProductUrl"
                name="ProductUrl"
                type="text"
                className="form-control"
                placeholder="Product Url"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.ProductUrl}
              />
              {formik.touched.ProductUrl && formik.errors.ProductUrl ? (
                <div style={{ color: "red" }}>{formik.errors.ProductUrl}</div>
              ) : null}
            </div>
          </div>

          <div className="col-6">
            <div className="form-group">
              <label htmlFor="ProductImage">Product Image Url</label>
              <input
                id="ProductImage"
                name="ProductImage"
                type="text"
                className="form-control"
                placeholder="Product Image Url"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.ProductImage}
              />
              {formik.touched.ProductImage && formik.errors.ProductImage ? (
                <div style={{ color: "red" }}>{formik.errors.ProductImage}</div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="Brand">Brand</label>
              <input
                id="Brand"
                name="Brand"
                type="text"
                className="form-control"
                placeholder="Brand"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.Brand}
              />
              {formik.touched.Brand && formik.errors.Brand ? (
                <div style={{ color: "red" }}>{formik.errors.Brand}</div>
              ) : null}
            </div>
          </div>

          <div className="col-6">
            <div className="form-group">
              <label htmlFor="InventoryCount">Product Count</label>
              <input
                id="InventoryCount"
                name="InventoryCount"
                type="text"
                className="form-control"
                placeholder="Enter Product Count Available"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.InventoryCount}
              />
              {formik.touched.InventoryCount && formik.errors.InventoryCount ? (
                <div style={{ color: "red" }}>
                  {formik.errors.InventoryCount}
                </div>
              ) : null}
            </div>
          </div>
        </div>



    <div className="row">

<div className="col-6">
<div className="form-group">
<label htmlFor="Description">Description</label>
        <input 
                id="Description"
                name="Description"
                type="text"
                className="form-control"
                placeholder="Description"
                onChange={formik.handleChange}
                value={formik.values.Description}
            />
        </div>
  </div>

  <div className="col-6">
  <div className="form-group">
<label htmlFor="Color">Color</label>
        <input 
                id="Color"
                name="Color"
                type="text"
                className="form-control"
                placeholder="Color"
                onChange={formik.handleChange}
                value={formik.values.Color}
            />
        </div>
  </div>


  </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
