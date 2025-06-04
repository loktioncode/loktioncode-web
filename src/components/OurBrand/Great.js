import React from 'react';
import styled from 'styled-components';
import Heading from '../../styled/Heading';
import GreatDiv from '../../styled/GreatDiv';
import pic1 from '../../assets/doing1.webp'
import pic2 from '../../assets/doing2.webp'
import pic3 from '../../assets/doing3.webp'
import pic4 from '../../assets/doing4.webp'

const Wrapper = styled.section`
    padding:0 20px;
    @media(min-width:992px){
        padding:5%;
    }
    @media(min-width:1200px){
        padding:5% 10%;
    }
    h2{
        text-align:center;
    }
    img{
        width:100%;
        @media(min-width:992px){
                width:45%;
            }
            @media(min-width:1200px){
                width:55%;
            }
    }
`

const list = [
    {
        title: 'Mobile App Design',
        text1: 'Our AI solutions leverage cutting-edge machine learning algorithms to help businesses make data-driven decisions and automate complex processes.',
        text2: 'We develop custom software solutions that are tailored to your specific business needs, ensuring optimal performance and scalability.',
        image: pic1, 
    },
    {
        title: 'Branding',
        text1: 'Our IoT solutions enable real-time monitoring and control of devices, helping businesses optimize operations and reduce costs.',
        text2: 'We provide comprehensive cloud infrastructure services that ensure security, scalability, and high availability for your business applications.',
        image: pic2, 
    },
    {
        title: 'Software Development',
        text1: 'Our team of experts combines technical knowledge with business understanding to deliver solutions that drive real business value.',
        text2: 'We stay at the forefront of technology trends to ensure our clients benefit from the latest innovations in digital solutions.',
        image: pic3, 
    },
    {
        title: 'Systems Networking & Security',
        text1: 'We believe in building long-term partnerships with our clients, providing ongoing support and continuous improvement of our solutions.',
        text2: 'Our commitment to quality and innovation ensures that every solution we deliver meets the highest standards of excellence.',
        image: pic4,  
    },
]

function Great() {
  return (
    <Wrapper>
        <Heading>What We're Great At Doing</Heading>
        {list.map((item, i)=>{
            return <GreatDiv 
            key={i}
            title={item.title}
            text1={item.text1}
            text2={item.text2}
            image={item.image} 
            />
        })}
    </Wrapper>
  )
}

export default Great