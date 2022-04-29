import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Wrapper>
            <Logo><i className="fa-solid fa-code"></i></Logo>

            <List>
                <ListItem><Link href="home.js" className='active'> Home</Link></ListItem>
                <ListItem><Link href="home.js"> About</Link></ListItem>
                <ListItem><Link href="home.js"> Skills</Link></ListItem>
                <ListItem><Link href="home.js"> Protfolio</Link></ListItem>
                <ListItem><Link href="home.js"> Contact</Link></ListItem>
            </List>

            <HireMe><a href="https://wa.me/919730809750?text=Hey Vijay, We want you to hire for our company" target="_blank" rel="noreferrer"> Hire Me </a></HireMe>
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.div`
    margin: 17px 50px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Logo = styled.h1`
    display: flex;
    flex-direction: row;
    color: #FFB742;
    margin: 0;
`;

const List = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 500px) {
        display: none;
    }
`;

const ListItem = styled.li`
    margin: 0;
    padding: 10px 25px;

    display: flex;
    flex-direction: row;

    color: white;
    `;

const Link = styled.a`
    color: white;
    font-size: large;
    font-weight: bold;
    text-decoration: none;
    &:hover, &:focus{
        color: #FFB742;
    }
`;


const HireMe = styled.button`
    margin: 0;
    padding-left: 26px;

    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    color: #212529;

    width: 121px;
    height: 54px;
    
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

    a:link{
        color: #212529;
        text-decoration: none;
    }

    a:visited {
        color: #212529;
    }

    a:active {
        color: #212529;
    }
`;