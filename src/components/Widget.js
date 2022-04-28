import React from 'react'
import styled from 'styled-components'

const Widget = (props) => {
    return (
        <WidgetStructure>
            <WidgetIcon>
                <i className={props.icon} ></i>
            </WidgetIcon>

            <WidgetBody>
                <Heading>{props.heading}</Heading>
                <SubHeading>{props.subheading}</SubHeading>
            </WidgetBody>
        </WidgetStructure>
    )
}

export default Widget


const WidgetStructure = styled.div`
    display: flex;
    flex-direction: row;
    width: 400px;
    height: 100px;
    border: 2px solid #FFB742;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px;
`

const WidgetIcon = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 48px;
`

const WidgetBody = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    text-align: center;
`;

const Heading = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #FFB742;
`

const SubHeading = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 31px;
`;
