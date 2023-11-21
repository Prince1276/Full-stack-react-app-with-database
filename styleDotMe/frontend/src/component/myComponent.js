import React, { useEffect, useState } from "react";
import axios from "axios";

function MyComponent() {
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allDetails, setAllDetails] = useState([]);
  const [allEPDetails, setAllEPDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/bpApiRouter/api/v1/getAllBPDetails/`)
      .then((res) => {
        setLoading(true);
        setAllDetails(res.data);
        setLoading(false);
      });

    axios
      .get(`http://localhost:5000/epApiRouter/api/v1/getAllEPDetails`)
      .then((res) => {
        setLoading(true);
        setAllEPDetails(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        <h2>Broadband Provider</h2>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Provider Name</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {allDetails.map((detail) => {
              return (
                <tr key={detail._id}>
                  <td>{detail.providerName}</td>
                  <td>
                    {detail.product.map((prod, i) => {
                      return (
                        <ul style={{ listStyleType: "none" }} key={i}>
                          <li key={i}>{prod.productType}</li>
                        </ul>
                      );
                    })}
                  </td>
                  <td>
                    {" "}
                    {detail.product.map((prod, i) => {
                      return (
                        <ul style={{ listStyleType: "none" }} key={i}>
                          <li>{prod.price}</li>
                        </ul>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Energy Provider</h2>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Provider Name</th>
              <th>Product</th>
              <th>Product Variation</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {allEPDetails.map((detail) => {
              return (
                <tr key={detail._id}>
                  <td>{detail.providerName}</td>
                  <td>
                    {detail.product.map((prod, i) => {
                      return (
                        <ul style={{ listStyleType: "none" }} key={i}>
                          <li key={i}>{prod.productType}</li>
                          <li>*</li>
                          <li>*</li>
                          <li>*</li>
                        </ul>
                      );
                    })}
                  </td>
                  <td>
                    {" "}
                    {detail.product.map((prod, i) => {
                      return prod.productVariation.map((sam, x) => {
                        return (
                          <ul style={{ listStyleType: "none" }} key={i}>
                            <li key={sam.price}>{sam.name}</li>
                          </ul>
                        );
                      });
                    })}
                  </td>
                  <td>
                    {" "}
                    {detail.product.map((prod, i) => {
                      return prod.productVariation.map((sam, x) => {
                        return (
                          <ul key={sam.price}>
                            <li style={{ listStyleType: "none" }} key={i}>
                              {sam.price}
                            </li>
                          </ul>
                        );
                      });
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyComponent;
