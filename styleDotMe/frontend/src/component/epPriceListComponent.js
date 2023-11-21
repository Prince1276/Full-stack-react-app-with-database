import React, { useEffect, useState } from "react";
import axios from "axios";

function EpPriceListComponent() {
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allEPDetails, setAllEPDetails] = useState([]);
  const [productList, setproductList] = useState([]);
  const [selectedProviderName, setselectedProviderName] = useState("");
  const [selectedProduct, setselectedProduct] = useState("");
  const [selectproductVariation, setSelectproductVariation] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/epApiRouter/api/v1/getAllEPDetails`)
      .then((res) => {
        setLoading(true);
        setAllEPDetails(res.data);
        setLoading(false);
      });
  }, []);

  let providerNameHandler = (event) => {
    const tempArray = [];
    {
      allEPDetails.map((detail) => {
        detail.product.map((prod, i) => {
          if (detail.providerName === event.target.value) {
            tempArray.push(prod.productType);
          }
          setproductList(tempArray);
        });
      });
    }
    setselectedProviderName(event.target.value);
  };
  let productHandler = (event) => {
    console.log("Product");
    setselectedProduct(event.target.value);
  };
  let productVariationHandler = (event) => {
    console.log("Product");
    setSelectproductVariation(event.target.value);
  };

  let submitHandler = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://localhost:5000/epApiRouter/api/v1/getPerticularEPDetails/${selectedProviderName}/${selectedProduct}/${selectproductVariation}`
      )
      .then((res) => {
        setPrice(res.data.price);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Energy price list</h2>
      <form onSubmit={submitHandler}>
        <label>Provider Name</label>
        <select selected name="providerName" onChange={providerNameHandler}>
          {allEPDetails.map((detail) => {
            return <option>{detail.providerName}</option>;
          })}
        </select>
        <label>Product</label>
        <select selected name="product" onChange={productHandler}>
          {productList.map((product) => {
            console.log(product);
            return <option>{product}</option>;
          })}
        </select>
        <label>Product Variation</label>
        <select name="product" onChange={productVariationHandler}>
          <option value="North">North</option>
          <option value="Mid">Mid</option>
          <option value="South">South</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <div>Price - {price}</div>
    </div>
  );
}

export default EpPriceListComponent;
