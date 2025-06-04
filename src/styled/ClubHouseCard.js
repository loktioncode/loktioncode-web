import React from 'react';
import styled from 'styled-components';
import Paragraph from './Paragraph';

const Wrapper = styled.div`
    padding:10px;
    background:${props => props.theme.color.blue4};
    border-radius:10px;
    margin-top:20px;
    @media(min-width:768px){
        width:44%;
        margin-top:0;
    }
    @media(min-width:992px){
        width:28%;
    }
    h3{
        color:#FDE030;
        font-size:25px;
        font-family:${props => props.theme.fam.bold};
        margin:10px 0;
    }
    img{
        width:100%;
    }
`

function ClubHouseCard({image, title, text}) {
  return (
    <Wrapper>
        <img src={image} alt={title} />
        <div className="text">
            <h3>{title}</h3>
            <Paragraph>{text}</Paragraph>
        </div>
    </Wrapper>
  )
}

export default ClubHouseCard