import React, { useState } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";
import Fade from "react-reveal";
import axios from "axios";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import { FiArrowUpRight } from "react-icons/fi";

const Wrapper = styled.section`
  background: ${(props) => props.theme.color.blue3};
  padding: 10% 20px;
  @media(min-width:992px){
    display:flex;
    flex-wrap:wrap;
    position:relative;
    padding-bottom:3%
  }
  img {
    width: 100%;
    display: block;
    margin: 0 auto;
    max-width: 450px;
    @media(min-width:992px){
      max-width:550px;
      z-index:1;
      width:45%;
      object-fit:contain;

    }
  }
  h2 {
    color: #ffffff;
    br {
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    }
  }
  p {
    color: #ffffff;
  }
  .left{
    max-width:535px;
    margin:0 auto;
    @media(min-width:92px){
      width:45%;
    }
  }
  form {
    
    margin-top: 30px;
    
    
  }
  .MuiFormControl-root {
    width: 100%;
    margin-bottom: 20px;
    background: #5e93c9;
    height: 50px;
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
  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-family: ${(props) => props.theme.fam.bold};
    font-weight: 800;
    text-transform: uppercase;
    svg {
      color: ${(props) => props.theme.color.yellow};
    }
  }
`;

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFailed, setIsFailed] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send form data to server or API endpoint
      const response = await axios.post(
        "https://formsubmit.co/email@gmail.com",
        formData
      );
      console.log("Form submission successful:", response.data);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      }, 5000);
    } catch (error) {
      setIsFailed("Form submission failed");
      setTimeout(() => {
        setIsFailed("");
      }, 5000);
    }
  };
  return (
    <Wrapper>
      <div className="left">
        <Heading>
          We Love Working With People <br /> To Create Awesome Work.
        </Heading>
        <Paragraph>
          Leave us your details and we will schedule a call with you
        </Paragraph>
        <form method="POST" onSubmit={handleSubmit}>
          <TextField
            id="fullName"
            variant="standard"
            name="fullName"
            label="Your Name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
          <TextField
            id="email"
            variant="standard"
            name="email"
            label="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <TextField
            id="message"
            name="message"
            variant="standard"
            label="How Should We Collaborate"
            multiline
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            required
          />

          <input
            type="hidden"
            name="_subject"
            value="New submission from your website!"
          />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_template" value="box" />
          <button type="submit">
            Submit <FiArrowUpRight />
          </button>
        </form>

        {isSubmitted && (
          <div style={{ color: "green", marginTop: 20, textAlign: "center" }}>
            <Fade bottom>Submitted successfully!</Fade>{" "}
          </div>
        )}
        <div style={{ color: "red", marginTop: 20, textAlign: "center" }}>
          <Fade bottom>{isFailed}</Fade>
        </div>
      </div>
      <img src="./images/manyblocks.webp" alt="Contact Blocks Loktion Code" />
    </Wrapper>
  );
}

export default Contact;
