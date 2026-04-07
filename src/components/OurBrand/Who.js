import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import ClubHouseCard from "../../styled/ClubHouseCard";

const Wrapper = styled.section`
  margin: 0 20px;
  padding: 5% 5% 6%;
  text-align: center;
  @media (min-width: 992px) {
    margin: 0 40px;
  }
  h2 {
    color: ${(props) => props.theme.color.ink};
  }
  p {
    color: ${(props) => props.theme.color.inkMuted};
  }
  .inner {
    margin-top: 24px;
    @media (min-width: 768px) {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

const list = [
  {
    image: "/images/team-1.svg",
    title: "Walter (Product & UX)",
    text: "Turns complex workflows into interfaces operators can trust in the field.",
  },
  {
    image: "/images/team-2.svg",
    title: "Elisha Bere (Lead engineer)",
    text: "Architects full stacks  embedded, cloud, and models  for robots and UAV programs.",
  },
  {
    image: "/images/team-3.svg",
    title: "Ngoni (Software & systems)",
    text: "Ships reliable services, integrations, and telemetry pipelines under real load.",
  },
];

function Who() {
  return (
    <Wrapper id="team">
      <Heading>Who builds with you?</Heading>
      <Paragraph>
        A small, senior team  design, software, and hardware thinking in the same
        room.
      </Paragraph>
      <div className="inner">
        {list.map((item, i) => (
          <ClubHouseCard
            key={i}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </Wrapper>
  );
}

export default Who;
