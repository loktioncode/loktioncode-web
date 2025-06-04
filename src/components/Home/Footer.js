import React from "react";
import styled from "styled-components";
import Paragraph from "../../styled/Paragraph";
import { TextField } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";

const Wrapper = styled.footer`
padding:5% 20px;
position:relative;
&:before{
  content:"";
  background:#FDE030;
  height:3vh;
  width:90%;
  position: absolute;
  bottom:0;
  left:50%;
  border-radius:20px 20px 0 0;
  transform:translateX(-50%);
}
@media(min-width:992px){
  display:flex;
  justify-content: space-between;
  padding:5%;
  .left{
    width:45%;
    margin-right:20px;
    max-width:500px;
    display:flex;
    flex-direction:column;
  }
  .right {
    width:45%;
    .contact-info {
      margin-bottom: 20px;
      h3 {
        font-family: ${props => props.theme.fam.bold};
        font-size: 20px;
        margin-bottom: 15px;
        color: #444;
      }
      p {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        svg {
          margin-right: 10px;
          color: ${props => props.theme.color.blue};
        }
      }
    }
  }
}
  p {
    color: #444;
    font-size: 15px;
    font-family: ${(props) => props.theme.fam.medium};
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 15px;
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 25px;
    }
  }
  .copy-lap {
    display: none;
    @media (min-width: 992px) {
      display: flex;
      align-items: flex-end;
      flex:1;
      margin-top: 10px;
    }
  }
  .copy-mob {
    @media (min-width: 992px) {
      display: none;
    }
  }
  img{
    width:100%;
    max-width:250px;
    margin:0 auto 15px;
    display:block;
  }
  form{
    margin-top:15px;
    background:${props => props.theme.color.blue2};
    display:flex;
    align-items:center;
    justify-content: space-between;
    margin-bottom:15px;
    .MuiFormControl-root {
   flex:1;
    background: #5e93c9;
    height: 40px;
    input,
    textarea,
    label {
      color: #ffffff !important;
      padding-left: 10px;
      font-family: ${(props) => props.theme.fam.semibold} !important;
    }
    .MuiInputBase-root {
      &:before,
      &:after {
        border-bottom: none !important;
      }
    }
    .MuiInputBase-root {
      &:before {
        border-bottom: none !important;
      }
    }
    [data-shrink="true"] {
      color: #ffffff !important;

      &:after {
        border: none !important;
      }
    }
  }
  button{
    background:transparent;
    border:none;
    border-left:2px solid ${props => props.theme.color.yellow};
    padding:0 15px;
    text-transform:uppercase;
    display:flex;
    align-items:center;
    font-family:${props => props.theme.fam.bold};
    font-size:16px;
    color:#ffffff;
    svg{
        color:${props => props.theme.color.yellow};
        font-size:20px;
    }
  }
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div className="left">
        <img src="./images/logoblack.webp" alt="Loktion Logo Black" />
        <Paragraph>
          Get notified of any promo's we run on our services, we get too excited
          sometimes and offer promos
        </Paragraph>
        <form action="">
          <TextField
            id="subscribeMail"
            variant="standard"
            name="subscribeMail"
            label="name@gmail.com"
            required
          />
          <button type="submit">
            Submit <FiArrowUpRight />
          </button>
        </form>
        <p className="copy-lap">Copyright © 2023 All Rights Reserved</p>
      </div>
      <div className="right">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            +27 65 532 5054
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            info@loktioncode.org
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            10 Bond Street, Midrand, 1685
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
