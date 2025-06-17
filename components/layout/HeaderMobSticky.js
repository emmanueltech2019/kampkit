import Link from "next/link"
import CartShow from "../elements/CartShow"
import { useState, useEffect } from "react";

export default function HeaderMobSticky({ scroll, isMobileMenu, handleMobileMenu, isCartSidebar, handleCartSidebar }) {
      const [isLoggedIn, setIsLoggedIn] = useState(false);
const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
  setIsMounted(true);
  const token = localStorage.getItem("token");
  console.log("Token:", token);
  if (token) {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false);
  }
}, []);
    return (
        <>
            <div id="header-mob-sticky" className={`tp-md-lg-header d-md-none pt-20 pb-20 ${scroll ? "header-sticky" : ""}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-3 d-flex align-items-center">
                            <div className="header-canvas flex-auto">
                                <button className="tp-menu-toggle" onClick={handleMobileMenu}><i className="far fa-bars" /></button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="logo text-center">
                                <Link href="/"><img src="https://res.cloudinary.com/wise-solution-inc/image/upload/v1748052324/Screenshot_2025-05-24_at_02.59.44-removebg-preview_g5kpqn.png" alt="logo" style={{width:"200px"}}/></Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="header-meta-info d-flex align-items-center justify-content-end ml-25">
                                <div className="header-meta m-0 d-flex align-items-center">
                                    <div className="header-meta__social d-flex align-items-center">
                                        <button className="header-cart p-relative tp-cart-toggle" onClick={handleCartSidebar}>
                                            <i className="fal fa-shopping-cart" />
                                            <CartShow />
                                        </button>
                                        {isMounted && !isLoggedIn && (
  <button className="header-cart p-relative tp-cart-toggle" style={{padding:"10px 0px 10px 30px"}} >
    <Link href={'/sign-in'}>
    <i className="fal fa-user" />
    </Link>
  </button>
)}

{isMounted && isLoggedIn && (
  <button className="header-cart p-relative tp-cart-toggle" style={{padding:"10px 0px 10px 15px"}} onClick={() => {
    localStorage.removeItem("token");
    window.location.reload(); // or setIsLoggedIn(false)
  }}>
    <i className="fal fa-sign-out" />
  </button>
)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
