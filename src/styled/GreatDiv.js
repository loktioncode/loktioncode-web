import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Paragraph from './Paragraph';

const Wrapper = styled.div`
    background:#F9F9F9;
    border-radius:10px;
    margin-top:20px;
    @media(min-width:992px){
        display:flex;
        align-items:center;
       
    }
    .text{
        padding:20px;
        @media(min-width:992px){
            padding:0 5%;
        }
        @media(min-width:1200px){
            padding:130px 5%;
        }
        h2{
            text-align:unset;
        }
        p{
            margin-bottom:15px;
        }
    }
    img{
            @media(min-width:992px){
                width:45%;
            }
            @media(min-width:1200px){
                width:55%;
            }
        }
`

function GreatDiv({title, text1, text2, image}) {
  return (
    <Wrapper>
        <div className="text">
            <Heading>{title}</Heading>
            <Paragraph>{text1}</Paragraph>
            <Paragraph>{text2}</Paragraph>
        </div>
        <img src={image} alt={title} />
    </Wrapper>
  )
}

export default GreatDiv;