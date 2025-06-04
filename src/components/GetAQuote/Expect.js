import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";

const Wrapper = styled.section`
  margin:20px;
  padding:20px;
  background:${props => props.theme.color.blue4};
  color:#ffffff;
  border-radius:7px;
  @media(min-width:992px){
  display:flex;
  justify-content:space-between;
  margin:20px 40px;
  padding:5%;
}

  h2{
    color:#ffffff;
    @media(min-width:992px){
 width:45%;
  
}
    br{
      display:none;
      @media(min-width:768px){
        display:block;
      }    
    }
  }
  .text{
    margin-top:20px;
    position:relative;
    @media(min-width:992px){
      width:45%;
  
}
    &:before{
      width:3px;
      height:90%;
      content:"";
      background:${props => props.theme.color.yellow};
      position:absolute;
      border-radius:10px;
      left:15px;
      top:50%;
      transform:translateY(-50%);
      z-index:1;
    }
    .inner{
      display:flex;
      margin-bottom:20px;
      label{
        height:30px;
        width:30px;
        min-width:30px;
        object-fit:contain;
        display:flex;
        z-index:2;
        justify-content: center;
        align-items: center;
        border-radius:50%;
        background:${props => props.theme.color.blue3};
        color:#ffffff;
        border:2px solid ${props => props.theme.color.yellow};
      }
      .text-right{
        padding-left:30px;
        h3{
          font-family:${props => props.theme.fam.bold};
          margin-bottom:10px;
          font-size:25px;
        }
        p{
          color:#ffffff;
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
        Our Steps Of Engagement
      </Heading>
      <div className="text">
        <div className="inner">
          <label>1</label>
          <div className="text-right">
            <h3>Send us a message.</h3>
            <Paragraph>
              This is like our first date, and we appreciate you are taking the
              first step.
            </Paragraph>
          </div>
        </div>
        <div className="inner">
          <label>2</label>
          <div className="text-right">
            <h3>We will get back to you soon.</h3>
            <Paragraph>
              We have a few elves helping out with correspondence, so we usually
              respond to inquiries very fast. Unless, you know, the elves are
              busy.
            </Paragraph>
          </div>
        </div>
        <div className="inner">
          <label>3</label>
          <div className="text-right">
            <h3>Meet and proposal</h3>
            <Paragraph>
              We meet. We scope. We issue a proposal. We negotiate. We discuss.
              We agree. We start. Simple.
            </Paragraph>
          </div>
        </div>
        <div className="inner">
          <label>4</label>
          <div className="text-right">
            <h3>Let’s collaborate!</h3>
            <Paragraph>
              "I think this is the beginning of a beautiful friendship". We,
              too, believe the best is yet to come.
            </Paragraph>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Expect;
