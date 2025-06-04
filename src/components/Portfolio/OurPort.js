import React from "react";
import styled from "styled-components";
import phone from "../../assets/portfolio/phone.webp";
import phone1 from "../../assets/portfolio/phone1.webp";
import pic1 from "../../assets/portfolio/topiax.webp";
import pic1a from "../../assets/portfolio/topiax1.webp";
import pic2 from "../../assets/portfolio/cognife.webp";
import pic2a from "../../assets/portfolio/cognife1.webp";
import pic3 from "../../assets/portfolio/slicecoffee.webp";
import slice from "../../assets/portfolio/slice.webp";
import chaps from "../../assets/portfolio/slicechaps.webp";
import kidz from "../../assets/portfolio/ekidz.webp";
import kidz1 from "../../assets/portfolio/ekidz1.webp";
import locum from "../../assets/portfolio/locum.webp";
import locum1 from "../../assets/portfolio/locum1.webp";
import PortDiv from "../../styled/PortDiv";

const Wrapper = styled.section`
    padding:20px;
    @media(min-width:992px){
      padding:40px;
    }
    .middle{
      @media(min-width:568px){
        display: flex;
        justify-content: center;
        flex-wrap:wrap;
        gap:20px;
      }
        img{
            width:100%;
            margin-bottom:20px;
            @media(min-width:568px){
        width:48%;
      }
            @media(min-width:992px){
        width:49%;
      }
        }
    }
`;

const list1 = [
  {
    img_url_small: pic1,
    img_url: pic1a,
    title: "AI Analytics Platform",
    sub_title: "AI Solution Development",
    description:
      "Developed a comprehensive AI analytics platform that helps businesses make data-driven decisions through advanced machine learning algorithms and predictive analytics. The solution includes real-time data processing, custom dashboards, and automated reporting features.",
  },
  {
    img_url_small: pic2,
    img_url: pic2a,
    title: "Smart IoT System",
    sub_title: "IoT Solution Development",
    description:
      "Created an end-to-end IoT solution for industrial monitoring and control. The system features real-time data collection, remote device management, automated alerts, and predictive maintenance capabilities, helping businesses optimize their operations.",
  },
];
const list2 = [
  {
    img_url_small: slice,
    img_url: pic3,
    title: "Enterprise Software Suite",
    sub_title: "Custom Software Development",
    direction:"row-reverse",
    description:
      "Built a comprehensive enterprise software suite that streamlines business operations. The solution includes modules for project management, resource allocation, and performance tracking, all integrated with existing business systems.",
  },
  {
    img_url_small: slice,
    img_url: chaps,
    title: "Cloud Infrastructure",
    sub_title: "Cloud Solutions",
    direction:"row-reverse",
    description:
      "Implemented a secure and scalable cloud infrastructure solution. The system provides high availability, automated backups, and disaster recovery capabilities, ensuring business continuity and data security.",
  },
  {
    img_url_small: kidz,
    img_url: kidz1,
    title: "Mobile App Platform",
    sub_title: "Mobile Development",
    direction:"row-reverse",
    description:
      "Developed a cross-platform mobile application with seamless user experience and robust backend integration. The app features real-time synchronization, offline capabilities, and advanced security measures.",
  },
  {
    img_url_small: locum,
    img_url: locum1,
    title: "Digital Transformation",
    sub_title: "System Modernization",
    description:
      "Led a comprehensive digital transformation project, modernizing legacy systems and implementing cutting-edge technology solutions. The initiative resulted in improved efficiency, reduced costs, and enhanced user experience.",
  },
];

function OurPort() {
  return (
    <Wrapper>
      {list1.map((item, i) => {
        return (
          <PortDiv
            key={i}
            img_url_small={item.img_url_small}
            img_url={item.img_url}
            title={item.title}
            description={item.description}
            sub_title={item.sub_title}
            direction=''
          />
        );
      })}
      <div className="middle">
        <img src={phone} alt="" />
        <img src={phone1} alt="" />
      </div>
      {list2.map((item, i) => {
        return (
          <PortDiv
            key={i}
            img_url_small={item.img_url_small}
            img_url={item.img_url}
            title={item.title}
            description={item.description}
            sub_title={item.sub_title}
            direction={item.direction}
          />
        );
      })}
    </Wrapper>
  );
}

export default OurPort;
