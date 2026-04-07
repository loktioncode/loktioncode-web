import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

/* Sections to observe for scroll-spy (in page order) */
const SPY_IDS = ["hero", "services", "about", "team", "contact"];

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 18px;
  min-height: 72px;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid rgba(15, 17, 20, 0.07);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    padding: 16px 24px;
  }
  @media (min-width: 1200px) {
    padding: 10px 34px;
  }
  .logo-link {
    display: flex;
    align-items: center;
    max-width: min(220px, 55vw);
    @media (min-width: 992px) {
      max-width: 260px;
    }
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  li {
    margin: 0 6px;
    width: max-content;
    position: relative;
    a {
      font-family: ${(p) => p.theme.fam.bold};
      font-size: 15px;
      letter-spacing: 0.01em;
      display: block;
      width: max-content;
      position: relative;
      padding-bottom: 3px;
      transition: opacity 0.22s ${(p) => p.theme.ease.out};
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2.5px;
        border-radius: 99px;
        background: currentColor;
        transition: width 0.28s ${(p) => p.theme.ease.out};
      }
      &:hover { opacity: 0.75; }
      &:hover::after,
      &.active::after { width: 100%; }
      &.active { opacity: 1; }
      @media (min-width: 1200px) {
        font-size: 16px;
      }
    }
    &:nth-child(1) a { color: #ff6b6b; }
    &:nth-child(2) a { color: #ff9f1c; }
    &:nth-child(3) a { color: #4ecdc4; }
    &:nth-child(4) a { color: #9b8fd9; }
    &:nth-child(5) a { color: #d9468f; }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 8px;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: ${(p) => p.theme.color.ink};
  transition: width 0.35s ${(p) => p.theme.ease.out};
  &:nth-child(2) {
    width: ${(p) => (p.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  height: ${(p) => (p.open ? "min(91vh, 440px)" : "0")};
  background: #101114;
  z-index: 99;
  transition: height 0.38s ${(p) => p.theme.ease.out};
  overflow: hidden;
  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  text-align: center;
  li {
    opacity: ${(p) => (p.open ? 1 : 0)};
    font-size: 22px;
    margin: 32px auto;
    transition: opacity 0.38s ${(p) => p.theme.ease.out};
    width: max-content;
    a {
      text-decoration: none;
      font-family: ${(p) => p.theme.fam.bold};
      display: flex;
      align-items: center;
      transition: opacity 0.2s;
      &:hover { opacity: 0.75; }
      &.active { text-decoration: underline; text-underline-offset: 4px; }
    }
    &:nth-child(1) a { color: #ff6b6b; }
    &:nth-child(2) a { color: #ff9f1c; }
    &:nth-child(3) a { color: #4ecdc4; }
    &:nth-child(4) a { color: #9b8fd9; }
    &:nth-child(5) a { color: #d9468f; }
  }
`;

const Actions = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const ActionLink = styled.a`
  font-family: ${(p) => p.theme.fam.bold};
  border-radius: 999px;
  font-size: 13px;
  line-height: 1;
  padding: 11px 16px;
  transition: transform 180ms ${(p) => p.theme.ease.out},
    box-shadow 180ms ${(p) => p.theme.ease.out},
    background 180ms ${(p) => p.theme.ease.out};
  &:hover { transform: translateY(-1px); }
`;

const GhostAction = styled(ActionLink)`
  color: #7c3aed;
  border: 2px solid #9b8fd9;
  background: #faf5ff;
  &:hover {
    background: #ede9fe;
    border-color: #7c3aed;
  }
`;

const PrimaryAction = styled(ActionLink)`
  color: #fff;
  border: none;
  background: #ff6b6b;
  box-shadow: 0 8px 22px rgba(255, 107, 107, 0.3);
  &:hover {
    background: #e85555;
    box-shadow: 0 12px 28px rgba(255, 107, 107, 0.45);
  }
`;

const navActive = ({ isActive }) => (isActive ? "active" : undefined);

function useScrollSpy() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const observers = SPY_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        /* fire when the section crosses roughly the upper-third of the viewport */
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      return { obs, el };
    });
    return () => observers.forEach((o) => o && o.obs.unobserve(o.el));
  }, []);
  return active;
}

function Header() {
  const [toggle, toggleNav] = useState(false);
  const location = useLocation();
  const activeSection = useScrollSpy();
  const isHome = location.pathname === "/";
  const close = () => toggleNav(false);

  const sectionActive = (id) =>
    isHome && activeSection === id ? "active" : undefined;

  return (
    <>
      <Nav>
        <Link to="/" className="logo-link" aria-label="LOXIONCODE home">
          <Logo width={220} />
        </Link>
        
        <Menu>
          <li>
            <a href="/#services" className={sectionActive("services")}>
              Services
            </a>
          </li>
          <li>
            <a href="/#about" className={sectionActive("about")}>
              About
            </a>
          </li>
          <li>
            <a href="/#team" className={sectionActive("team")}>
              Team
            </a>
          </li>
          <li>
            <NavLink className={navActive} to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <a href="https://elisha.loktioncode.org/" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
          </li>
        </Menu>
        <Actions>
          <GhostAction href="/#services">Explore</GhostAction>
          <PrimaryAction href="/#contact">Book a call</PrimaryAction>
        </Actions>
        <NavIcon
          type="button"
          aria-label={toggle ? "Close menu" : "Open menu"}
          onClick={() => toggleNav(!toggle)}
        >
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>

      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <li onClick={close}>
            <a href="/#services" className={sectionActive("services")}>
              Services
            </a>
          </li>
          <li onClick={close}>
            <a href="/#about" className={sectionActive("about")}>
              About
            </a>
          </li>
          <li onClick={close}>
            <a href="/#team" className={sectionActive("team")}>
              Team
            </a>
          </li>
          <li onClick={close}>
            <NavLink className={navActive} to="/portfolio" onClick={close}>
              Portfolio
            </NavLink>
          </li>
          <li onClick={close}>
            <a href="https://elisha.loktioncode.org/" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
          </li>
        </OverlayMenu>
      </Overlay>
    </>
  );
}

export default Header;
