import React from "react";
import styled from "styled-components";
import { FiArrowUpRight, FiAward } from "react-icons/fi";

const Grid = styled.section`
  padding: 32px 20px 64px;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 992px) {
    padding: 40px 40px 80px;
    gap: 56px;
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
    transform 0.35s ${(p) => p.theme.ease.out};
  &:hover {
    box-shadow: 0 20px 48px rgba(15, 17, 20, 0.12);
    transform: translateY(-4px);
  }
  @media (min-width: 800px) {
    flex-direction: ${(p) => (p.reverse ? "row-reverse" : "row")};
    min-height: 380px;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

const Visual = styled.div`
  background: ${(p) => p.bg || "#ecece8"};
  flex-shrink: 0;
  width: 100%;
  min-height: 220px;
  position: relative;
  overflow: hidden;
  @media (min-width: 800px) {
    width: 52%;
    min-height: unset;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
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
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: #131417;
  line-height: 1.15;
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
  background: ${(p) => p.bg || "#f0fdf4"};
  color: ${(p) => p.color || "#166534"};
  font-family: ${(p) => p.theme.fam.semibold};
  font-size: 11px;
  letter-spacing: 0.04em;
  padding: 4px 10px;
  border-radius: 99px;
  border: 1px solid ${(p) => p.border || "#bbf7d0"};
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
  svg {
    color: #f59e0b;
    flex-shrink: 0;
  }
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
  &:hover {
    opacity: 0.7;
  }
  svg {
    flex-shrink: 0;
  }
`;

const projects = [
  {
    id: "firimoni",
    category: "AgriTech · AI · IoT",
    categoryColor: "#16a34a",
    title: "Firimoni",
    subtitle: "Smart farm network powered by an LLM agent",
    description:
      "Firimoni connects IoT sensors monitoring real crop plots to a Gemini-powered agent that speaks to farmers over WhatsApp  in their language, with confidence scores. Three CNN-TensorFlow models diagnose tomato, potato, and maize disease. RAG embeds verified agronomic PDFs; when the agent is unsure it searches the web. Each farmer's personalised profile is stored per plot in Firebase. Built to serve marginalised growers across the SADC region.",
    tags: [
      { label: "Gemini API", bg: "#ecfdf5", color: "#065f46", border: "#a7f3d0" },
      { label: "TensorFlow CNN", bg: "#eff6ff", color: "#1e40af", border: "#bfdbfe" },
      { label: "Firebase IoT", bg: "#fff7ed", color: "#92400e", border: "#fed7aa" },
      { label: "RAG", bg: "#faf5ff", color: "#6d28d9", border: "#ddd6fe" },
      { label: "WhatsApp API", bg: "#ecfdf5", color: "#065f46", border: "#a7f3d0" },
      { label: "SADC", bg: "#f0fdf4", color: "#166534", border: "#bbf7d0" },
    ],
    badge: "Shortlisted  Google AI Developer Competition 2024",
    link: "https://ai.google.dev/competition/projects/firimoni",
    linkLabel: "View on Google AI",
    imgSrc: "/images/proj-firimoni.svg",
    imgBg: "#0a2a14",
    accentColor: "#16a34a",
  },
  {
    id: "rusero",
    category: "UAV · Autonomy · Vision AI",
    categoryColor: "#0369a1",
    title: "Rusero",
    subtitle: "Long-range UAV systems for conservation & land intelligence",
    description:
      "Rusero designs and builds long-endurance UAVs for missions where manned flight is impractical or unsafe. Thermal and day/night cameras with onboard AI detect poachers, identify stolen livestock, and locate missing people or animals from altitude. NDVI multi-spectral analysis delivers farm health reports over thousands of hectares per flight. Fully integrated telemetry, automated flight planning, and a ground-station dashboard with live feeds.",
    tags: [
      { label: "Long-range UAV", bg: "#eff6ff", color: "#1e40af", border: "#bfdbfe" },
      { label: "Thermal imaging", bg: "#fff7ed", color: "#92400e", border: "#fed7aa" },
      { label: "NDVI analysis", bg: "#f0fdf4", color: "#166534", border: "#bbf7d0" },
      { label: "Object detection", bg: "#faf5ff", color: "#6d28d9", border: "#ddd6fe" },
      { label: "Anti-poaching", bg: "#fef2f2", color: "#991b1b", border: "#fecaca" },
      { label: "Search & rescue", bg: "#eff6ff", color: "#1d4ed8", border: "#bfdbfe" },
    ],
    imgSrc: "/images/proj-rusero.svg",
    imgBg: "#0c1a2e",
    accentColor: "#0369a1",
    reverse: true,
  },
  {
    id: "healthpassport",
    category: "HealthTech · Edge AI · RAG",
    categoryColor: "#7c3aed",
    title: "Health Passport",
    subtitle: "Edge RAG per clinic  one universal patient ID across the region",
    description:
      "Health Passport issues every patient a portable, privacy-respecting ID they carry across any clinic visit. At each clinic an on-premise edge node runs a RAG pipeline fed with medical-school curricula, drug interaction databases, and clinical guidelines  no cloud dependency, no internet required. Doctors get contextual decision support; patients keep continuity of care even between rural facilities. Designed for low-bandwidth, low-infrastructure healthcare settings.",
    tags: [
      { label: "RAG / LLM", bg: "#faf5ff", color: "#6d28d9", border: "#ddd6fe" },
      { label: "Edge inference", bg: "#eff6ff", color: "#1e40af", border: "#bfdbfe" },
      { label: "Universal patient ID", bg: "#ecfdf5", color: "#065f46", border: "#a7f3d0" },
      { label: "Offline-first", bg: "#fff7ed", color: "#92400e", border: "#fed7aa" },
      { label: "Medical NLP", bg: "#faf5ff", color: "#5b21b6", border: "#c4b5fd" },
      { label: "SADC clinics", bg: "#f0fdf4", color: "#166534", border: "#bbf7d0" },
    ],
    imgSrc: "/images/proj-healthpassport.svg",
    imgBg: "#0f172a",
    accentColor: "#7c3aed",
  },
];

function OurPort() {
  return (
    <Grid>
      {projects.map((p) => (
        <Card key={p.id} reverse={p.reverse}>
          <Visual bg={p.imgBg}>
            <img src={p.imgSrc} alt={`${p.title} project illustration`} loading="lazy" decoding="async" />
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
