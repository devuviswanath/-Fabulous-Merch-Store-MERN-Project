import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const { grid, data } = props;
  console.log("---", data);
  let location = useLocation();
  let newdata;
  if (data) {
    newdata = Object.values(data);
  } else {
    newdata = data;
  }
  const uploadCart = () => {
    alert("add cart");
  };
  /*cart*/
  const [quantity, setQuantity] = useState(1);
  /*cart*/

  return (
    <>
      {newdata?.map((item, index) => {
        return (
          <div
            key={index}
            className={` ${
              location.pathname == "/product" ? `gr-${grid}` : "col-3"
            } `}
          >
            <Link className="product-card position-relative">
              <div className="product-image">
                <img
                  src={item?.image[0].url}
                  className="img-fluid"
                  alt="product image"
                />
                <img
                  src={item?.image[0].url}
                  className="img-fluid"
                  alt="product image"
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item?.title}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={item.totalrating}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                >
                  {item?.description}
                </p>
                <p className="price">${item?.price}</p>
                <div>
                  <button
                    className="button border-0"
                    type="button"
                    onClick={() => {
                      uploadCart();
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
