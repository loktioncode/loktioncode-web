import React from "react";
import styled from "styled-components";
import Paragraph from "../../styled/Paragraph";
import ContactButtons from "../ContactButtons";

const ContactTitle = styled.h2`
  font-family: ${(p) => p.theme.fam.bold};
  font-weight: 800;
  font-size: clamp(1.65rem, 4vw, 2.5rem);
  line-height: 1.15;
  color: ${(p) => p.theme.color.ink};
  margin-bottom: 0.5em;
  span {
    color: #ff6b6b;
  }
`;

const Wrapper = styled.section`
  padding: 4% 20px 5%;
  border-top: 1px solid rgba(15, 17, 20, 0.08);
  background: transparent;
  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 3% 5% 4%;
  }
  .visual {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    @media (min-width: 992px) {
      width: 42%;
      margin: 0;
    }
    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 14px;
    }
  }
  .left {
    max-width: 560px;
    margin: 0 auto;
    @media (min-width: 992px) {
      width: 48%;
      margin: 0;
    }
  }
`;

function Contact() {
  return (
    <Wrapper id="contact">
      <div className="left">
        <ContactTitle>
          <span>Let’s build</span> something real.
        </ContactTitle>
        <Paragraph>
          Tell us about sensors, fleets, models, or deadlines  we’ll respond by
          phone or email. No forms; just direct lines to the team.
        </Paragraph>
        <ContactButtons />
      </div>
      <div className="visual">
        <img src="/images/hero-contact.svg" alt="" />
      </div>
    </Wrapper>
  );
}

export default Contact;
