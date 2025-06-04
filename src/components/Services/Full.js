import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import { Link } from "react-router-dom";
import { BsArrowReturnRight } from "react-icons/bs";

const Wrapper = styled.section`
  padding: 10% 20px;
  @media (min-width: 992px) {
    padding: 5%;
  }
  @media (min-width: 1200px) {
    padding: 5% 10%;
  }
  h2 {
    margin-bottom: 20px;
  }
  p {
    max-width: 750px;
  }
  .inner {
    display: flex;
    gap: 30px;
    flex-wrap: nowrap;
    margin: 40px auto 0;
    justify-content: space-between;
    max-width: 1400px;
    overflow-x: auto;
    padding-bottom: 20px;
    
    &::-webkit-scrollbar {
      height: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.color.blue4};
      border-radius: 4px;
    }
    
    .item {
      min-width: 350px;
      background: rgba(249, 249, 249, 1);
      border-radius: 8px;
      padding: 30px;
      flex: 1;

      h3 {
        font-family: ${(props) => props.theme.fam.bold};
        font-size: 25px;
        margin-bottom: 20px;
        color: ${(props) => props.theme.color.blue4};
      }

      .item-inner {
        margin-bottom: 25px;
        
        h4 {
          font-family: ${(props) => props.theme.fam.bold};
          color: #000000;
          font-size: 20px;
          margin-bottom: 15px;
        }

        a {
          color: #000000;
          font-family: ${props => props.theme.fam.medium};
          display: flex;
          align-items: center;
          padding: 10px 0;
          text-decoration: none;
          transition: all 0.3s ease;

          &:hover {
            color: ${props => props.theme.color.blue4};
          }

          svg {
            color: rgba(83, 197, 138, 1);
            margin-right: 10px;
            font-size: 20px;
          }
        }
      }
    }
  }
`;

function Full() {
  return (
    <Wrapper>
      <Heading textColor="rgb(83, 197, 138)">
        Our Full List of <br />
        <span>Services</span>
      </Heading>
      <Paragraph>
        At LOKTIONCODE, we specialize in cutting-edge digital solutions that transform businesses. Our expertise spans across AI Solutions, IoT Solutions, and Custom Software Development, delivering innovative technology solutions that drive growth and efficiency.
      </Paragraph>
      <div className="inner">
        <div className="item">
          <h3>AI Solutions</h3>
          <div className="item-inner">
            <h4>Machine Learning</h4>
            <Link>
              <BsArrowReturnRight /> Predictive Analytics
            </Link>
            <Link>
              <BsArrowReturnRight /> Natural Language Processing
            </Link>
            <Link>
              <BsArrowReturnRight /> Computer Vision
            </Link>
            <Link>
              <BsArrowReturnRight /> Deep Learning
            </Link>
          </div>
          <div className="item-inner">
            <h4>Business Intelligence</h4>
            <Link>
              <BsArrowReturnRight /> Data Analytics
            </Link>
            <Link>
              <BsArrowReturnRight /> Business Process Automation
            </Link>
            <Link>
              <BsArrowReturnRight /> Decision Support Systems
            </Link>
            <Link>
              <BsArrowReturnRight /> Performance Analytics
            </Link>
          </div>
        </div>
        <div className="item">
          <h3>IoT Solutions</h3>
          <div className="item-inner">
            <h4>Smart Systems</h4>
            <Link>
              <BsArrowReturnRight /> Industrial IoT
            </Link>
            <Link>
              <BsArrowReturnRight /> Smart Manufacturing
            </Link>
            <Link>
              <BsArrowReturnRight /> Asset Tracking
            </Link>
            <Link>
              <BsArrowReturnRight /> Remote Monitoring
            </Link>
          </div>
          <div className="item-inner">
            <h4>IoT Integration</h4>
            <Link>
              <BsArrowReturnRight /> Device Management
            </Link>
            <Link>
              <BsArrowReturnRight /> Data Collection
            </Link>
            <Link>
              <BsArrowReturnRight /> Real-time Analytics
            </Link>
            <Link>
              <BsArrowReturnRight /> System Integration
            </Link>
          </div>
        </div>
        <div className="item">
          <h3>Software Development</h3>
          <div className="item-inner">
            <h4>Enterprise Solutions</h4>
            <Link>
              <BsArrowReturnRight /> Custom Software
            </Link>
            <Link>
              <BsArrowReturnRight /> System Integration
            </Link>
            <Link>
              <BsArrowReturnRight /> API Development
            </Link>
            <Link>
              <BsArrowReturnRight /> Legacy Modernization
            </Link>
          </div>
          <div className="item-inner">
            <h4>Cloud Services</h4>
            <Link>
              <BsArrowReturnRight /> Cloud Migration
            </Link>
            <Link>
              <BsArrowReturnRight /> Cloud Architecture
            </Link>
            <Link>
              <BsArrowReturnRight /> DevOps Solutions
            </Link>
            <Link>
              <BsArrowReturnRight /> Cloud Security
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Full;
