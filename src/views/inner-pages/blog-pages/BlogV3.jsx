import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/header/Header";
import BlogStyle3 from "../../../components/blog/BlogStyle3";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/CopyRight";
import BlogSidebarClassic from "../../../components/blog/BlogSidebarClassic";

const BlogV3 = () => {
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Blog V3 || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}
      <Header />
      {/* End Header */}

      {/* =============================================
				Fancy Hero Two
			==============================================  */}
      <div className="fancy-hero-two">
        <div className="bg-wrapper">
          <div className="container">
            <div className="page-title">Blog</div>
            <div className="row">
              <div className="col-xl-8 col-lg-10 m-auto">
                <h1 className="heading md-p0">Check our company inside news</h1>
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* =====================================================
            Feature Blog One
        ===================================================== */}
      <div className="blog-page-white-bg blog-v3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="feature-blog-three">
                <BlogStyle3 />
              </div>

              <div className="page-pagination-one pt-15">
                <ul className="d-flex align-items-center">
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-left"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="active">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li> &nbsp; ... &nbsp;</li>
                  <li>
                    <a href="#">13</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* /.page-pagination-one */}
            </div>
            {/* End .col */}
            <div className="col-lg-4 col-md-6">
              <BlogSidebarClassic />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.feature-blog-one */}

      <div className="fancy-short-banner-two pt-130 md-pt-70">
        <div className="container">
          <div className="content-wrapper">
            <div
              className="
                  bg-wrapper
                  d-lg-flex
                  align-items-center
                  justify-content-between
                "
            >
              <h2 className="font-gilroy-bold">
                Don’t find the answer? contact us for any query.
              </h2>
              <a href="contact-us(light).html">Contact us</a>
              <div className="bubble-one"></div>
              <div className="bubble-two"></div>
              <div className="bubble-three"></div>
              <div className="bubble-four"></div>
              <div className="bubble-five"></div>
            </div>
            {/* /.bg-wrapper */}
          </div>
          {/*  /.content-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-short-banner-two */}

      <footer className="theme-footer-one pt-130 md-pt-70">
        <div className="top-footer">
          <div className="container">
            <Footer />
          </div>
          {/* /.container */}
        </div>
        {/* /.top-footer */}

        <div className="container">
          <div className="bottom-footer-content">
            <CopyRight />
          </div>
          {/*  /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default BlogV3;
