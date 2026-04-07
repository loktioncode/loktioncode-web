import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import HipCard from "../../styled/HipCard";

const Wrapper = styled.section`
  padding: 5% 20px;
  text-align: left;
  @media (min-width: 1200px) {
    padding: 4% 6%;
  }
  h2 {
    margin-bottom: 20px;
    @media (min-width: 992px) {
      max-width: 640px;
    }
  }

  .top {
    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 32px;
      h2 {
        margin-bottom: 0;
      }
      p {
        max-width: 520px;
      }
    }
  }
  .bottom {
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1100px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
  }
`;

const hips = [
  {
    heading: "Custom software",
    text: "Web, cloud, and internal tools  APIs, integrations, and reliable delivery pipelines for products that need to scale.",
    icon: "code",
    bgColor: "#4ECDC4",
  },
  {
    heading: "IoT & embedded",
    text: "Sensors, edge gateways, telemetry, and OTA updates  systems that run where the network is messy and uptime matters.",
    icon: "network",
    bgColor: "#FF6B6B",
  },
  {
    heading: "PCB & firmware",
    text: "Schematic through bring-up: layout support, prototypes, drivers, RTOS or bare-metal firmware, and test fixtures.",
    icon: "pcb",
    bgColor: "#9b8fd9",
  },
  {
    heading: "Robotics & UAVs",
    text: "Field robots, drones, and payloads  perception, controls, and autonomy with AI running on the device.",
    icon: "uav",
    bgColor: "#FF9F1C",
  },
  {
    heading: "AI & custom models",
    text: "Applied ML and CV: fine-tuned models, edge deployment, evaluation, and data pipelines aligned to your domain.",
    icon: "brain",
    bgColor: "#2d9cdb",
  },
  {
    heading: "ICT consultancy & IT support",
    text: "Networks, workstations, servers, and peripherals  structured IT support, incident response, and on-site help for hardware and connectivity issues.",
    icon: "ict",
    bgColor: "#4b5563",
  },
];

function Hip() {
  return (
    <Wrapper id="services">
      <div className="top">
        <Heading textColor="#FF6B6B">
          Serious systems, <span>playful craft.</span>
        </Heading>
        <Paragraph>
          We bridge mechanical, electrical, and software  plus ICT consultancy:
          IT support, networks, and hands-on hardware troubleshooting  so your
          fleet, farm, or factory gets one coherent stack instead of several
          vendors pointing fingers.
        </Paragraph>
      </div>
      <div className="bottom">
        {hips.map((item, i) => (
          <HipCard
            key={i}
            heading={item.heading}
            text={item.text}
            icon={item.icon}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </Wrapper>
  );
}

export default Hip;
