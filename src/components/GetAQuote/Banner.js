import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import ContactButtons from "../ContactButtons";

const Wrapper = styled.div`
  background: ${(p) => p.theme.color.smokewhite};
  border-radius: 16px;
  margin: 20px;
  padding: 24px;
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    margin: 24px 40px;
    padding: 40px;
  }
  .hero-visual {
    width: 100%;
    max-width: 520px;
    display: block;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  .image {
    @media (min-width: 992px) {
      width: 45%;
    }
    h3 {
      font-family: ${(props) => props.theme.fam.bold};
      font-size: 1.15rem;
      text-align: center;
      margin-top: 12px;
      color: ${(p) => p.theme.color.ink};
    }
  }
  .text {
    @media (min-width: 992px) {
      width: 50%;
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
      <div className="image">
        <div className="hero-visual">
          <img src="/images/hero-banner.svg" alt="" />
        </div>
        <h3>Reach the engineering team</h3>
      </div>
      <div className="text">
        <Heading textColor="#2d9cdb">
          Start with a <span>call or email</span>
        </Heading>
        <Paragraph>
          Share scope, timelines, and constraints  we’ll help shape a first
          milestone. No web forms; use the buttons below to call or open your
          mail client.
        </Paragraph>
        <ContactButtons />
      </div>
    </Wrapper>
  );
}

export default Banner;
