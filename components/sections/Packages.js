import React from "react";
import "./PackageList.css";

const packages = [
  {
    title: "SURVIVAL PARK PRO",
    price: "#15,000",
    items: [
      "3-in-1 plain white T-shirt",
      "2 KK White Shorts",
      "1 Pair of White Leather Shoes",
      "1 Pair of White Rubber Shoes",
      "1 Waist Pouch",
      "1 plastic Water Bottle",
      "3 Pairs of Socks",
      "Id Card Holder",
    ],
    className: "card otondo",
  },
  {
    title: "SMART CORPER",
    price: "#20,000",
    items: [
      "3-in-1 T-shirt",
      "3 KK White Shorts",
      "1 Pair of White Leather Shoes",
      "1 Pair of White Rubber Shoes",
      "1 Waist Pouch",
      "1 Stainless Water Bottle",
      "3 Pair of white Socks",
      "Id Card Holder",
      "3 White singlet",
      "1 bathroom Towel",
    ],
    className: "card corper",
  },
  {
    title: "PLATOON COMMANDER PACKAGE",
    price: "#25,000",
    items: [
      "3-in-1 T-shirt (X2)",
      "5 KK White Shorts",
      "1 Pair of White Leather Shoes",
      "1 Pair of White Rubber Shoes",
      "1 Waist Pouch",
      "1 Stainless Water Bottle",
      "6 Pair of white Socks",
      "Id Card Holder",
      "3 White Singlet",
      "1 Face Towel",
      "1 bathroom towel",
    ],
    className: "card platoon",
  },
];

const PackageCard = ({ title, price, items, className }) => (
  <div className={className}>
    <h2 className="card-title">{title}</h2>
    <ul className="card-list">
      {items.map((item, idx) => (
        <li key={idx}> {item}</li>
      ))}
    </ul>
    <div className="other-details">
        <div className="card-price">{price}</div>
        <button className="card-button">Add to Cart</button>
    </div>
  </div>
);

const PackageList = () => {
  return (
    <div className="package-container">
      {packages.map((pkg, index) => (
        <PackageCard key={index} {...pkg} />
      ))}
    </div>
  );
};

export default PackageList;