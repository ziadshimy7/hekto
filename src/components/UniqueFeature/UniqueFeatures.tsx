import React from "react";
import "./UniqueFeatures.scss";
import blobImage from "../../assets/blob.svg";
import uniqueProductImage from "../../assets/product-of-the-day.png";
const UniqueFeatures: React.FC = () => {
  return (
    <div className="hekto__uniqueFeature">
      <div className="hekto__uniqueFeatures-img_container">
        <div className="hekto__uniqueFeatures-img">
          <img
            className="hekto__sofaImage"
            src={uniqueProductImage}
            alt="Sofa"
          />
          <img className="hekto__blobImage" src={blobImage} alt="Blob" />
        </div>
      </div>
      <div className="hekto__uniqueFeatures-content">
        <h2>Product Of The Day</h2>
        <ul>
          <li>
            <p>All frames constructed with hardwood solids and laminates</p>
          </li>
          <li>
            <p>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </p>
          </li>
          <li>
            <p> Arms, backs and seats are structurally reinforced</p>
          </li>
        </ul>
        <div className="hekto__uniqueFeatures-content_cta">
          <button>Add To Cart</button>
          <p>B&B Italian Sofa</p>
          <p>$32.00</p>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;
