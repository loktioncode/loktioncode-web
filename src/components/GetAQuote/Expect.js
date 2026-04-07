import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";

const Wrapper = styled.section`
  margin: 20px;
  padding: 24px;
  background: ${(props) => props.theme.color.blue4};
  color: #ffffff;
  border-radius: 12px;
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin: 20px 40px;
    padding: 5%;
  }
  h2 {
    color: #ffffff;
    @media (min-width: 992px) {
      width: 42%;
    }
    br {
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    }
  }
  .text {
    margin-top: 20px;
    position: relative;
    @media (min-width: 992px) {
      width: 50%;
      margin-top: 0;
    }
    &:before {
      width: 3px;
      height: 90%;
      content: "";
      background: ${(props) => props.theme.color.yellow};
      position: absolute;
      border-radius: 10px;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }
    .inner {
      display: flex;
      margin-bottom: 20px;
      label {
        height: 30px;
        width: 30px;
        min-width: 30px;
        object-fit: contain;
        display: flex;
        z-index: 2;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: ${(props) => props.theme.color.blue3};
        color: #ffffff;
        border: 2px solid ${(props) => props.theme.color.yellow};
        font-family: ${(props) => props.theme.fam.bold};
        font-size: 14px;
      }
      .text-right {
        padding-left: 30px;
        h3 {
          font-family: ${(props) => props.theme.fam.bold};
          margin-bottom: 10px;
          font-size: 1.15rem;
        }
        p {
          color: rgba(255, 255, 255, 0.95);
        }
      }
    }
  }
`;

function Expect() {
  return (
    <Wrapper>
      <Heading>
        What to expect. <br />
        How we engage
      </Heading>
      <div className="text">
        <div className="inner">
          <label>1</label>
          <div className="text-right">
            <h3>Reach out</h3>
            <Paragraph>
              Call or email with a short brief: problem, timeline, and any
              hardware or compliance constraints.
            </Paragraph>
          </div>
        </div>
        <div className="inner">
          <label>2</label>
          <div className="text-right">
            <h3>We respond quickly</h3>
            <Paragraph>
              You’ll hear back with clarifying questions and suggested next
              steps  usually within one business day.
            </Paragraph>
          </div>
        </div>
        <div className="inner">
          <label>3</label>
          <div className="text-right">
            <h3>Scope & proposal</h3>
            <Paragraph>
              We align on architecture, risks, and milestones, then share a
              proposal that matches the work  not a generic template.
            </Paragraph>
          </div>
        </div>
        <div className="inner">
          <label>4</label>
          <div className="text-right">
            <h3>Build & iterate</h3>
            <Paragraph>
              We ship in slices: visible progress, testable hardware or software,
              and room to adjust as we learn in the field.
            </Paragraph>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Expect;
