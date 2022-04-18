import React, { useState } from "react";
import "./FeaturedProducts.scss";
import firstProduct from "../../../assets/feature-product-1.png";
import secondProduct from "../../../assets/feature-product-2.png";
import thirdProduct from "../../../assets/feature-product-3.png";
import fourthProduct from "../../../assets/feature-product-4.png";
interface ChairInfo {
  name: string;
  code: string;
  price: number;
  image: string;
}

const featuredProductsArr: ChairInfo[] = [
  {
    name: "Cantilever Chair",
    code: "Y523201",
    price: 42,
    image: firstProduct,
  },
  {
    name: "Rounded Chair",
    code: "Y624512",
    price: 45,
    image: secondProduct,
  },
  {
    name: "Portable Chair",
    code: "Y126573",
    price: 25,
    image: thirdProduct,
  },
  {
    name: "Plage Chair",
    code: "Y5913065",
    price: 25,
    image: fourthProduct,
  },
];
const FeaturedProducts: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    setCurrentPage(Number(target.getAttribute("data-id")));
  };
  return (
    <div className="hekto__featuredProducts">
      <h2>Featured Products</h2>
      <ul className="hekto__products-container">
        {featuredProductsArr.map((product) => (
          <li key={product.code} className="hekto__featuredProduct">
            <div className="hekto__product-image">
              <img src={product.image} alt="Chair" />
            </div>
            <div className="hekto__product-info">
              <button className="hekto__details-btn">View Details</button>
              <h5>{product.name}</h5>
              <p>Code - {product.code}</p>
              <p>${(product.price - 0.01).toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="hekto__featuredProducts-pagination_container">
        {[1, 2, 3, 4].map((item, idx) => (
          <div
            key={idx}
            data-id={item}
            onClick={paginate}
            className={`hekto__pagination-link ${
              currentPage === item ? "active" : null
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
