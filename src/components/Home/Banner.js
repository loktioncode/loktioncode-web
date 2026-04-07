import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { HERO_BLOCKS } from "../../constants/heroBlocks";

const HEADLINES = [
  { text: "Engineering at the pace of change", accent: "#ff6b6b" },
  { text: "Custom IoT & firmware  field-ready", accent: "#ff9f1c" },
  { text: "AI models built for your data", accent: "#4ecdc4" },
  { text: "PCB design, UAVs & robotics systems", accent: "#9b8fd9" },
  { text: "ICT support & digital transformation", accent: "#d9468f" },
];

const DISPLAY_MS = 5500;
const FADE_MS    = 700;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-14px); }
`;

const Wrapper = styled.section`
  padding: 16px 16px 0;
  .hero {
    min-height: min(78vh, 680px);
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
    align-items: center;
    padding: clamp(14px, 2vw, 22px);
    @media (min-width: 992px) {
      grid-template-columns: 1.18fr 1fr;
      gap: 26px;
      min-height: min(82vh, 700px);
    }
  }
  .left {
    animation: riseIn 720ms ${(p) => p.theme.ease.out} both;
  }
  p {
    max-width: 520px;
    color: #32353b;
    line-height: 1.35;
    font-size: clamp(1.02rem, 2vw, 1.8rem);
    margin-bottom: 18px;
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .right {
    display: none;
    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: 1.6fr 1fr 1fr;
      grid-template-rows: 1.1fr 1fr;
      grid-template-areas:
        "a a b"
        "c d b";
      gap: 10px;
      height: min(72vh, 560px);
      animation: riseIn 900ms ${(p) => p.theme.ease.out} both;
    }
  }
  @keyframes riseIn {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @media (prefers-reduced-motion: reduce) {
    .left, .right { animation: none; }
  }
`;

const HeadlineWrap = styled.div`
  /* reserve enough height so layout doesn't jump between phrases */
  min-height: clamp(3.8rem, 13vw, 11rem);
  margin-bottom: 14px;
  overflow: hidden;
`;

const H1 = styled.h1`
  font-family: ${(p) => p.theme.fam.bold};
  line-height: 0.97;
  letter-spacing: -0.02em;
  font-size: clamp(2.4rem, 8.1vw, 6.8rem);
  color: #131417;
  animation: ${(p) => (p.leaving ? fadeOut : fadeIn)}
    ${FADE_MS}ms ${(p) => p.theme.ease.out} both;
  span { color: ${(p) => p.accent}; }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 7px;
  margin-bottom: 16px;
`;

const Dot = styled.button`
  width: ${(p) => (p.active ? "22px" : "8px")};
  height: 8px;
  border-radius: 99px;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${(p) => (p.active ? p.accent : "rgba(15,17,20,0.15)")};
  transition: width 0.3s ${(p) => p.theme.ease.out},
              background 0.3s ${(p) => p.theme.ease.out};
  @media (prefers-reduced-motion: reduce) { transition: none; }
`;

const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 11px 18px;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  transition: transform 220ms ${(p) => p.theme.ease.out},
    box-shadow 220ms ${(p) => p.theme.ease.out};
  &:hover {
    transform: translateY(-1px);
  }
`;

const Primary = styled(CTA)`
  background: #ff6b6b;
  color: #fff;
  font-family: ${(p) => p.theme.fam.bold};
  box-shadow: 0 10px 28px rgba(255, 107, 107, 0.35);
  border: none;
  padding: 13px 22px;
  font-size: 15px;
  &:hover {
    background: #e85555;
    box-shadow: 0 14px 36px rgba(255, 107, 107, 0.5);
  }
`;

const Secondary = styled(CTA)`
  background: #fff;
  color: #0f8a7c;
  border: 2px solid #4ecdc4;
  font-family: ${(p) => p.theme.fam.bold};
  padding: 12px 22px;
  font-size: 15px;
  &:hover {
    background: #f0fdfb;
    border-color: #0f8a7c;
  }
`;

const Card = styled.div`
  border-radius: 14px;
  overflow: hidden;
  background: #ecece8;
  border: 1px solid rgba(17, 19, 22, 0.09);
  box-shadow: 0 8px 20px rgba(16, 17, 20, 0.1);
  position: relative;
  transition: transform 380ms ${(p) => p.theme.ease.out},
    box-shadow 380ms ${(p) => p.theme.ease.out};
  &:hover {
    transform: scale(1.025);
    box-shadow: 0 18px 36px rgba(16, 17, 20, 0.18);
    z-index: 1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transform: scale(1.03);
    transition: transform 520ms ${(p) => p.theme.ease.out};
  }
  &:hover img {
    transform: scale(1.08);
  }
  &.a {
    grid-area: a;
  }
  &.b {
    grid-area: b;
  }
  &.c {
    grid-area: c;
  }
  &.d {
    grid-area: d;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
    img {
      transition: none;
      transform: none;
    }
  }
`;

function Banner() {
  const [index, setIndex]     = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLeaving(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % HEADLINES.length);
        setLeaving(false);
      }, FADE_MS);
    }, DISPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  const { text, accent } = HEADLINES[index];

  /* Split at first space-group to put accent on the last meaningful word */
  const words  = text.split(" ");
  const plain  = words.slice(0, -1).join(" ") + " ";
  const last   = words[words.length - 1];

  return (
    <Wrapper id="hero">
      <div className="hero">
        <div className="left">
          <HeadlineWrap>
            <H1 accent={accent} leaving={leaving}>
              {plain}<span>{last}</span>
            </H1>
          </HeadlineWrap>
          <Dots aria-hidden>
            {HEADLINES.map((h, i) => (
              <Dot
                key={i}
                active={i === index}
                accent={h.accent}
                onClick={() => { setLeaving(true); setTimeout(() => { setIndex(i); setLeaving(false); }, FADE_MS); }}
                aria-label={`Headline ${i + 1}`}
              />
            ))}
          </Dots>
          <p>
            LOXIONCODE turns system complexity into production-ready software,
            firmware, and AI solutions your team can deploy with confidence.
          </p>
          <div className="actions">
            <Primary href="/#services">Learn more</Primary>
            <Secondary href="/#contact">Get in touch</Secondary>
          </div>
        </div>
        <div className="right">
          {HERO_BLOCKS.map((block, i) => (
            <Card key={block.key} className={block.key}>
              <img
                src={block.src}
                srcSet={block.srcSet}
                sizes="(max-width: 991px) 50vw, 28vw"
                alt={block.alt}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </Card>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner;
