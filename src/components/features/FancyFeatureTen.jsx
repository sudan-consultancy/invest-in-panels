import React from "react";
import { Link } from "react-router-dom";

const FeaturesContent = [
  {
    bgColor: "#FFEBDB",
    icon: "caution",
    title: "Low risk, High returns",
    desc: ` As offtake on the asset is assured by (___)PPA`,
    dataDealy: "0",
  },
  {
    bgColor: "#E0F8F8",
    icon: "booking",
    title: "Digitally managed",
    desc: `From paperwork, to payment collection, on a single digital interface.`,
    dataDealy: "100",
  },
  {
    bgColor: "#F7EDFF",
    icon: "money-bag",
    title: "Save tax",
    desc: `Offset depreciation against other taxable income.`,
    dataDealy: "200",
  },

  {
    bgColor: "#FFEBDB",
    icon: "dollar",
    title: "Liquidity",
    desc: `In terms of secondary sale marketplace`,
    dataDealy: "0",
  },
  {
    bgColor: "#E0F8F8",
    icon: "carbon-footprint",
    title: "Reducing Carbon Footprint",
    desc: `From paperwork, to payment collection, on a single digital interface.`,
    dataDealy: "100",
  },

];

const FancyFeatureTen = () => {
  return (
    <div className="row justify-content-center mt-35 md-mt-20">
      {FeaturesContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDealy}
          key={i}
        >
          <div className="block-style-fifteen mt-40">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: val.bgColor }}
            >
              <img src={`images/icon/${val.icon}.png`} alt="icon" />
            </div>
            <h3>{val.title}</h3>
            <p>{val.desc}</p>
            <Link to="/solution-management" className="mt-30">
              {" "}
              <img src="images/icon/69.svg" alt="icon" />
            </Link>
          </div>
          {/* /.block-style-ten */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureTen;
