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
          <Link to="/team-details-v1" className="team-member" style={{
    borderRadius: '50%',
    height: '250px',
    margin: '70px auto',
    width: '250px',
    textAlign: 'center',
    /* background: #fff; */
    /* border-radius: 10px; */
    overflow: 'hidden',
    paddingBottom: "30px",
    display:" block"
}}>
            <div className="img-holder">
              <img style = {{maxHeight: "452px", objectFit: "cover"}} src={`images/team/${item.img}.jpeg`} alt="team" />
            </div>
            {/* <h6 className="name">{item.name}</h6>
            <div className="position">{item.designation}</div> */}
          </Link>
          <h6 className="name" style={{fontSize:"24px",textAlign:"center"}}>{item.name}</h6>
            <div className="position" style={{fontSize:"16px",textAlign:"center",color: "rgba(42, 42, 42, 0.54)"}}>{item.designation}</div>
        </div>
      ))}
    </>
  );
};

export default TeamFive;
