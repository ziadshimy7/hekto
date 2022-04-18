import React from "react";
import LatestProducts from "./LatestProducts/LatestProducts";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
const Products: React.FC = () => {
  return (
    <>
      <FeaturedProducts />
      <LatestProducts />
    </>
  );
};

export default Products;
