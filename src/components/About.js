import React from 'react'
import styled from 'styled-components'
import aboutme from '../images/aboutme.png'

const About = () => {
  return (
    <Wrapper>
      <Img src={aboutme} />
      <AboutMe>
        <Heading>About Me</Heading>
        <Description>
          Hi! I’m Vijay Ghore, and I’m a Web Developer who has passion for building clean web applications with intuitive functionality. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.
        </Description>
        <br />
        <HireMe>Hire Me</HireMe>
      </AboutMe>
    </Wrapper>
  )
}

export default About

const Wrapper = styled.div`
  margin: 150px 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 500px) {
      flex-direction: column;
      margin: 150px 50px;
  }
`
const Img = styled.img`
    src: url(${props => props.src});
    max-width: 400px;
    display: flex;
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 100px;

  @media (max-width: 500px) {
      margin: 30px 0px;
  }
`;
const Heading = styled.h1`
  font-size: 48px;
  margin: 0;
`;
const Description = styled.p`
  font-size: large;
  text-align: justify;
`;
const HireMe = styled.button`
  width: 121px;
  height: 54px;
  
  color: #212529;
  background: #FFB742;
  border: 2px solid #FFB742;
  box-sizing: border-box;
  border-radius: 50px;
  text-align: center;
  
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  
  &:hover{
      cursor: pointer;
  }
`;