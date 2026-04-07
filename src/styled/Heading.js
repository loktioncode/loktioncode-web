import React from "react";
import styled from "styled-components";

const Wrapper = styled.h2`
  color: ${(props) => props.theme.color.ink};
  font-size: clamp(1.65rem, 4vw, 2.75rem);
  font-family: ${(props) => props.theme.fam.bold};
  font-weight: 800;
  line-height: 1.15;
  @media (min-width: 768px) {
    font-size: clamp(1.85rem, 3.5vw, 2.85rem);
  }
  span {
    color: ${(props) => props.textColor || props.theme.color.sky};
  }
`;

function Heading({ children, textColor }) {
  return <Wrapper textColor={textColor}>{children}</Wrapper>;
}

export default Heading;
