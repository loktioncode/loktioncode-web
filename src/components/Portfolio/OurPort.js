import React from "react";
import styled from "styled-components";
import { FiArrowUpRight, FiAward } from "react-icons/fi";

const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const projects = [
  {
    id: "firimoni",
    category: "AgriTech · AI · IoT",
    categoryColor: "#16a34a",
    title: "Firimoni",
    description:
      "Firimoni connects IoT sensors monitoring real crop plots to a Gemini-powered agent that speaks to farmers over WhatsApp — in their language, with confidence scores. Three CNN-TensorFlow models diagnose tomato, potato, and maize disease. RAG embeds verified agronomic PDFs; when the agent is unsure it searches the web. Each farmer's personalised profile is stored per plot in Firebase. Built to serve marginalised growers across the SADC region.",
    tags: [
      { label: "Gemini API",     bg: "#ecfdf5", color: "#065f46", border: "#a7f3d0" },
      { label: "TensorFlow CNN", bg: "#eff6ff", color: "#1e40af", border: "#bfdbfe" },
      { label: "Firebase IoT",   bg: "#fff7ed", color: "#92400e", border: "#fed7aa" },
      { label: "RAG",            bg: "#faf5ff", color: "#6d28d9", border: "#ddd6fe" },
      { label: "WhatsApp API",   bg: "#ecfdf5", color: "#065f46", border: "#a7f3d0" },
      { label: "SADC",           bg: "#f0fdf4", color: "#166534", border: "#bbf7d0" },
    ],
    badge: "Shortlisted — Google AI Developer Competition 2024",
    link: "https://ai.google.dev/competition/projects/firimoni",
    linkLabel: "View on Google AI",
    accentColor: "#16a34a",
    imgBg: "#052e16",
    tint: "rgba(5,46,22,0.18)",
    /* tall left + two stacked right */
    images: [
      { src: u("photo-1625246333195-78d9c38ad449"), alt: "Smart greenhouse with IoT sensors", span: "span2" },
      { src: u("photo-1464226184884-fa280b87c399"), alt: "Green crop field" },
      { src: u("photo-1574943320219-553eb213f72d"), alt: "IoT sensor node on farm plant" },
    ],
  },
  {
    id: "rusero",
    category: "UAV · Autonomy · Vision AI",
    categoryColor: "#0369a1",
    title: "Rusero",
    description:
      "Rusero designs and builds long-endurance UAVs for missions where manned flight is impractical or unsafe. Thermal and day/night cameras with onboard AI detect poachers, identify stolen livestock, and locate missing people or animals from altitude. NDVI multi-spectral analysis delivers farm health reports over thousands of hectares per flight. Fully integrated telemetry, automated flight planning, and a ground-station dashboard with live feeds.",
    tags: [
      { label: "Long-range UAV",   bg: "#eff6ff", color: "#1e40af", border: "#bfdbfe" },
      { label: "Thermal imaging",  bg: "#fff7ed", color: "#92400e", border: "#fed7aa" },
      { label: "NDVI analysis",    bg: "#f0fdf4", color: "#166534", border: "#bbf7d0" },
      { label: "Object detection", bg: "#faf5ff", color: "#6d28d9", border: "#ddd6fe" },
      { label: "Anti-poaching",    bg: "#fef2f2", color: "#991b1b", border: "#fecaca" },
      { label: "Search & rescue",  bg: "#eff6ff", color: "#1d4ed8", border: "#bfdbfe" },
    ],
    accentColor: "#0369a1",
    imgBg: "#0c1a2e",
    tint: "rgba(12,26,46,0.22)",
    reverse: true,
    images: [
      { src: u("photo-1473968512647-3e447244af8f"), alt: "Professional drone in flight", span: "span2" },
      { src: u("photo-1530053969600-caed2596d242"), alt: "Aerial landscape view from drone" },
      { src: u("photo-1500382017468-9049fed747ef"), alt: "Aerial farm fields from above" },
    ],
  },
  {
    id: "healthpassport",
    category: "HealthTech · Edge AI · RAG",
    categoryColor: "#7c3aed",
    title: "Health Passport",
    description:
      "Health Passport issues every patient a portable, privacy-respecting ID they carry across any clinic visit. At each clinic an on-premise edge node runs a RAG pipeline fed with medical-school curricula, drug interaction databases, and clinical guidelines — no cloud dependency, no internet required. Doctors get contextual decision support; patients keep continuity of care even between rural facilities. Designed for low-bandwidth, low-infrastructure healthcare settings.",
    tags: [
      { label: "RAG / LLM",          bg: "#faf5ff", color: "#6d28d9", border: "#ddd6fe" },
      { label: "Edge inference",      bg: "#eff6ff", color: "#1e40af", border: "#bfdbfe" },
      { label: "Universal patient ID",bg: "#ecfdf5", color: "#065f46", border: "#a7f3d0" },
      { label: "Offline-first",       bg: "#fff7ed", color: "#92400e", border: "#fed7aa" },
      { label: "Medical NLP",         bg: "#faf5ff", color: "#5b21b6", border: "#c4b5fd" },
      { label: "SADC clinics",        bg: "#f0fdf4", color: "#166534", border: "#bbf7d0" },
    ],
    accentColor: "#7c3aed",
    imgBg: "#1e1b4b",
    tint: "rgba(30,27,75,0.18)",
    images: [
      { src: u("photo-1576091160399-112ba8d25d1d"), alt: "Doctor reviewing patient data on tablet", span: "span2" },
      { src: u("photo-1559757175-5700dde675bc"),    alt: "Medical technology and devices" },
      { src: u("photo-1532938911079-1b06ac7ceec7"), alt: "Rural healthcare clinic setting" },
    ],
  },
];

