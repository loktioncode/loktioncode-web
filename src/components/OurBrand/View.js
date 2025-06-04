import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Wrapper = styled.section`
padding:10% 20px;
@media(min-width:992px){
  display:flex;
  justify-content: space-between;
  padding:5%;
  .inner{
    width:45%;
  }
}
@media(min-width:1200px){
  padding:5% 15%;
  
}
h2{
  margin-bottom:30px;
  @media(min-width:992px){
    width:45%;
  }
}
p{
  margin-bottom:20px;
}
  a{
        font-family:${props => props.theme.fam.bold};
        color:${props => props.theme.color.blue};
        text-transform:uppercase;
        font-size:20px;
        display:flex;
        align-items: center;
        line-height:40px;
        @media(min-width:768px){
            font-size:30px;
        }
        svg{
            color:${props => props.theme.color.orange};
        }
    }
`;

function View() {
  return (
    <Wrapper>
      <Heading>View Our Complete Service Catalogue </Heading>
      <div className="inner">
        <Paragraph>
          LOKTIONCODE is a technology company dedicated to delivering innovative digital solutions that transform businesses. We combine technical expertise with business acumen to create solutions that drive success.
        </Paragraph>
        <Paragraph>
          With a focus on AI, IoT, and custom software development, we help businesses leverage cutting-edge technology to achieve their goals and stay ahead in the digital landscape.
        </Paragraph>
        <Link to="/services">
          About The Brand <FiArrowUpRight />
        </Link>
      </div>
    </Wrapper>
  );
}

export default View;
