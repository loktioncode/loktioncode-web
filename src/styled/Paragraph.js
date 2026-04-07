import React from "react";
import styled from "styled-components";

const Wrapper = styled.p`
  color: ${(props) => props.theme.color.inkMuted};
  font-size: 15px;
  font-family: ${(props) => props.theme.fam.medium};
  font-weight: 500;
  line-height: 1.65;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.75;
  }
`;

function Paragraph({ children, className }) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default Paragraph;
