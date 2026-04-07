import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Wrapper = styled.section`
  padding: 10% 20px;
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    padding: 5%;
    .inner {
      width: 48%;
      max-width: 560px;
    }
  }
  @media (min-width: 1200px) {
    padding: 5% 12%;
  }
  h2 {
    margin-bottom: 24px;
    @media (min-width: 992px) {
      max-width: 420px;
    }
  }
  p {
    margin-bottom: 18px;
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
    margin-top: 8px;
    @media (min-width: 768px) {
      font-size: 24px;
    }
    svg {
      color: ${(props) => props.theme.color.orange};
    }
  }
`;

function View() {
  return (
    <Wrapper>
      <Heading>Capabilities & delivery</Heading>
      <div className="inner">
        <Paragraph>
          Explore how we structure engagements  from discovery and architecture
          to prototypes, hardening, and handover  across software, hardware, and
          AI.
        </Paragraph>
        <Paragraph>
          If you already know the scope, we’ll align on milestones; if you’re
          exploring, we’ll help de-risk the unknowns first.
        </Paragraph>
        <Link to="/services">
          Explore services <FiArrowUpRight />
        </Link>
      </div>
    </Wrapper>
  );
}

export default View;
