import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FancyTextBlock21 = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="row align-items-center">
        <div
          className="col-lg-6 col-md-7 m-auto"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="img-meta">
            <img src="images/media/img_77.jpg" alt="media" className="m-auto" />
            <img
              src="images/shape/138.svg"
              alt="shape"
              className="shapes shape-one"
            />
          </div>
        </div>
        {/* End .col */}

        <div
          className="col-xl-5 col-lg-6 ml-auto"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="text-wrapper md-pt-50">
            

            
            <p>
             Livania Solar Park
            </p>
            <span>
              Nation’s first AI empowered solar power plant located in Solapur, Maharashtra. At an altitude of 497m Livania Solar Park enjoys one of the highest irradiance in the country, which means high productivity in terms of power generation.

            </span>
          </div>
          {/* /.text-wrapper */}
        </div>
        {/* End .col */}
      </div>

      
    </>
  );
};

export default FancyTextBlock21;
