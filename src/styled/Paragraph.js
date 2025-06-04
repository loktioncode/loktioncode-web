import React from "react";
import styled from "styled-components";

const Wrapper = styled.p`
  color: #444;
  font-size: 15px;
  font-family: ${props => props.theme.fam.medium};
  font-weight: 500;
  line-height: 25px;
  @media(min-width:768px){
    font-size:18px;
    line-height:35px;
  }
`;

function Paragraph({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Paragraph;
