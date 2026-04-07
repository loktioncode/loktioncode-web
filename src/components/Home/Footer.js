import React from "react";
import styled from "styled-components";
import Paragraph from "../../styled/Paragraph";
import Logo from "../Logo";
import ContactButtons from "../ContactButtons";
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";

const Wrapper = styled.footer`
  padding: 4% 20px 6%;
  border-top: 1px solid rgba(15, 17, 20, 0.08);
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 32px;
    padding: 3% 5% 5%;
    .left {
      width: 52%;
      max-width: 560px;
      display: flex;
      flex-direction: column;
    }
    .right {
      width: 36%;
      max-width: 340px;
    }
  }
  p {
    color: ${(p) => p.theme.color.inkMuted};
    font-size: 15px;
    font-family: ${(props) => props.theme.fam.medium};
    line-height: 1.55;
    margin-bottom: 12px;
  }
  .copy-lap {
    display: none;
    @media (min-width: 992px) {
      display: block;
      margin-top: 16px;
      font-size: 13px;
      color: ${(p) => p.theme.color.inkMuted};
    }
  }
  .copy-mob {
    margin-top: 24px;
    font-size: 13px;
    @media (min-width: 992px) {
      display: none;
    }
  }
  .logo-wrap {
    margin-bottom: 12px;
  }
`;

const SocialsHeading = styled.h3`
  font-family: ${(p) => p.theme.fam.bold};
  font-size: 1rem;
  margin-bottom: 16px;
  color: ${(p) => p.theme.color.ink};
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  border: 1.5px solid ${(p) => p.border || "rgba(15,17,20,0.12)"};
  background: ${(p) => p.bg || "#fff"};
  color: ${(p) => p.color || "#131417"};
  transition: transform 0.22s ${(p) => p.theme.ease.out},
    box-shadow 0.22s ${(p) => p.theme.ease.out};
  svg { flex-shrink: 0; }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px ${(p) => p.shadow || "rgba(15,17,20,0.12)"};
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover { transform: none; }
  }
`;

function Footer() {
  return (
    <Wrapper id="contact">
      <div className="left">
        <div className="logo-wrap">
          <Logo width={200} />
        </div>
        <Paragraph>
          Engineering and systems: software, IoT, PCB, firmware, robotics, UAVs,
          applied AI, and ICT support  prototype to production.
        </Paragraph>
        <ContactButtons />
        <p className="copy-lap">
          © {new Date().getFullYear()} LOXIONCODE. All rights reserved.
        </p>
      </div>

      <div className="right">
        <SocialsHeading>Follow us</SocialsHeading>
        <SocialLinks>
          <SocialIcon
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            bg="#eef4ff"
            color="#0a66c2"
            border="#bfdbfe"
            shadow="rgba(10,102,194,0.2)"
          >
            <FiLinkedin size={18} />
          </SocialIcon>
          <SocialIcon
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            bg="#f6f8fa"
            color="#24292f"
            border="rgba(15,17,20,0.14)"
            shadow="rgba(15,17,20,0.15)"
          >
            <FiGithub size={18} />
          </SocialIcon>
          <SocialIcon
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            bg="#eff6ff"
            color="#1d9bf0"
            border="#bfdbfe"
            shadow="rgba(29,155,240,0.2)"
          >
            <FiTwitter size={18} />
          </SocialIcon>
          <SocialIcon
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            bg="#fdf2f8"
            color="#d9468f"
            border="#fbcfe8"
            shadow="rgba(217,70,143,0.2)"
          >
            <FiInstagram size={18} />
          </SocialIcon>
        </SocialLinks>
      </div>

      <p className="copy-mob">
        © {new Date().getFullYear()} LOXIONCODE. All rights reserved.
      </p>
    </Wrapper>
  );
}

export default Footer;
