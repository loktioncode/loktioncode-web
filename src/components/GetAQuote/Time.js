import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paragraph from "../../styled/Paragraph";

const Wrapper = styled.section`
  padding: 10% 20px;
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 5%;
  }
  @media (min-width: 1200px) {
    padding: 5% 10%;
  }
  .time {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    @media (min-width: 992px) {
      width: 45%;
    }
    img {
      width: 100%;
      border-radius: 12px;
    }
    p {
      color: #ffffff;
      font-family: ${(props) => props.theme.fam.bold};
      font-size: clamp(2.5rem, 8vw, 4.5rem);
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin-bottom: 0;
      text-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
    }
  }
  p {
    margin-bottom: 20px;
  }
  .text {
    @media (min-width: 992px) {
      width: 45%;
    }
  }
`;

function Time() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <Wrapper>
      <div className="time">
        <img src="./images/get/time.jpg" alt="" />
        <p>{time}</p>
      </div>
      <div className="text">
        <Paragraph>
          Based in Midrand (Gauteng), we typically work{" "}
          <strong>09:00–18:00</strong> South Africa time  with overlap for EU
          mornings and useful async handoff for the Americas and Asia.
        </Paragraph>
        <Paragraph>
          Clear written updates and shared artifacts matter more than being in
          the same room; we’re set up for hybrid and remote collaboration.
        </Paragraph>
      </div>
    </Wrapper>
  );
}

export default Time;
