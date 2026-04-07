import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import { FiArrowUpRight } from "react-icons/fi";

const Wrapper = styled.section`
  padding: 5% 20px;
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 26px;
    .about-inner {
      width: 58%;
    }
  }
  @media (min-width: 1200px) {
    padding: 4% 8%;
  }
  h2 {
    margin-bottom: 20px;
    @media (min-width: 992px) {
      line-height: 1.2;
    }
  }
  p {
    margin-bottom: 12px;
  }
  a {
    font-family: ${(props) => props.theme.fam.bold};
    color: ${(props) => props.theme.color.blue};
    text-transform: uppercase;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    line-height: 1.4;
    margin-top: 12px;
    @media (min-width: 768px) {
      font-size: 22px;
    }
    svg {
      color: ${(props) => props.theme.color.orange};
    }
  }
  .about-visual {
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid rgba(15, 17, 20, 0.08);
    img {
      width: 100%;
      display: block;
      height: auto;
    }
    @media (min-width: 992px) {
      width: 40%;
    }
  }
`;

function About() {
  return (
    <Wrapper id="about">
      <div className="about-inner">
        <Heading textColor="#3cb878">
          From sketch to <span>field-tested</span> systems.
        </Heading>
        <Paragraph>
          LOXIONCODE is an engineering studio focused on integrated products:
          software that meets metal, radios that stay linked, and models that
          are trained for your environment  not a generic benchmark.
        </Paragraph>
        <Paragraph>
          Led by Elisha Bere, we work with teams that need proof, not slides:
          prototypes, pilots, and paths to scale.
        </Paragraph>
        <a href="#team">
          Meet the team <FiArrowUpRight />
        </a>
      </div>
      <div className="about-visual">
        <img src="/images/hero-tech.svg" alt="" />
      </div>
    </Wrapper>
  );
}

export default About;
