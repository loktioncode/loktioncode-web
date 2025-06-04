import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {FiArrowUpRight} from 'react-icons/fi';
import Paragraph from './Paragraph';

const Wrapper = styled.div`
    background:${props => props.bgColor};
    color:#ffffff;
    border-radius: 20px;
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
      padding:40px;
    }
    img{
      width:80px;
      @media(min-width:1200px){
        padding-top:100px;
      }
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

function HipCard({link, heading, text, icon, bgColor}) {
  return (
    <Wrapper bgColor={bgColor} className="hip-card">
        <Link to={`/${link}`}><FiArrowUpRight /></Link>
        <img src={`./images/${icon}.svg`} alt={heading} />
        <h3>{heading}</h3>
        <Paragraph>{text}</Paragraph>
    </Wrapper>
  )
}

export default HipCard