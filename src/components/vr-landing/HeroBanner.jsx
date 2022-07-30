import React from "react";

const HeroBanner = () => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h1 className="hero-heading" data-aos="fade-right">
          {/* Own explore the virtual world. */}
          Own solar panels, generate green income.
        </h1>
        <p
          className="hero-sub-heading"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          The future of solar is here for everyone - own a solar panel without a
          rooftop to generate green income, reduce carbon emission and avail tax
          benefit.
        </p>
        <del
          style={{
            fontSize: "24px",
            lineHeight: "1.83em",
            color: "#000",
            margin: "25px 4px 38px",
          }}
        >
          &#x20b9; 30,000/-
        </del>

        <span
          style={{
            opacity: "1",
            textDecoration: "underline",
            fontSize: "24px",
            lineHeight: "1.83em",
            color: "#000",
            margin: "25px 0 38px",
          }}
        >
          Early bird 10% Discount
        </span>
        <div
          className="d-lg-flex align-items-center justify-content-between pr-xl-5"
          data-aos="fade-right"
        >
          <div className="info">
            {/* Panels available{" "} */}
            <span className="d-block">
              <button
                className="d-inline theme-btn-nine"
                style={{ marginRight: "5px" }}
              >
                Own Now
              </button>{" "}
              @&nbsp;&#x20b9;&nbsp;27,000/-
              {/* <span style={{ opacity: "1", textDecoration: "underline" }}>
                Early bird 10% Discount
              </span> */}
            </span>
          </div>
          {/* <div className="price">1897</div> */}
        </div>
        {/* <a
          href="/contact"
          className="explore-btn mt-5 md-mt-40"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Contact now
        </a> */}
      </div>
    </div>
  );
};

export default HeroBanner;
