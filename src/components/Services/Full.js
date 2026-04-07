import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import { BsArrowReturnRight } from "react-icons/bs";

const Wrapper = styled.section`
  padding: 10% 20px;
  @media (min-width: 992px) {
    padding: 5% 5% 8%;
  }
  @media (min-width: 1200px) {
    padding: 5% 8% 10%;
  }
  h2 {
    margin-bottom: 16px;
  }
  p {
    max-width: 760px;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 40px auto 0;
    max-width: 1400px;
    @media (min-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .item {
    background: ${(p) => p.theme.color.smokewhite};
    border-radius: 16px;
    padding: 28px;
    border: 1px solid rgba(46, 38, 64, 0.06);
    h3 {
      font-family: ${(props) => props.theme.fam.bold};
      font-size: 1.35rem;
      margin-bottom: 18px;
      color: ${(props) => props.theme.color.blue4};
    }
    .item-inner {
      margin-bottom: 22px;
      &:last-child {
        margin-bottom: 0;
      }
      h4 {
        font-family: ${(props) => props.theme.fam.bold};
        color: ${(props) => props.theme.color.ink};
        font-size: 1rem;
        margin-bottom: 10px;
        opacity: 0.85;
      }
      .row {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 8px 0;
        color: ${(props) => props.theme.color.inkMuted};
        font-family: ${(props) => props.theme.fam.medium};
        font-size: 15px;
        line-height: 1.45;
        svg {
          color: ${(props) => props.theme.color.green};
          margin-top: 3px;
          flex-shrink: 0;
          font-size: 18px;
        }
      }
    }
  }
`;

const rows = (items) =>
  items.map((label, i) => (
    <div className="row" key={i}>
      <BsArrowReturnRight aria-hidden />
      <span>{label}</span>
    </div>
  ));

function Full() {
  return (
    <Wrapper>
      <Heading textColor="#3cb878">
        Services <span>in depth</span>
      </Heading>
      <Paragraph>
        End-to-end engineering: we combine product software, device firmware,
        board-level work, applied AI, and ICT consultancy  IT support and
        hardware troubleshooting  so your system behaves as one product, not a
        pile of repos.
      </Paragraph>
      <div className="grid">
        <div className="item">
          <h3>Software & cloud</h3>
          <div className="item-inner">
            <h4>Product & integration</h4>
            {rows([
              "Custom applications and internal tools",
              "REST / GraphQL APIs and service boundaries",
              "Auth, roles, and audit trails",
              "CI/CD, environments, and observability",
            ])}
          </div>
          <div className="item-inner">
            <h4>Data & ML ops</h4>
            {rows([
              "Pipelines, labeling workflows, and evaluation",
              "Model packaging and versioning",
              "Batch and streaming inference patterns",
            ])}
          </div>
        </div>
        <div className="item">
          <h3>Embedded & IoT</h3>
          <div className="item-inner">
            <h4>Devices & fleets</h4>
            {rows([
              "Sensors, MCUs, and Linux edge",
              "MQTT, CoAP, LTE / LoRa where appropriate",
              "Provisioning, keys, and secure OTA",
              "Fleet health, logs, and remote diagnostics",
            ])}
          </div>
          <div className="item-inner">
            <h4>Real-time</h4>
            {rows([
              "Control loops and timing budgets",
              "RTOS tasks, ISRs, and DMA",
              "Field buses and calibration",
            ])}
          </div>
        </div>
        <div className="item">
          <h3>PCB & firmware</h3>
          <div className="item-inner">
            <h4>Hardware bring-up</h4>
            {rows([
              "Architecture support with your EE partner",
              "Prototype assembly and rework",
              "Test jigs and boundary-scan where useful",
              "Power, reset, and clock validation",
            ])}
          </div>
          <div className="item-inner">
            <h4>Firmware</h4>
            {rows([
              "Bare-metal and RTOS (FreeRTOS, Zephyr, etc.)",
              "Bootloaders and fail-safe recovery",
              "Drivers: SPI, I2C, SDIO, USB, CAN",
            ])}
          </div>
        </div>
        <div className="item">
          <h3>AI, robotics & UAVs</h3>
          <div className="item-inner">
            <h4>Applied ML</h4>
            {rows([
              "Domain-specific datasets and augmentation",
              "Fine-tuning and distillation for edge",
              "CV, tracking, and fusion with IMU/GNSS",
              "On-device inference (TensorRT, TFLite, custom)",
            ])}
          </div>
          <div className="item-inner">
            <h4>Autonomy stacks</h4>
            {rows([
              "Ground robots: navigation, safety, mission logic",
              "UAVs: link budgets, failsafe, and payload integration",
              "Simulation and replay for regression",
            ])}
          </div>
        </div>
        <div className="item">
          <h3>ICT consultancy & IT support</h3>
          <div className="item-inner">
            <h4>Workplace & infrastructure</h4>
            {rows([
              "Helpdesk-style support for desktops, laptops, and peripherals",
              "Windows / macOS troubleshooting, imaging, and policy basics",
              "Office networks: Wi‑Fi, switching, routing, and VPN access",
              "Backups, antivirus, and recovery planning",
            ])}
          </div>
          <div className="item-inner">
            <h4>Hardware & connectivity</h4>
            {rows([
              "On-site diagnostics for workstations, docks, and displays",
              "Printer, scanner, and peripheral setup and fault finding",
              "Cabling and rack tidy-ups with your facilities team",
              "Coordination with vendors for warranty and RMA workflows",
            ])}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Full;
