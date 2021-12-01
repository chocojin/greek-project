import * as React from "react";
import { Container } from "./Container";
import styled, { keyframes } from "styled-components";

export const Room = ({id, description, options, setRoomID}) => {
    let listOptions = options.map(option => 
        <li key={id + " " + option.id} onClick={() => setRoomID(option.room_id)}>
            {option.description}
        </li>);

    return (
        <Container id='room'>
            <Description key={id} id='description'>
                {description}
            </Description>
            <Container id='options'>
                <Options>
                    {listOptions}
                </Options>
            </Container>
        </Container>
    )
}

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

const Description = styled(Container)`
    opacity: 0;
    animation-name: ${fadeIn};
    animation-duration: 2s;
    animation-fill-mode: forwards;
`
const topIn = keyframes`
    0% { opacity: 0; transform: translateY(-100px) }
    100% { opacity: 1; transform: translateY(0px)}
`

const Options = styled.ul`
    list-style-type: none;
    padding: 0;
    li {
        cursor: pointer;
        opacity: 0;
        border: silver 1px solid;
        animation-name: ${topIn};
        animation-duration: 2s;
        animation-fill-mode: forwards;
    }

    li:nth-child(1) {
        animation-delay: 1s
    }
    li:nth-child(2) {
        animation-delay: 1.1s
    }
`