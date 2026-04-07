import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";

const Wrapper = styled.section`
  padding: 0 20px;
  @media (min-width: 992px) {
    padding: 5%;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    align-items: flex-start;
    .inner {
      width: 58%;
      p {
        margin-bottom: 18px;
      }
    }
    .right {
      width: 38%;
      max-width: none;
      margin: 0;
    }
  }
  @media (min-width: 1200px) {
    padding: 5% 10%;
  }
  h2 {
    margin-bottom: 20px;
  }
  .right {
    width: 100%;
    max-width: 480px;
    margin: 24px auto 0;
    @media (min-width: 992px) {
      margin: 0;
      flex-shrink: 0;
    }
  }
  .visual {
    min-height: 260px;
    border-radius: 16px;
    background: linear-gradient(145deg, #ffe066 0%, #ff8a8a 40%, #7dd3fc 100%);
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(17, 19, 22, 0.08);
    &:before,
    &:after {
      content: "";
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.35);
    }
    &:before {
      width: 140px;
      height: 140px;
      top: -40px;
      right: -30px;
    }
    &:after {
      width: 100px;
      height: 100px;
      bottom: -25px;
      left: -20px;
    }
  }
`;

function Every() {
  return (
    <Wrapper>
      <div className="inner">
        <Heading>Built for systems  not slides.</Heading>
        <Paragraph>
          Loktion Code helps teams ship integrated products: the board, the
          firmware, the cloud, and the models that tie them together. We work
          where constraints are real  power budgets, radio links, dust, and
          deadlines.
        </Paragraph>
        <Paragraph>
          Our stack spans custom application development, IoT and edge computing,
          PCB design and prototyping, production-minded firmware, and applied AI
           including bespoke models and deployment to robots, drones, and
          embedded targets.
        </Paragraph>
        <Paragraph>
          We emphasise measurable outcomes: latency, accuracy in your domain,
          recovery from failure, and a path from pilot to production.
        </Paragraph>
      </div>
      <div className="right">
        <div className="visual" aria-hidden />
      </div>
    </Wrapper>
  );
}

export default Every;
