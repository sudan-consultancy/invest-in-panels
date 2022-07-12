import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
  {
    icon: "194",
    startCount: "0",
    endCount: "27",
    type: "K",
    
    meta: "Cost of Panel",
  
  },
  {
    icon: "195",
    startCount: "0",
    endCount: "10",
    type: "%",
    meta: "Estimated IRR (excluding tax benefits)",
  },
  {
    icon: "196",
    startCount: "0",
    endCount: "3.85",
    type: "/unit",
        decimals: 2,
    meta: "Net income per green unit generated",
  },
  {
    icon: "197",
    startCount: "0",
    endCount: "14900",

    type: "KG",
    meta: "Reduction in carbon emission",
  },
   {
    icon: "199",
    startCount: "0",
    endCount: "25",

    type: "years",
    meta: "Contract term",
  }
];

const FeatureCounter = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      {counterUpContent.map((val, i) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="counter-box-six text-center mt-40">
            <div className="icon d-flex align-items-end justify-content-center">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h2 className="number">
              <span className="timer">
                {" "}
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={1}
                  redraw={true}
                  decimals = {val.decimals ? val.decimals : null}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>{" "}
              </span>{" "}
              {val.type}
            </h2>
            <p>{val.meta}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureCounter;
