import React from "react";
import styled from "styled-components";
import Paragraph from "../../styled/Paragraph";
import ContactButtons from "../ContactButtons";

const Title = styled.h2`
  font-family: ${(p) => p.theme.fam.bold};
  font-weight: 800;
  font-size: clamp(1.5rem, 3.5vw, 2.25rem);
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 12px;
`;

const Wrapper = styled.section`
  margin: 40px 20px 60px;
  background: linear-gradient(
    125deg,
    ${(props) => props.theme.color.blue3} 0%,
    ${(props) => props.theme.color.berry} 100%
  );
  border-radius: 16px;
  padding: 36px 24px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    padding: 48px 8%;
    margin: 50px 40px 80px;
  }
  .hero-visual {
    width: 100%;
    max-width: 420px;
    border-radius: 12px;
    overflow: hidden;
    @media (min-width: 992px) {
      width: 42%;
    }
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  p {
    color: rgba(255, 255, 255, 0.95);
    max-width: 520px;
  }
  .inner {
    @media (min-width: 992px) {
      width: 50%;
    }
  }
`;

function How() {
  return (
    <Wrapper>
      <div className="hero-visual">
        <img src="/images/hero-banner.svg" alt="" />
      </div>
      <div className="inner">
        <Title>Start with a conversation</Title>
        <Paragraph>
          Share goals, constraints, and timelines  we’ll suggest a sensible
          first milestone. Reach us directly by phone or email (no forms).
        </Paragraph>
        <ContactButtons />
      </div>
    </Wrapper>
  );
}

export default How;
