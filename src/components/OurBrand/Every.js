import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";

const Wrapper = styled.section`
padding:0 20px;
@media(min-width:992px){
        padding:5%;
        display: flex;
        justify-content: space-between;
        .inner{
          width:60%;
          p{
            margin-bottom:20px;
          }
        }
    }
    @media(min-width:1200px){
        padding:5% 10%;
    }
    h2{
      margin-bottom:20px;
    }
    img{
        width:100%;
        max-width:500px;
        margin:0 auto;
        display: block;
    }
`;

function Every() {
  return (
    <Wrapper>
      <div className="inner">
        <Heading>Our Story: Transforming Businesses Through Technology</Heading>
        <Paragraph>
          LOKTIONCODE was founded with a vision to help businesses leverage cutting-edge technology to achieve their goals. Our journey began with a simple yet powerful idea: to make advanced technology solutions accessible and beneficial for businesses of all sizes.
        </Paragraph>
        <Paragraph>
          Today, we specialize in three core areas: AI Solutions, IoT Solutions, and Custom Software Development. Our team, led by Elisha Bere, combines deep technical expertise with business understanding to deliver solutions that drive real value.
        </Paragraph>
        <Paragraph>
          Our AI solutions help businesses make data-driven decisions through advanced machine learning algorithms and predictive analytics. We develop custom AI models that are tailored to specific business needs, ensuring optimal results and ROI.
        </Paragraph>
        <Paragraph>
          In the IoT space, we create comprehensive solutions that enable real-time monitoring and control of devices. Our IoT systems help businesses optimize operations, reduce costs, and improve efficiency through smart automation and data-driven insights.
        </Paragraph>
        <Paragraph>
          Our custom software development services focus on creating scalable, secure, and user-friendly applications that meet specific business requirements. We work closely with clients to understand their needs and deliver solutions that exceed expectations.
        </Paragraph>
        <Paragraph>
          What sets us apart is our commitment to innovation and quality. We stay at the forefront of technology trends and continuously update our skills and knowledge to provide the best possible solutions to our clients.
        </Paragraph>
        <Paragraph>
          At LOKTIONCODE, we believe in building long-term partnerships with our clients. We don't just deliver solutions; we ensure their success through ongoing support, maintenance, and continuous improvement.
        </Paragraph>
      </div>
      <div className="right">
        <img src="./images/brand/blocks.webp" alt="Blocks Loktion Code" />
      </div>
    </Wrapper>
  );
}

export default Every;
