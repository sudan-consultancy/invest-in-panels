import React from "react";

const featuresContent = [
  {
    icon: "144",
    title: "Environment",
    desc: "Your contribution to save the environment.",
    delayAnimation: "",
  },
  {
    icon: "145",
    title: "ROI",
    desc: "Better returns as compared to existing bank rates.",
    delayAnimation: "100",
  },
  {
    icon: "146",
    title: "PPA",
    desc: "Backed by high grade Power-Purchase Agreements (PPAs).",
    delayAnimation: "200",
  },
  {
    icon: "147",
    title: "Clients",
    desc: "10-15 PPAs with major establishments assuring purchase of every unit generated.",
    delayAnimation: "300",
  },
];

const FancyFeatureTewentySeven = () => {
  return (
    <div className="row">
      {featuresContent.map((val, i) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <div className="block-style-twentySeven">
            <div className="icon d-flex align-items-end justify-content-center">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h4 className="font-gordita">{val.title}</h4>
            <p>{val.desc}</p>
          </div>
          {/* /.block-style-twentySeven */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureTewentySeven;
