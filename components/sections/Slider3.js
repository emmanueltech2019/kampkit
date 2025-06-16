'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 8000,
    },

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.greenslider-pagination',
        clickable: true,
    },

}

import Link from "next/link"

export default function Slider3() {
    return (
        <>
            <section className="slider-area">
                <div className="secondary-slider p-relative">
                    <div className="swiper-container greenslider-active">
                        <Swiper {...swiperOptions}>
                            <SwiperSlide className="slider-bg-2 slider-3">
                                <div className="container">
                                    <div className="row p-relative justify-content-xl-end align-items-center">
                                        <div className="col-xl-5 col-lg-6 col-md-6">
                                            <div className="tpslidertwo__content slider-content-3">
                                                <h3 className="tpslidertwo__title mb-10">VACUUM BOTTLE
CUSTOMIZATION FEATURE</h3>
                                                <p>Personalize your hydration with our Vacuum Bottle Customization Feature.</p>
                                                <div className="tpslidertwo__slide-btn d-flex align-items-center ">
                                                    <Link className="tp-btn banner-animation mr-25" href="/shop">Shop Now <i className="fal fa-long-arrow-right" /></Link>
                                                    <span>Start From <br /> <b>₦10,000</b></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-6 col-md-6 d-none d-md-block">
                                            <div className="tpsliderthree__img p-relative text-end pt-55">
                                                <img src="/assets/img/slider/vacumm.png" alt="" />
                                                <div className="tpslidertwo__img-shape">
                                                    <img src="/assets/img/slider/fasion-tag-02.png" alt="tag" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slider-bg-2 slider-3">
                                <div className="container">
                                    <div className="row p-relative justify-content-xl-end align-items-center">
                                        <div className="col-xl-5 col-lg-6 col-md-6">
                                            <div className="tpslidertwo__content slider-content-3">
                                                <h3 className="tpslidertwo__title mb-10">White Shirt</h3>
                                                <p>White Shirt offers a clean, crisp look for any occasion. </p>
                                                <div className="tpslidertwo__slide-btn d-flex align-items-center ">
                                                    <Link className="tp-btn banner-animation mr-25" href="/shop-2">Shop Now <i className="fal fa-long-arrow-right" /></Link>
                                                    <span>Start From <br /> <b>₦10,000</b></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-6 col-md-6 d-none d-md-block">
                                            <div className="tpsliderthree__img p-relative text-end pt-55">
                                                <img src="/assets/img/slider/blank_isolated_white_and_black_t_shirt_front_view.png" alt="" />
                                                <div className="tpslidertwo__img-shape">
                                                    <img src="/assets/img/slider/fasion-tag-02.png" alt="tag" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slider-bg-2 slider-3">
                                <div className="container">
                                    <div className="row p-relative justify-content-xl-end align-items-center">
                                        <div className="col-xl-5 col-lg-6 col-md-6">
                                            <div className="tpslidertwo__content slider-content-3">
                                                <h3 className="tpslidertwo__title mb-10">White Shoe</h3>
                                                <p>Step out in style with our White Shoe — sleek, versatile, and built for comfort. </p>
                                                <div className="tpslidertwo__slide-btn d-flex align-items-center ">
                                                    <Link className="tp-btn banner-animation mr-25" href="/shop-2">Shop Now <i className="fal fa-long-arrow-right" /></Link>
                                                    <span>Start From <br /> <b>₦10,000</b></span>   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 col-lg-6 col-md-6 d-none d-md-block">
                                            <div className="tpsliderthree__img p-relative text-end pt-55">
                                                <img src="/assets/img/slider/new-pair-white-sneakers-isolated-white.png" alt="" />
                                                <div className="tpslidertwo__img-shape">
                                                    <img src="/assets/img/slider/fasion-tag-02.png" alt="tag" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="greenslider-pagination" />
                </div>
            </section>
        </>
    )
}
