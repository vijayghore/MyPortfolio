import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <PersonalInfo>
                <h1>Vijay Ghore</h1>
                <h3>A Full Stack Web Developer</h3>
            </PersonalInfo>

            <Links>
                <NavigationLinks>
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#top">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </NavigationLinks>

                <SocialLinks>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="https://wa.me/919730809750" target="_blank">Whatsapp</a></li>
                        <li><a href="https://github.com/vijayghore" target="_blank">Github</a></li>
                        <li><a href="#">Linkdin</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </SocialLinks>
            </Links>
        </Wrapper>
    )
}

export default Footer


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    /* width: auto; */

    background-color: #1c1c1c;
    padding: 20px;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`

const PersonalInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: left;

    @media (max-width: 600px) {
        align-items: center;
        text-align: center;
    }

    h1{
        color: #FFB742;
        font-weight: bold;
        margin: 0;
        &:hover{
            text-decoration: underline;
        }
    }

    h3{
        font-weight: normal;
        margin: 0;
    }

`
const Links = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px;
    justify-content: center;
    align-items: center;
`

const NavigationLinks = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0px 100px;

    @media (max-width: 600px) {
        align-items: center;
        text-align: center;
    }
    

    h3{
        margin: 0;
    }

    ul{
        list-style: none;
        padding-left: 0;
    }

    ul > li {
        padding: 5px 0;
    }

    ul > li > a{
        text-decoration: none;
        color: #7b7b7b;
    }
`
const SocialLinks = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0px 100px;


    @media (max-width: 600px) {
        align-items: center;
        text-align: center;
    }

    h3{
        margin: 0;
    }

    ul{
        list-style: none;
        padding-left: 0;
    }

    ul > li {
        padding: 5px 0;
    }    

    ul > li > a{
        text-decoration: none;
        color: #7b7b7b;
    }
`