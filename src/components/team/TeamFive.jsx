import React from "react";
import { Link } from "react-router-dom";

const TeamContent = [
  {
    designation: "Founder and CEO",
    name: "Kaustubh Vagal",
    img: "kaustubh",
    animationDelay: "200",
  },
  {
    designation: "Co-Founder and COO",
    name: "Rajesh Vagal",
    img: "rajesh",
    animationDelay: "250",
  },
  {
    designation: "Finance",
    name: "Pravin Reddy",
    img: "praveen",
    animationDelay: "300",
  },
  {
    designation: "VP, Technology",
    name: "Prabjyot Sudan",
    img: "prabjyot",
    animationDelay: "50",
  },
  {
    designation: "Operations",
    name: "Advaitaa Shinde",
    img: "advaitaa",
    animationDelay: "100",
  },
   {
    designation: "Marketing",
    name: "Ankita Padnekar",
    img: "ankita",
    animationDelay: "100",
  }
];

const TeamFive = () => {
  return (
    <>
      {TeamContent.map((item, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animationDelay}
         
          key={i}
        >
          <Link to="/team-details-v1" className="team-member">
            <div className="img-holder">
              <img style = {{maxHeight: "452px", objectFit: "cover"}} src={`images/team/${item.img}.jpeg`} alt="team" />
            </div>
            <h6 className="name">{item.name}</h6>
            <div className="position">{item.designation}</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TeamFive;
