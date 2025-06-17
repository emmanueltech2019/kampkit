"use client";
import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Toast from "@/components/elements/Alert";
import axios from "axios";
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [placeholder.toLowerCase().replace(/\s/g, "")]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // You can make an API call here
    axios
      .post("http://localhost:4000/api/auth/register", formData)
      .then((response) => {
        Toast.fire({
          icon: "success",
          text: "Register Successfully",
        }).then(() => {
          window.location.replace("/sign-in")
        });
      })
      .catch((error) =>
        Toast.fire({
          icon: "error",
          text: `${error.response.data.message}`,
        }).then(() => {
            // console.log(error)
          window.location.reload();
        })
      );
  };
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Sign Up">
        <section className="track-area pt-80 pb-40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-sm-12">
                <div className="tptrack__product mb-40">
                  <div className="tptrack__thumb">
                    <img src="/assets/img/banner/sign-bg.jpg" alt="" />
                  </div>
                  <form
                    className="tptrack__content grey-bg-3"
                    onSubmit={handleSubmit}
                  >
                    <div className="tptrack__item d-flex mb-20">
                      <div className="tptrack__item-icon">
                        <img src="/assets/img/icon/sign-up.png" alt="Sign Up" />
                      </div>
                      <div className="tptrack__item-content">
                        <h4 className="tptrack__item-title">Sign Up</h4>
                        <p>
                          Your personal data will be used to support your
                          experience throughout this website, to manage access
                          to your account.
                        </p>
                      </div>
                    </div>

                    <div className="tptrack__id mb-10">
                      <div>
                        <span>
                          <i className="fal fa-user" />
                        </span>
                        <input
                          type="text"
                          placeholder="First Name"
                          value={formData.firstname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="tptrack__id mb-10">
                      <div>
                        <span>
                          <i className="fal fa-user" />
                        </span>
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={formData.lastname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="tptrack__id mb-10">
                      <div>
                        <span>
                          <i className="fal fa-phone" />
                        </span>
                        <input
                          type="tel"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="tptrack__id mb-10">
                      <div>
                        <span>
                          <i className="fal fa-envelope" />
                        </span>
                        <input
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="tptrack__email mb-10">
                      <div>
                        <span>
                          <i className="fal fa-key" />
                        </span>
                        <input
                          type="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="tpsign__account">
                      <Link href="/sign-in">Already Have Account?</Link>
                    </div>

                    <div className="tptrack__btn">
                      <button
                        type="submit"
                        className="tptrack__submition tpsign__reg"
                      >
                        Register Now <i className="fal fa-long-arrow-right" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default SignUpForm;
