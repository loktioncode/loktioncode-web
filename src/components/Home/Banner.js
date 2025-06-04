import React from "react";
import styled from "styled-components";
import Paragraph from "../../styled/Paragraph";


const Wrapper = styled.section`
padding:0 20px;
@media(min-width:1200px){
    padding:0 50px;
}
    .banner-inner{
        background:url('./images/banner.webp');
        background-size:cover;
        height:90vh;
        border-radius:10px 10px 0 0;
        padding:0 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media(min-width:768px){
            height:660px;
        }
        @media(min-width:1200px){
            height:85vh;
        }
    }
  h1 {
    color: #000;
    text-align: center;
    font-size: 50px;
    font-family: ${props => props.theme.fam.bold};
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom:30px;
    @media(min-width:768px){
        display:flex;
        align-items: center;
        width:max-content;
        margin:0 auto 30px;
    }
    @media(min-width:992px){
        font-size:75px;
    }
    span{
        color:${props => props.theme.color.green};
        display: block;
        @media(min-width:568px){
        display:unset;
        margin:0 7px;
    }
    }
  }
  p{
    text-align:center;
    @media(min-width:768px){
        max-width:800px;
        margin:0 auto;

    }
  }
`;

function Banner() {
  return (
    <Wrapper>
      <div className="banner-inner">
        <h1>
          Observe <span>| Reflect |</span> Make
        </h1>
        <Paragraph>
          Transforming businesses through innovative AI solutions, cutting-edge IoT technology, and custom software development. We help organizations leverage the power of digital transformation to achieve their goals and stay ahead in the digital age.
        </Paragraph>
      </div>
    </Wrapper>
  );
}

export default Banner;
