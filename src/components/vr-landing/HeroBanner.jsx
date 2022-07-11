import React from "react";
import "./button.css";

const HeroBanner = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h1 className="hero-heading" data-aos="fade-right">
          {/* Own explore the virtual world. */}
          Own solar panels,Earn rental income.
        </h1>
        <p
          className="hero-sub-heading"
          data-aos="fade-right"
          data-aos-delay="100"
        >
         The future of solar is here - get high rental income and tax benefits with minimum risks.
        </p>
        <div
          className="d-lg-flex align-items-center justify-content-between pr-xl-5"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="info">
          {/* Panels available{" "} */}
            {/* <span className="d-block">
               <span> Notify me!!</span>
            </span> */}
          </div>
          {/* <div className="price">1897</div> */}
        </div>
        <a
          href="/contact"
          className="explore-btn mt-5 md-mt-40"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Contact now
        </a>

        <div class="btns">
                <div class="searchbox-wrap">
                  <button>New project coming soon!<span>Notify Me</span> </button>
                </div>
              </div>
      </div>
    </div>
  );
};

export default HeroBanner;
