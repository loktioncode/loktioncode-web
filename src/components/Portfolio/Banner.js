import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import pic1 from '../../assets/doing1.webp';

const Wrapper = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  margin-top: 20px;
  margin:20px;
  @media(min-width:992px){
  display:flex;
  justify-content:space-between;
  margin:20px 40px;
  align-items:center;
  
}

  .text {
    padding: 20px;
    @media(min-width:992px){
      width:40%;
      padding: 15% 5%;
    }
    h2 {
      text-align: unset;
    }
    p {
      margin-bottom: 15px;
    }
  }
  img{
    width:100%;
    @media(min-width:992px){
      width:50%;
    }
  }
`;

function Banner() {
  return (
    <Wrapper>
      <div className="text">
        <Heading>Portfolio</Heading>
        <Paragraph>
          Explore our diverse portfolio showcasing innovative solutions in AI, IoT, and custom software development. Each project represents our commitment to delivering cutting-edge technology solutions that drive business success.
        </Paragraph>
      </div>
      <img src={pic1} alt='Loktion Code Mobile Design' />
    </Wrapper>
  );
}

export default Banner;
