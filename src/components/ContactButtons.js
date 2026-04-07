import React from "react";
import styled from "styled-components";
import { FiMail, FiPhone } from "react-icons/fi";
import { CONTACT, mailtoHref } from "../constants/contact";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: ${(p) => p.$tight ? "0" : "24px"};
  @media (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }
`;

const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 22px;
  border-radius: 14px;
  font-family: ${(p) => p.theme.fam.bold};
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: transform 0.25s ${(p) => p.theme.ease.out},
    box-shadow 0.25s ${(p) => p.theme.ease.out};
  svg {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(46, 38, 64, 0.12);
  }
  &:focus-visible {
    outline: 3px solid ${(p) => p.theme.color.sky};
    outline-offset: 2px;
  }
`;

const Tel = styled(Btn)`
  background: ${(p) => p.theme.color.mint};
  color: ${(p) => p.theme.color.ink};
`;

const Mail = styled(Btn)`
  background: ${(p) => p.theme.color.coral};
  color: ${(p) => p.theme.color.white};
`;

function ContactButtons({ className, tight }) {
  return (
    <Row className={className} $tight={tight}>
      <Tel href={`tel:${CONTACT.phoneTel}`}>
        <FiPhone aria-hidden />
        Call {CONTACT.phoneDisplay}
      </Tel>
      <Mail href={mailtoHref()}>
        <FiMail aria-hidden />
        Email us
      </Mail>
    </Row>
  );
}

export default ContactButtons;
