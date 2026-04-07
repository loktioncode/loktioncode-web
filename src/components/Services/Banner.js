import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
const Wrapper = styled.div`
  background: ${(p) => p.theme.color.smokewhite};
  border-radius: 16px;
  margin: 16px 20px 0;
  overflow: hidden;
  border: 1px solid rgba(46, 38, 64, 0.06);
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    margin: 20px 40px 0;
  }
  .hero-visual {
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    display: block;
    border-radius: 12px;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  .text {
    padding: 24px 20px 28px;
    @media (min-width: 992px) {
      padding: 40px;
      flex: 1;
    }
    h2 {
      text-align: left;
    }
    p {
      margin-bottom: 12px;
    }
  }
`;

function Banner() {
  return (
    <Wrapper>
      <div className="text">
        <Heading textColor="#FF6B6B">
          Engineering services <span>under one roof</span>
        </Heading>
        <Paragraph>
          From custom software and cloud systems to IoT, PCB bring-up, firmware,
          robotics, UAVs, and tailored AI models  we design for integration,
          not hand-offs.
        </Paragraph>
      </div>
      <div className="hero-visual">
        <img src="/images/hero-banner.svg" alt="" />
      </div>
    </Wrapper>
  );
}

export default Banner;
