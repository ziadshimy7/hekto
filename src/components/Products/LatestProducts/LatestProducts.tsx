import React from "react";
import "./LatestProducts.scss";
import latestProductImg1 from "../../../assets/latest-product-1.png";
import latestProductImg2 from "../../../assets/latest-product-2.png";
import latestProductImg3 from "../../../assets/latest-product-3.png";
import latestProductImg4 from "../../../assets/latest-product-4.png";
import latestProductImg5 from "../../../assets/latest-product-5.png";
import latestProductImg6 from "../../../assets/latest-product-6.png";
const LatestProducts: React.FC = () => {
  const latestProductsImages = [
    latestProductImg1,
    latestProductImg2,
    latestProductImg3,
    latestProductImg4,
    latestProductImg5,
    latestProductImg6,
  ];
  return (
    <div className="hekto__latestProducts">
      <h2>Latest Products</h2>
      <ul className="hekto__filter-container">
        <li>New Arrival</li>
        <li>Best Seller</li>
        <li>Featured</li>
        <li>Special Offer</li>
      </ul>
      <div className="hekto__products-container">
        {latestProductsImages.map((image, idx) => (
          <div className="hekto__product-item" key={idx}>
            <div
              style={idx === 1 ? { backgroundColor: "#fff" } : {}}
              className="hekto__product-img"
            >
              <img src={image} alt="product-1" />
            </div>
            <div className="hekto_product-info">
              <h6>Comfort Handy Craft</h6>
              <p>$42.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
