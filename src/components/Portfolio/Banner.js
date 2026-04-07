import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 32px 20px 0;
  max-width: 1280px;
  margin: 0 auto;
  @media (min-width: 992px) {
    padding: 48px 40px 0;
  }
  h1 {
    font-family: ${(p) => p.theme.fam.bold};
    font-size: clamp(2rem, 6vw, 4rem);
    color: #131417;
    line-height: 0.95;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  p {
    font-family: ${(p) => p.theme.fam.medium};
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: #4b5563;
    max-width: 560px;
    line-height: 1.5;
    margin-bottom: 0;
  }
  .divider {
    width: 48px;
    height: 4px;
    border-radius: 99px;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
    margin: 20px 0;
  }
`;

function Banner() {
  return (
    <Wrapper>
      <h1>Our work</h1>
      <div className="divider" aria-hidden />
      <p>
        Real systems built for real constraints  field robots, farm AI, health
        infrastructure, and long-range UAVs operating across southern Africa.
      </p>
    </Wrapper>
  );
}

export default Banner;
