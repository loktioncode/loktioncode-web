import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import GreatDiv from "../../styled/GreatDiv";
import pic1 from "../../assets/doing1.webp";
import pic2 from "../../assets/doing2.webp";
import pic3 from "../../assets/doing3.webp";
import pic4 from "../../assets/doing4.webp";

const Wrapper = styled.section`
  padding: 0 20px;
  @media (min-width: 992px) {
    padding: 5%;
  }
  @media (min-width: 1200px) {
    padding: 5% 10%;
  }
  h2 {
    text-align: center;
    margin-bottom: 8px;
  }
  img {
    width: 100%;
    @media (min-width: 992px) {
      width: 45%;
    }
    @media (min-width: 1200px) {
      width: 55%;
    }
  }
`;

const list = [
  {
    title: "Applications & platforms",
    text1:
      "Backend services, dashboards, and integrations  designed for operators and maintainers, not just demo day.",
    text2:
      "APIs, auth, observability, and release discipline so your product survives real traffic.",
    image: pic1,
  },
  {
    title: "Embedded & connectivity",
    text1:
      "RTOS and bare-metal bring-up, drivers, buses, and resilient networking across flaky links.",
    text2:
      "OTA, secure boot, and field diagnostics so fleets stay healthy after install.",
    image: pic2,
  },
  {
    title: "Hardware & firmware",
    text1:
      "Schematic support through prototype builds: test points, fixtures, and firmware that matches the BOM.",
    text2:
      "Power, EMC awareness, and iteration loops that keep fab and firmware in sync.",
    image: pic3,
  },
  {
    title: "Robotics, UAVs & edge AI",
    text1:
      "Perception and control on real hardware  cameras, IMUs, ESCs, and payloads  with AI that fits the compute budget.",
    text2:
      "Custom datasets, model selection, and deployment to edge accelerators or microcontrollers where needed.",
    image: pic4,
  },
];

function Great() {
  return (
    <Wrapper>
      <Heading textColor="#2d9cdb">
        What we’re <span>great</span> at
      </Heading>
      {list.map((item, i) => (
        <GreatDiv
          key={i}
          title={item.title}
          text1={item.text1}
          text2={item.text2}
          image={item.image}
        />
      ))}
    </Wrapper>
  );
}

export default Great;