/* ─── Styled components ─────────────────────────────────── */

const Grid = styled.section`
  padding: 32px 20px 64px;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
  @media (min-width: 992px) {
    padding: 40px 40px 80px;
    gap: 64px;
  }
`;

const Card = styled.article`
  background: #fff;
  border-radius: 20px;
  border: 1px solid rgba(15, 17, 20, 0.08);
  box-shadow: 0 8px 32px rgba(15, 17, 20, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.35s ${(p) => p.theme.ease.out},
              transform  0.35s ${(p) => p.theme.ease.out};
  &:hover {
    box-shadow: 0 24px 56px rgba(15, 17, 20, 0.13);
    transform: translateY(-4px);
  }
  @media (min-width: 800px) {
    flex-direction: ${(p) => (p.reverse ? "row-reverse" : "row")};
    min-height: 400px;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover { transform: none; }
  }
`;

const Visual = styled.div`
  background: ${(p) => p.bg || "#0f172a"};
  flex-shrink: 0;
  width: 100%;
  min-height: 260px;
  position: relative;
  overflow: hidden;
  @media (min-width: 800px) {
    width: 52%;
    min-height: unset;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${(p) => p.tint || "transparent"};
    pointer-events: none;
    z-index: 1;
  }
`;

const Collage = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 260px;
  grid-template-columns: 1.3fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3px;
  @media (min-width: 800px) {
    min-height: 400px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 600ms ${(p) => p.theme.ease.out};
  }
  article:hover & img {
    transform: scale(1.05);
  }
  .span2 {
    grid-row: span 2;
  }
  @media (prefers-reduced-motion: reduce) {
    img { transition: none; }
    article:hover & img { transform: none; }
  }
`;

const Body = styled.div`
  padding: 28px 24px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  @media (min-width: 800px) {
    padding: 36px 32px;
    flex: 1;
  }
`;

const Category = styled.span`
  font-family: ${(p) => p.theme.fam.semibold};
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(p) => p.color || "#6366f1"};
`;

const Title = styled.h2`
  font-family: ${(p) => p.theme.fam.bold};
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  color: #131417;
  line-height: 1.1;
  letter-spacing: -0.01em;
`;

const Desc = styled.p`
  font-family: ${(p) => p.theme.fam.medium};
  font-size: 15px;
  color: #4b5563;
  line-height: 1.65;
  max-width: 480px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  background: ${(p) => p.bg};
  color: ${(p) => p.color};
  font-family: ${(p) => p.theme.fam.semibold};
  font-size: 11px;
  letter-spacing: 0.04em;
  padding: 4px 10px;
  border-radius: 99px;
  border: 1px solid ${(p) => p.border};
`;

const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fefce8;
  border: 1px solid #fde047;
  border-radius: 8px;
  padding: 8px 12px;
  font-family: ${(p) => p.theme.fam.semibold};
  font-size: 12px;
  color: #78350f;
  width: fit-content;
  svg { color: #f59e0b; flex-shrink: 0; }
`;

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${(p) => p.theme.fam.bold};
  font-size: 14px;
  color: ${(p) => p.color || "#0f1114"};
  border-bottom: 1.5px solid currentColor;
  padding-bottom: 1px;
  width: fit-content;
  margin-top: 4px;
  transition: opacity 0.2s;
  &:hover { opacity: 0.7; }
  svg { flex-shrink: 0; }
`;

/* ─── Component ─────────────────────────────────────────── */

function OurPort() {
  return (
    <Grid>
      {projects.map((p) => (
        <Card key={p.id} reverse={p.reverse}>
          <Visual bg={p.imgBg} tint={p.tint}>
            <Collage>
              {p.images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className={img.span || ""}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </Collage>
          </Visual>

          <Body>
            <Category color={p.accentColor}>{p.category}</Category>
            <Title>{p.title}</Title>
            <Desc>{p.description}</Desc>
            <Tags>
              {p.tags.map((t) => (
                <Tag key={t.label} bg={t.bg} color={t.color} border={t.border}>
                  {t.label}
                </Tag>
              ))}
            </Tags>
            {p.badge && (
              <BadgeRow>
                <FiAward size={14} aria-hidden />
                {p.badge}
              </BadgeRow>
            )}
            {p.link && (
              <ExternalLink
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                color={p.accentColor}
              >
                {p.linkLabel} <FiArrowUpRight size={14} aria-hidden />
              </ExternalLink>
            )}
          </Body>
        </Card>
      ))}
    </Grid>
  );
}

export default OurPort;
