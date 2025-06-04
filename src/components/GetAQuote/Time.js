import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Paragraph from "../../styled/Paragraph";

const Wrapper = styled.section`
padding:10% 20px;
@media(min-width:992px){
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:5%;
}
@media(min-width:1200px){
 
  padding:5% 10%;
}

  .time{
    position:relative;
    max-width:600px;
    margin:0 auto;
    @media(min-width:992px){
  width:45%;
}
    img{
      width:100%;
      
    }
    p{
      color:#ffffff;
      font-family:${props => props.theme.fam.bold};
      font-size:70px;
      position:absolute;
      top:45%;
      left:50%;
      transform:translate(-50%, -50%);
      margin-bottom:0;
      
    }
  }
  p{
    margin-bottom:20px;
  }
  .text{
    @media(min-width:992px){
  width:45%;
}
  }
`;

function Time() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <Wrapper>
      <div className="time">
         <img src="./images/get/time.jpg" alt="Time Loktion Code" />
          <p>{time}</p>
      </div>
     
      <div className="text">
        <Paragraph>
          We are located in Cape Town, South Africa and our working hours are
          between 09:00 and 18:00 (Central Africa Time).
        </Paragraph>
        <Paragraph>
          Chronometry is not our strong suit, but we know from a reliable source
          that our timezone is the same as London (GMT/GMT+1). That means we can
          easily provide overlap with both the US and Asia.
        </Paragraph>
        <Paragraph>
          Still, if experience has shown us anything is that having good
          asynchronous communication, not proximity, is key to a successful
          partnership.
        </Paragraph>
      </div>
    </Wrapper>
  );
}

export default Time;
