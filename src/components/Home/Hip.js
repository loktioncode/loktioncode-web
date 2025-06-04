import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import HipCard from "../../styled/HipCard";

const Wrapper = styled.section`
  padding: 10% 20px;
  text-align: left;
  @media (min-width: 1200px) {
    padding: 10% 8%;
  }
  h2 {
    margin-bottom: 30px;
    @media (min-width: 992px) {
      width: 50%;
    }
  }

  .top {
    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2{
        margin-bottom:0;
      }
      p {
        width: 50%;
      }
    }
  }
  .bottom {
    margin-top: 30px;
    @media (min-width: 768px) {
      display: flex;
      gap: 15px;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    @media (min-width: 992px) {
      gap: 30px;
    }
    .hip-card {
      @media (min-width: 768px) {
        width: 43%;
        margin-bottom: 0;
      }
      @media (min-width: 1200px) {
        width: 40%;
      }
      @media (min-width: 1400px) {
        width: 41.5%;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const hips = [
  {
    link: "services",
    heading: "Development Solutions",
    text: "Our expert team delivers cutting-edge software development services, from custom applications to enterprise solutions. We leverage the latest technologies to create scalable, secure, and efficient software that drives your business forward.",
    icon: "code",
    bgColor: "#74C3C4",
  },
  {
    link: "services",
    heading: "Branding",
    text: "We help businesses establish a strong and memorable brand identity. Our comprehensive branding services include brand strategy, visual identity design, and brand messaging that resonates with your target audience and sets you apart from competitors.",
    icon: "paint",
    bgColor: "#BD4393",
  },
  {
    link: "services",
    heading: "UI/UX Design",
    text: "Create exceptional user experiences with our UI/UX design services. We combine aesthetic appeal with functional design to create intuitive interfaces that enhance user engagement and drive conversion rates.",
    icon: "design",
    bgColor: "#20A1D2",
  },
  {
    link: "services",
    heading: "Network & Security",
    text: "Protect your digital assets with our comprehensive network and security solutions. We implement robust security measures, conduct regular audits, and provide 24/7 monitoring to ensure your systems remain secure and operational.",
    icon: "network",
    bgColor: "#E76713",
  },
];

function Hip() {
  return (
    <Wrapper>
      <div className="top">
        <Heading textColor="#20a1d2">
          We're Hip, We're Cool & <br /> We'll <span>Elevate Your Brand.</span>
        </Heading>
        <Paragraph>
          At LOKTIONCODE, we combine technical expertise with creative innovation to deliver exceptional digital solutions. Our team of experts is dedicated to helping businesses thrive in the digital age through cutting-edge technology and strategic thinking.
        </Paragraph>
      </div>
      <div className="bottom">
        {hips.map((item, i) => {
          return (
            <HipCard
              key={i}
              link={item.link}
              heading={item.heading}
              text={item.text}
              icon={item.icon}
              bgColor={item.bgColor}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Hip;
