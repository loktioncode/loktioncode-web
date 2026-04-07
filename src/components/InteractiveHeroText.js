import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Block = styled.div`
  perspective: 800px;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const Line = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.35em 0.5em;
  margin-bottom: 0.25em;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Word = styled.span`
  display: inline-block;
  font-family: ${(p) => p.theme.fam.extrabold};
  font-weight: 800;
  font-size: clamp(1.75rem, 5vw, 3.75rem);
  line-height: 1.1;
  color: ${(p) => p.$color || p.theme.color.ink};
  text-transform: uppercase;
  letter-spacing: 0.02em;
  transition: transform 0.35s ${(p) => p.theme.ease.out};
  will-change: transform;
`;

/**
 * Words subtly follow the pointer (disabled when prefers-reduced-motion).
 */
function InteractiveHeroText({ lines }) {
  const rootRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const onMove = useCallback(
    (e) => {
      if (reduceMotion || !rootRef.current) return;
      const r = rootRef.current.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setPos({ x, y });
    },
    [reduceMotion]
  );

  const onLeave = useCallback(() => {
    setPos({ x: 0, y: 0 });
  }, []);

  return (
    <Block ref={rootRef} onMouseMove={onMove} onMouseLeave={onLeave}>
      {lines.map((line, li) => (
        <Line key={li}>
          {line.map((word, wi) => {
            const depth = 10 + ((li + wi) % 5) * 3;
            const tx = reduceMotion ? 0 : pos.x * depth;
            const ty = reduceMotion ? 0 : pos.y * (depth * 0.65);
            return (
              <Word
                key={`${li}-${wi}`}
                $color={word.color}
                style={{ transform: `translate3d(${tx}px, ${ty}px, 0)` }}
              >
                {word.text}
              </Word>
            );
          })}
        </Line>
      ))}
    </Block>
  );
}

export default InteractiveHeroText;
