import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import pic1 from "../../assets/deliverables/blocks.webp";

const Wrapper = styled.section`
    padding:10% 20px;
    @media(min-width:1200px){
        padding:5% 10%;
    }
    h2{
        margin-bottom:5px;
        text-align:center;
    }
    h4{
        font-family:${props => props.theme.fam.bold};
        color:${props => props.theme.color.berry};
        font-size:23px;
        text-align:center;
        margin-bottom:20px;
    }
    .container{
        @media(min-width:768px){
            display:flex;
            gap:20px;
            flex-wrap:wrap;
            margin-top:30px;
            justify-content: center;
        }
        .inner{
            background:${props => props.theme.color.smokewhite};
            padding:20px;
            border-radius:7px;
            margin-bottom:20px;
            &:nth-child(1),&:nth-child(3){
              transform:translateY(50px);
            }
            @media(min-width:768px){
                margin-bottom:0;
                width:37%;
                padding:20px 40px;
            }
            .top{
                display: flex;
                align-items:center;
                margin-bottom:10px;
                img{
                    width:60px;
                    margin-right:15px;
                }
                .text{
                    h4{
                        color:${props => props.theme.color.blue4};
                        margin-bottom:5px;
                        text-align:left;
                    }
                    h5{
                        font-size:18px;
                        font-family:${props => props.theme.fam.bold};
                    }
                }
            }
        }
    }

`;

function Testimonials() {
  return (
    <Wrapper>
      <Heading>Testimonials</Heading>
      <h4>Rumour Has It</h4>
      <div className="container">
        <div className="inner">
          <div className="top">
            <img src={pic1} alt="Blocks Loktion Code" />
            <div className="text">
              <h4>John Smith</h4>
              <h5>CTO, TechCorp</h5>
            </div>
          </div>
          <Paragraph>
            LOKTIONCODE's AI solution has transformed our business operations. Their expertise in machine learning and data analytics has helped us make better decisions and improve efficiency.
          </Paragraph>
        </div>
        <div className="inner">
          <div className="top">
            <img src={pic1} alt="Blocks Loktion Code" />
            <div className="text">
              <h4>Sarah Johnson</h4>
              <h5>Operations Director, SmartFactory</h5>
            </div>
          </div>
          <Paragraph>
            The IoT monitoring system developed by LOKTIONCODE has revolutionized our manufacturing process. Real-time data and predictive maintenance have significantly reduced downtime.
          </Paragraph>
        </div>
        <div className="inner">
          <div className="top">
            <img src={pic1} alt="Blocks Loktion Code" />
            <div className="text">
              <h4>Michael Chen</h4>
              <h5>CEO, InnovateTech</h5>
            </div>
          </div>
          <Paragraph>
            Working with LOKTIONCODE on our custom software development project was a game-changer. Their team delivered a scalable solution that perfectly matches our business needs.
          </Paragraph>
        </div>
        <div className="inner">
          <div className="top">
            <img src={pic1} alt="Blocks Loktion Code" />
            <div className="text">
              <h4>Emily Brown</h4>
              <h5>IT Manager, Global Solutions</h5>
            </div>
          </div>
          <Paragraph>
            The cloud infrastructure implemented by LOKTIONCODE has provided us with the security and scalability we needed. Their expertise in modern technology solutions is outstanding.
          </Paragraph>
        </div>
      </div>
    </Wrapper>
  );
}

export default Testimonials;
