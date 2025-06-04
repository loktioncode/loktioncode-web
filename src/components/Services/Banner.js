import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import banner from '../../assets/deliverables/banner.webp'

const Wrapper = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  margin-top: 20px;
  margin:0 20px;
  @media(min-width:992px){
    display:flex;
    align-items:center;
    margin:0 40px;
  }
  img{
    width:100%;
    max-width:600px;
    margin:0 auto;
    display:block;
  }
  .text {
    padding: 20px;
    h2 {
      text-align: unset;
    }
    p {
      margin-bottom: 15px;
    }
  }
`;

function Banner() {
  return (
    <Wrapper>
      <div className="text">
        <Heading>
          Some Days We're Heroes, <br /> Sometimes We Do The Following{" "}
        </Heading>
        <Paragraph>
          At LOKTIONCODE, we specialize in delivering cutting-edge digital solutions that drive business growth. Our expertise in AI, IoT, and custom software development helps businesses transform their operations and stay ahead in the digital landscape.
        </Paragraph>
      </div>
      <img src={banner} alt="Loktion Code Blocks" />
    </Wrapper>
  );
}

export default Banner;
