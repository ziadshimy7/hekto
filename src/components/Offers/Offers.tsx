import React from "react";
import "./Offers.scss";
import supportImage from "../../assets/all-day-support-image.png";
import cashbackImage from "../../assets/cashback-image.png";
import premiumQualityImage from "../../assets/quality-image.png";
import freeDeliveryImage from "../../assets/free-delivery-image.png";
interface OffersDetails {
  text: string;
  description: string;
  image: string;
}
const offersDetails = [
  {
    text: "Free Delivery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    image: freeDeliveryImage,
  },
  {
    text: "Cashback",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    image: cashbackImage,
  },
  {
    text: "Premium Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    image: premiumQualityImage,
  },
  {
    text: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    image: supportImage,
  },
];
const Offers: React.FC = () => {
  return (
    <div className="hekto__offers">
      <h2>What Hekto Offers</h2>
      <div className="hekto__offers-container">
        {offersDetails.map((offer, idx) => {
          return (
            <div key={offer.text} className="hekto__offer">
              <img src={offer.image} alt={offer.text} />
              <h6>{offer.text}</h6>
              <p>{offer.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
