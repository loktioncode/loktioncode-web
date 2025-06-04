import React,{useState} from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { BsPaperclip } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

const Wrapper = styled.div`
  background: #EDEDEF;
  border-radius: 10px;
  margin-top: 20px;
  margin: 0 20px;
  padding:20px;
  @media(min-width:992px){
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin:0 40px;
  }

  img {
    width: 100%;
  }
  .text {
    padding: 20px;
    h2 {
      text-align: unset;
    }
    p {
      margin-bottom: 15px;
    }
  }
 
  h2 {
    color: #ffffff;
  }
  img {
    width: 100%;
  }
  form{
    max-width:535px;
    margin:0 auto;
    @media(min-width:992px){
      width:45%;
    }
  }
  [role="radiogroup"] {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    label {
      height: 50px;
      width: 48%;
      border-radius: 7px;
      margin: 0;
      background: ${(props) => props.theme.color.green};
      span {
        color: #ffffff;
        font-family: ${(props) => props.theme.fam.medium};
        font-size: 17px;
      }
    }
  }
  .MuiFormControl-root {
    width: 100%;
    margin-bottom: 10px;
    background: #5e93c9;
    height: 50px;
    input,
    textarea,
    label {
      color: #ffffff !important;
      padding-left: 10px;
      font-family: ${(props) => props.theme.fam.semibold} !important;
    }
    svg{
      color: #ffffff;
    margin-right: 14px;
    font-size:25px;
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
    color: #3770AB;
    text-align: center;
    font-size: 20px;
    font-family: ${(props) => props.theme.fam.bold};
    font-weight: 800;
    text-transform: uppercase;
    svg {
      color: ${(props) => props.theme.color.green};
    }
  }
  .image{
    @media(min-width:992px){
      width:45%;
    }
    h3{
      font-family:${props => props.theme.fam.bold};
      font-size:25px;
      text-align:center;
    }
  }
  #additional-documents{
    display:none;
  }
  #demo-simple-select-standard{
    padding-left:10px;
    font-family:${props => props.theme.fam.bold};
    color:#ffffff;
   
  }
  [for="additional-documents"]{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 96%;
    svg{
      font-size:22px;
      margin-right:0;
    }
  }
`;

function Banner() {
  const [budget, setBudget] = useState("");
  const [file, setFile] = useState(null);

  const handleChangeFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setBudget(event.target.value);
  };
  return (
    <Wrapper>
      <div className="image">
        <img src="/images/get/getaquote.webp" alt="Quote Loktion Code" />
        <h3>Get A Quote, Let’s Rumble</h3>
      </div>
      <form action="">
      <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="top"
          >
            <FormControlLabel
              value="Get A Quote"
              control={<Radio />}
              label="Get A Quote"
            />
            <FormControlLabel
              value="Talk To Us"
              control={<Radio />}
              label="Talk To Us"
            />
          </RadioGroup>

          <TextField
            id="yourName"
            variant="standard"
            name="yourName"
            label="Your Name"
            required
          />
          <TextField
            id="subscribeMail"
            variant="standard"
            name="subscribeMail"
            label="Your Email"
            required
          />
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Budget Range
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={budget}
              onChange={handleChange}
              label="Budget Range"
              IconComponent={() => <FaChevronDown />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="additional-documents">
              Additional Documents <BsPaperclip />
            </InputLabel>
            <input
              type="file"
              id="additional-documents"
              accept=".pdf, .doc, .docx"
              value={file}
              onChange={handleChangeFile}
            />
            
            
          </FormControl>
          <TextField
            id="message"
            name="message"
            variant="standard"
            label="Your Message"
            multiline
            rows={3}
            required
            style={{
              height:100
            }}
          />
        <button type="submit">
          Submit <FiArrowUpRight />
        </button>
      </form>
    </Wrapper>
  );
}

export default Banner;
