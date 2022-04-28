import React from 'react'
import styled from 'styled-components'
import Widget from './Widget';
import profilepic from '../images/profilepic.png'

const Home = () => {
  return (
    <>
      <Wrapper>
        <Text1>Hi, I am <Name>Vijay Ghore</Name> 👋🏻</Text1>
        <Text2>A Full Stack Web Developer</Text2>
        <Text3>I love to code things beautifully and do what I love to do.</Text3>

        <Img src={profilepic} />
      </Wrapper>

      <WidgetsHolder>
        <Widget icon="fa-solid fa-medal" heading="50+" subheading="Completed Projects" />
        <Widget icon="fa-solid fa-check-double" heading="7+" subheading="Daily Working Hours" />
        <Widget icon="fa-solid fa-screwdriver-wrench" heading="100+" subheading="Days Afterservice" />
      </WidgetsHolder>
    </>
  )
}

export default Home

const Wrapper = styled.div`
  margin: 30px 50px;
  text-align: center;
`;

const Text1 = styled.p`
  font-size: 28px;
  margin: 20px 0;
  `;

const Name = styled.span`
  color: #FFB742;
  font-weight: bold;
  &:hover{
    text-decoration: underline;
  }
`;

const Text2 = styled.p`
  font-size: 42px;
  font-weight: bold;
  margin: 0;
`;

const Text3 = styled.p`
  font-size: 20px;
  margin-top: 50px 0;
`;

const Img = styled.img`
    src: url(${props => props.src});
    height: 200px;
`;

const WidgetsHolder = styled.div`
  display : flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;