import React from 'react';
import styled from 'styled-components';
import greybox from '../assets/portfolio/greybox.webp';
import Paragraph from './Paragraph';

const Wrapper = styled.div`
@media(min-width:992px){
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction:${props => props.direction};
}
    img{
        width:100%;
        border-radius:7px;
        margin-bottom:20px;
        
    }
    
    .bottom{
        position:relative;
        margin-bottom:20px;
        
        @media(min-width:568px){
            max-width:400px;
            margin:0 auto 20px;
        }
        @media(min-width:992px){
            overflow:hidden;
            max-width:unset;
        }
        img{
            margin-bottom:0;
        }
        .text{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            color:#ffffff;
            text-align:center;
            h3{
                font-family:${props => props.theme.fam.bold};
                font-size:35px;
                margin-top:20px;
            }
            h5{
                font-family:${props => props.theme.fam.bold};
                font-size:20px;
            }
            p{
                color:#ffffff;
                padding:20px;
            }
        }
    }
    .bigger{
        @media(min-width:992px){
            width:68.5%;
        }
    }
    .inner{
        @media(min-width:992px){
            width:29.5%;
        }
        @media(min-width:1200px){
            width:30%;
        }
    }
`

function PortDiv({img_url_small, img_url, title, description, sub_title, direction}) {
  return (
    <Wrapper direction={direction}>
        <div className="inner">
            <img src={img_url_small} className='small-logo' alt={`${title}`} />
            <div className="bottom">
                <img src={greybox} alt='bg grey' />
                <div className="text">
                    <h3>{title}</h3>
                    <h5>{sub_title}</h5>
                    <Paragraph>{description}</Paragraph>
                </div>
            </div>
        </div>
        <img src={img_url} className='bigger' alt={`${title} one`} />
    </Wrapper>
  )
}

export default PortDiv