"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import "./PackageList.css";

const packages = [
    {
    title: "SURVIVAL PARK PRO",
    slug: "survival-park-pro",
    image: "/assets/img/banner/m-banner2.jpeg",
    price: { 
      "min": 15000,
      "max": 15000
    },
  },
  {
    title: "SMART CORPER",
    slug: "smart-corper",
    image: "/assets/img/banner/m-banner1.jpeg",
    price: { 
      "min": 20000,
      "max": 20000
    },
  },

  {
    title: "Elite Camp Kit",
    slug: "elite-camp-kit",
    image: "/assets/img/banner/m-banner3.jpeg",
    price: { 
      "min": 25000,
      "max": 25000
    },
  },
];

const PackageList = () => {
    const router = useRouter();

  const handleClick = (slug) => {
    router.push(`/packages/${slug}`);
  };

  return (
    <div className="packages-grid">
  {packages.map((pkg, index) => (
    <div
      key={index}
      className="package-card"
      onClick={() => router.push(`/packages/${pkg.slug}`)}
    >
      <Image
        src={pkg.image}
        alt={pkg.title}
        width={400}
        height={250}
        className="package-image"
      />
      <div className="package-info">
        <h2 className="package-title">{pkg.title}</h2>
        <p className="package-price">{pkg.price.min}</p>
      </div>
    </div>
  ))}
</div>
  );
};

export default PackageList;
