import React, { useEffect, useState } from "react";
import axios from "axios";

function BpPriceListComponent() {
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allDetails, setAllDetails] = useState([]);
  const [productList, setproductList] = useState([]);
  const [selectedProviderName, setselectedProviderName] = useState("");
  const [selectedProduct, setselectedProduct] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bpApiRouter/api/v1/getAllBPDetails/`)
      .then((res) => {
        setLoading(true);
        setAllDetails(res.data);
        setLoading(false);
      });
  }, []);

  let providerNameHandler = (event) => {
    const tempArray = [];
    allDetails.map((detail) => {
      detail.product.map((prod, i) => {
        if (detail.providerName === event.target.value) {
          tempArray.push(prod.productType);
        }
      });
      setproductList(tempArray);
    });
    setselectedProviderName(event.target.value);
  };

  let productHandler = (event) => {
    setselectedProduct(event.target.value);
  };

  let onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://localhost:5000/bpApiRouter/api/v1/getPerticularBPDetail/${selectedProviderName}/${selectedProduct}`
      )
      .then((res) => {
        setPrice(res.data.price);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Price list</h2>
      <form onSubmit={onSubmitHandler}>
        <label>Provider Name</label>
        <select selected name="providerName" onChange={providerNameHandler}>
          {allDetails.map((detail) => {
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
        <button type="submit">Check the price</button>
        <br />
        <br />
        Price - {price} $
      </form>
    </div>
  );
}

export default BpPriceListComponent;
