"use client"
import { useSearchParams, useParams } from "next/navigation";
import { useState } from "react";
import Layout from "@/components/layout/Layout"
import "./PackageDetail.css";
const packages = {
  "survival-park-pro": {
    title: "SURVIVAL PARK PRO",
    price: "#15,000",
    image:"/assets/img/banner/m-banner2.jpeg",
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
  },
  "smart-corper": {
    title: "SMART CORPER",
    image:"/assets/img/banner/m-banner1.jpeg",
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
  },
  "platoon-commander-package": {
    title: "PLATOON COMMANDER PACKAGE",
    price: "#25,000",
    image:"/assets/img/banner/m-banner3.jpeg",
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
  },
};

const PackageDetail = () => {
  const { slug } = useParams();
  const pack = packages[slug];

  const [shirtSize, setShirtSize] = useState("");
  const [shortsSize, setShortsSize] = useState("");
  const [shoeSize, setShoeSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!pack) return <p>Loading...</p>;

  const handleAddToCart = () => {
    const selected = {
      package: pack.title,
      shirtSize,
      shortsSize,
      shoeSize,
      quantity,
    };
    console.log("Added to cart:", selected);
  };

  return (
    <>
    
     <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Packages">
      <div className="package-detail-container">
        <div className="package-left">
          <img src={pack.image} alt={pack.title} className="package-image" />
          <h2 className="package-title">{pack.title}</h2>
          <ul className="package-items">
            {pack.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="package-right">
          <h1 className="package-title">{pack.title}</h1>
          <p className="package-price">{pack.price}</p>

          <div className="form-section">
            <div className="form-group">
              <label>T-SHIRT SIZE *</label>
              <select value={shirtSize} onChange={(e) => setShirtSize(e.target.value)}>
                <option value="">Select</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            <div className="form-group">
              <label>SHORTS WAIST SIZE *</label>
              <select value={shortsSize} onChange={(e) => setShortsSize(e.target.value)}>
                <option value="">Select</option>
                {[21, 22, 24, 26, 28, 30, 32, 34, 36].map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>SHOE SIZE *</label>
              <select value={shoeSize} onChange={(e) => setShoeSize(e.target.value)}>
                <option value="">Select</option>
                {[35, 36, 37, 38, 39, 40, 41, 42, 43, 44].map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            <div className="form-group horizontal">
              <label>Quantity</label>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <p className="final-price">Final total: {pack.price}</p>

            <button className="add-to-cart" onClick={handleAddToCart}>
              ADD TO CART
            </button>

            <div className="package-meta">
              <p>SKU: {pack.sku}</p>
              <p>Category: PACKAGES</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    </>
  );
};

export default PackageDetail;
