import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-modal";
import MegaMenuLanding from "../header/mega-menu/MegaMenuLanding";
import HeaderPopupForm from "../form/HeaderPopupForm";
import LoginPopupForm from "../form/LoginPopupForm";
import Cookie from "js-cookie";
const logo = "images/logo/vefesblacklogo.png";
// import logo from "images/logo/vefesblacklogo.png";

const HeaderLanding = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState({});

  const history = useHistory();

  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    try {
      let user = JSON.parse(Cookie.get("vf_user"));
      setUser(user);
    } catch {}
  }, [user?.id]);

  const onLogout = () => {
    history.push("/logout");
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-five fixed"
            : "theme-main-menu sticky-menu theme-menu-five"
        }
      >
        <div className="d-flex align-items-center justify-content-center">
          <div className="logo">
            <Link to="/">
              <img src={process.env.PUBLIC_URL + logo} alt="brand" />
            </Link>
          </div>
          {/* End logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                  <div className={click ? "active" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              {/* End Header */}

              <div
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <div className="navbar-nav  main-side-nav font-gordita">
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                      {/* <div className="dropdown-menu">
                        <MegaMenuLanding />
                      </div> */}
                    </li>
                    <li className="nav-item">
                      <a href="/livania" className="nav-link">
                        Livania
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/about" className="nav-link">
                        About
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="/contact" className="nav-link">
                        Contact Us
                      </a>
                    </li>

                    {user?.id && props.onDashboard && (
                      <li className="nav-item">
                        <a className="nav-link" href="/kyc">
                          KYC
                        </a>
                      </li>
                    )}
                    {user?.id && !props.onDashboard && (
                      <li className="nav-item">
                        <a className="nav-link" href="/dashboard">
                          Dashboard
                        </a>
                      </li>
                    )}
                  </div>
                  {/* <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={[
                      "home",
                      "about",
                      "why-invest",
                      "faq's",
                      // "testimonial",
                    ]}
                    currentClassName="active"
                    offset={-500}
                  > */}

                  {/* <li className="nav-item">
                      <a href="#testimonial" className="nav-link">
                        Testimonials
                      </a>
                    </li> */}
                  {/* </Scrollspy> */}
                </div>
              </div>
            </div>
          </nav>
          <div className="right-widget">
            {user?.id ? (
              <button className="demo-button" onClick={onLogout}>
                <span>Logout</span>
                <img src="images/icon/user.svg" alt="icon" />
              </button>
            ) : (
              <button className="demo-button" onClick={props.toggleModal}>
                <span>Login/Register</span>
                <img src="images/icon/user.svg" alt="icon" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <Link to="/event-organizer">
            <img src="images/logo/vefesblacklogo.png" alt="brand" />
          </Link>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="images/icon/close.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <Scrollspy
          className="navbar-nav"
          id="theme-menu-list"
          items={[
            "home",
            "about",
            "why-invest",
            "faq's",
            // "testimonial",
          ]}
          currentClassName="active"
          offset={-200}
        >
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
            {/* <div className="dropdown-menu">
                        <MegaMenuLanding />
                      </div> */}
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>

          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            {user?.id && props.onDashboard && (
              <a className="nav-link" href="/kyc">
                KYC
              </a>
            )}
            {user?.id && !props.onDashboard && (
              <a className="nav-link" href="/dashboard">
                Dashboard
              </a>
            )}
          </li>

          {/* <li className="nav-item">
            <a href="#testimonial" className="nav-link" onClick={handleClick}>
              Testimonials
            </a>
          </li> */}
        </Scrollspy>
      </div>
      {/* Mobile Menu End */}

      <Modal
        isOpen={props.showModal}
        onRequestClose={props.toggleModal}
        contentLabel="My dialog"
        className="custom-modal  modal-contact-popup-one"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="box_inner ">
          <main className="main-body box_inner modal-content clearfix" style={{overflow: "scroll"}}>
            <button className="close" onClick={props.toggleModal}>
              <img src="images/icon/close.svg" alt="close" />
            </button>
            {/* End close icon */}

            <div className="left-side">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="row">
                  <div className="col-xl-10 col-lg-8 m-auto">
                    <blockquote>
                      “I never dreamed about success. I worked for it.”
                    </blockquote>
                    <span className="bio">—Estée Lauder</span>
                  </div>
                </div>
                <img
                  src="images/assets/ils_18.svg"
                  alt=""
                  className="illustration mt-auto"
                />
              </div>
            </div>
            {/* /.left-side */}

            <div className="right-side">
              <h2 className="form-title">{isLogin ? "Register" : "Login"}</h2>
              {isLogin ? (
                <HeaderPopupForm toggleLogin={toggleLogin} />
              ) : (
                <LoginPopupForm toggleLogin={toggleLogin} />
              )}
            </div>
            {/*  /.right-side */}
          </main>
          {/* /.main-body */}
        </div>
      </Modal>
      {/* End  Modal For Request a demo */}
    </>
  );
};

export default HeaderLanding;
