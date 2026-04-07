import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Wrapper = styled.div`
  background: ${(p) => p.theme.color.smokewhite};
  border-radius: 16px;
  margin-top: 20px;
  border: 1px solid rgba(46, 38, 64, 0.06);
  overflow: hidden;
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
  }
  .text {
    padding: 24px 20px;
    @media (min-width: 992px) {
      padding: 48px 5%;
    }
    @media (min-width: 1200px) {
      padding: 80px 5%;
    }
    h2 {
      text-align: unset;
    }
    p {
      margin-bottom: 15px;
    }
  }
  img {
    @media (min-width: 992px) {
      width: 45%;
    }
    @media (min-width: 1200px) {
      width: 55%;
    }
  }
`;

function GreatDiv({ title, text1, text2, image }) {
  return (
    <Wrapper>
      <div className="text">
        <Heading>{title}</Heading>
        <Paragraph>{text1}</Paragraph>
        <Paragraph>{text2}</Paragraph>
      </div>
      <img src={image} alt="" />
    </Wrapper>
  );
}

export default GreatDiv;
