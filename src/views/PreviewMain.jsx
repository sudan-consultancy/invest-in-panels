import React from "react";
import Header from "../components/preview/Header";
import DemoCounter from "../components/preview/DemoCounter";
import PreviewGallery from "../components/preview/PreviewGallery";
import Features from "../components/preview/Features";
import WhyChoose from "../components/preview/WhyChoose";
import WhyChooseTwo from "../components/preview/WhyChooseTwo";
import Support from "../components/preview/Support";
import { Helmet } from "react-helmet";
import InnerPages from "../components/preview/InnerPages";

const PreviewMain = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Preview || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

      <div className="landing-banner" id="intro">
        <Header />

        <div className="container">
          <div className="text-wrapper">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <h1>Deski - Saas & Software React + RTL Template</h1>
              </div>
            </div>
            <p className="font-rubik sub-text">
              The best site template for saas, app, landing & releted to any
              software company
            </p>
          </div>
          {/* /.text-wrapper */}

          <div className="text-center mt-5">
            <a
              href="https://deskireactrtl.ibthemespro.com/"
              className="btn-one"
              target="_blank"
            >
              RTL Version
            </a>
            <small className="pt-3 d-block">
              For <strong>Extended License</strong> at lower price, you can{" "}
              <a
                href="mailto:ibthemes21@gmail.com"
                style={{ textDecoration: "underline" }}
              >
                Contact
              </a>{" "}
              with us.
            </small>
          </div>

          <div className="block-bg-wrapper">
            <DemoCounter />
          </div>
          {/* /.block-bg-wrapper */}
        </div>

        <img
          src="images/preview/shape01.svg"
          alt="shape"
          className="shape shape-one"
        />
        <img
          src="images/preview/shape02.svg"
          alt="shape"
          className="shape shape-two"
        />
        <img
          src="images/preview/shape03.svg"
          alt="shape"
          className="shape shape-three"
        />
        <img
          src="images/preview/shape04.svg"
          alt="shape"
          className="shape shape-four"
        />
      </div>
      {/* /.landing-banner */}

      <div className="home-demo-section pt-90 mt-30">
        <div className="container">
          <h2
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-center pb-5 font-gilroy-bold"
          >
            Deski Is Ready For RTL
          </h2>
          <div className="row">
            <div
              className="col-lg-9 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="mix w-100 m0">
                <a
                  href="https://deskireactrtl.ibthemespro.com/"
                  className="img-meta h-100"
                  style={{ background: "#f5f0ee" }}
                  target="_blank"
                >
                  <img src="images/RTL.jpg" alt="rtl" />
                  <span className="view-page">Explore</span>
                </a>
              </div>
              {/* <!-- /.mix --> */}
            </div>
          </div>
        </div>
      </div>

      {/* 	Home Demo */}
      <div className="home-demo-section pt-150" id="demo">
        <img
          src="images/preview/shape05.svg"
          alt="home-demo"
          className="shape-one"
        />
        <div className="container">
          <div className="main-title text-center">
            <h2>
              <span>
                Product Demo <img src="images/preview/line01.svg" alt="demo" />
              </span>
            </h2>
            <p className="font-rubik txt-lg">
              You will get <span>15 Demo & 50+ Inner Pages</span> for only{" "}
              <span style={{ color: "#ff7373" }}>$14</span>
            </p>
            <p className="font-rubik txt-sm">More will be comming soon...</p>
          </div>

          <PreviewGallery />
        </div>
      </div>
      {/* /.home-demo-section  */}

      <div className="theme-feature mt-200" id="feature">
        <img
          src="images/preview/shape08.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/preview/shape09.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/preview/shape10.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/preview/shape11.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <div className="main-title text-center">
          <h2>
            <span>
              Useful Features{" "}
              <img src="images/preview/line02.svg" alt="feature" />
            </span>
          </h2>
        </div>
        {/* main-title */}

        <div className="main-wrapper">
          <Features />
        </div>
      </div>
      {/* /.feature-block */}

      <div className="inner-page-section" id="inner-page">
        <img
          src="images/preview/shape13.svg"
          alt="shape"
          className="shape-one"
        />
        <div className="container">
          <div
            className="main-title text-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h2>
              <span>
                Inner Pages
                <img src="images/preview/line03.svg" alt="inner pages" />
              </span>
            </h2>
            <p className="font-rubik txt-lg">
              50+ Inner pages with stunning design
            </p>
            <p className="font-rubik txt-sm">More pages coming soon…</p>
          </div>
          {/* End .main-title */}
        </div>
        <InnerPages />
      </div>
      {/* End .inner-page-secton */}

      <div className="why-choose-deski pt-90 mt-150" id="choose-us">
        <img
          src="images/preview/shape15.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/preview/shape16.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/preview/shape17.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <div className="container">
          <div className="main-title text-center mb-80 pb-70">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <h2>
                  Why choose deski for <br />
                  <span>
                    your project
                    <img src="images/preview/line04.svg" alt="line" />
                  </span>
                </h2>
              </div>
            </div>
          </div>
          {/* End main-title */}

          <div className="block-wrapper border-bottom pb-30">
            <WhyChoose />
          </div>
          {/* /.block-wrapper */}

          <div className="block-wrapper mt-70">
            <WhyChooseTwo />
          </div>
          {/* /.block-wrapper */}
        </div>
      </div>
      {/* /.why-choose-deski */}

      <div
        className="ln-support-banner"
        id="support"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <Support />
        </div>
      </div>
      {/* /.ln-support-banner */}

      <div className="ln-footer">
        <img
          src="images/preview/shape18.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/preview/shape19.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/preview/shape20.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/preview/shape21.svg"
          alt="shape"
          className="shapes shape-four"
        />

        <div className="container" data-aos="fade-up" data-aos-duration="1200">
          <h1>
            Create your first product with deski and Start your website today!
          </h1>
          <a
            href="https://themeforest.net/item/deski-saas-software-react-template/33799794"
            target="_blank"
            className="btn-one"
            rel="noreferrer"
          >
            Purchase Now
          </a>
          <small className="pt-3 d-block">
            For <strong>Extended License</strong> at lower price, you can{" "}
            <a
              href="mailto:ib-themes21@gmail.com"
              style={{ textDecoration: "underline" }}
            >
              Contact
            </a>{" "}
            with us.
          </small>
        </div>
        <img
          src="images/preview/screen-02.png"
          alt="screen"
          className="screen"
        />
      </div>
      {/* /ln-footer */}
    </div>
  );
};

export default PreviewMain;
