import React from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";

const Wrapper = styled.div`
  padding: 16px;
  background: #ffffff;
  border-radius: 16px;
  margin-top: 20px;
  border: 1px solid rgba(15, 17, 20, 0.08);
  box-shadow: 0 4px 14px rgba(15, 17, 20, 0.04);
  @media (min-width: 768px) {
    width: 44%;
    margin-top: 0;
  }
  @media (min-width: 992px) {
    width: 28%;
  }
  h3 {
    color: ${(props) => props.theme.color.ink};
    font-size: 1.05rem;
    line-height: 1.3;
    font-family: ${(props) => props.theme.fam.bold};
    margin: 12px 0 8px;
  }
  img {
    width: 100%;
    max-width: 120px;
    margin: 0 auto;
    display: block;
    border-radius: 50%;
  }
  .text p {
    color: ${(props) => props.theme.color.inkMuted};
  }
`;

function ClubHouseCard({ image, title, text }) {
  return (
    <Wrapper>
      <img src={image} alt="" />
      <div className="text">
        <h3>{title}</h3>
        <Paragraph>{text}</Paragraph>
      </div>
    </Wrapper>
  );
}

export default ClubHouseCard;
