import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {FiArrowUpRight} from 'react-icons/fi';
import Paragraph from './Paragraph';

const Wrapper = styled.div`
    background:${props => props.bgColor};
    color:#ffffff;
    border-radius: 10px;
    padding:20px;
    margin:0 auto;
    margin-bottom:30px;
    position:relative;
    padding-top:15%;
    max-width:450px;
    display:block;
    @media(min-width:992px){
      max-width:unset;
      
    }
    @media(min-width:1200px){
      padding-top:3%;

    }
    
    .span{
      position: absolute;
      top:15px;
      left:32px;
    }
    img{
      width:80px !important;
      @media(min-width:1200px){
        padding-top:40px;
        width:70px;
      }
    }
    .span{
      background:${props => props.spanColor};
      padding:8px 20px;
      font-family:${props => props.theme.fam.medium};
      border-radius:6px;
    }
    h3{
      font-family:${props => props.theme.fam.bold};
      font-size:23px;
      margin-bottom:20px;
      margin-top:10px;
      @media(min-width:992px){
        font-size:33px;
      }
    }
    p{
      color:#ffffff;
    }
    a{
      color:#ffffff;
      top:20px;
      right:20px;
      width:50px;
      position:absolute;
      font-size:50px;
    }
`

function HipCard({link, heading, text, icon, bgColor, type, spanColor}) {
  return (
    <Wrapper spanColor={spanColor} bgColor={bgColor} className="team-card">
      <span className="span">{type}</span>
        <Link to={`/${link}`}><FiArrowUpRight /></Link>
        <img src={`./images/${icon}.svg`} alt={heading} />
        <h3>{heading}</h3>
        <Paragraph>{text}</Paragraph>
    </Wrapper>
  )
}

export default HipCard