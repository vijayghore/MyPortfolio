import React from 'react'
import styled from 'styled-components'

const SkillItem = (props) => {
    return (
        <Item>
            <i className={props.icon}></i>
        </Item>
    )
}

export default SkillItem

const Item = styled.span`
  font-size: 3vw;
  text-align: center;
  background-color: #383E45;
  padding: 10px;
  border-radius: 20px;
  color: ${(props) => (props.color ? props.color: "#FFB742")};

  @media (max-width: 500px) {
      font-size: 10vw;
      padding: 20px;
  }
`;