import * as React from "react";
import { Container } from "./Container";
import styled, { keyframes } from "styled-components";

export const Room = ({id, description, options, setRoomID}) => {
    let listOptions = options.map((option, index) => 
        <button key={id + " " + option.id} onClick={() => setRoomID(option.room_id)} style={{animationDelay: 0.5 + index/10}}>
            {option.description}
        </button>
        );

    return (
        <Container id='room'>
            <Description key={id} id='description'>
                {description}
            </Description>
            <Options id='options'>
                {listOptions}
            </Options>
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

const Options = styled(Container)`
    margin-top: 30px;
    button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    button {
        display: block;
        opacity: 0;
        animation-name: ${topIn};
        animation-duration: 2s;
        animation-fill-mode: forwards;
    }
`