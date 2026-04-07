import React from "react";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import Paragraph from "./Paragraph";

const Wrapper = styled.div`
  background: ${(props) => props.bgColor};
  color: #ffffff;
  border-radius: 22px;
  padding: 28px 24px 32px;
  margin: 0 auto;
  position: relative;
  max-width: 450px;
  transition: transform 0.35s ${(p) => p.theme.ease.out},
    box-shadow 0.35s ${(p) => p.theme.ease.out};
  @media (min-width: 992px) {
    max-width: unset;
    min-height: 280px;
  }
  @media (min-width: 1200px) {
    padding: 36px 32px 40px;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 40px rgba(46, 38, 64, 0.18);
  }
  img {
    width: 88px;
    height: 88px;
    object-fit: contain;
  }
  h3 {
    font-family: ${(props) => props.theme.fam.bold};
    font-size: clamp(1.25rem, 2.5vw, 1.85rem);
    margin: 12px 0 14px;
    line-height: 1.2;
  }
  p {
    color: rgba(255, 255, 255, 0.95);
  }
  a.contact-link {
    color: #ffffff;
    top: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    position: absolute;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    transition: background 0.25s ${(p) => p.theme.ease.out},
      transform 0.25s ${(p) => p.theme.ease.out};
    &:hover {
      background: rgba(255, 255, 255, 0.28);
      transform: scale(1.05);
    }
  }
`;

function HipCard({ heading, text, icon, bgColor }) {
  return (
    <Wrapper bgColor={bgColor} className="hip-card">
      <a href="/#contact" className="contact-link" aria-label={`${heading}  contact`}>
        <FiArrowUpRight />
      </a>
      <img src={`/images/${icon}.svg`} alt="" />
      <h3>{heading}</h3>
      <Paragraph>{text}</Paragraph>
    </Wrapper>
  );
}

export default HipCard;
