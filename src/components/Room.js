import * as React from "react";
import { Container } from "./Container";
import styled, { keyframes } from "styled-components";

export const Room = ({room, items, setRoomID, setItems}) => {
    console.log(room)
    let listOptions = room.options.map((option, index) => 
        <button 
            key={room.id + " " + option.id} 
            onClick={() => onClick(option, items, setRoomID, setItems)} 
            style={{animationDelay: 0.5 + index/10}}
            disabled={disableButton(items, option.items) ? true : null}
        >
            {option.description}
        </button>
        );

    return (
        <Container id='room' style={{paddingLeft: 20, paddingRight: 20}}>
            <h3>{room.title}</h3>
            <Description key={room.id} id='description'>
                <p>{room.description}</p>
            </Description>
            <Options id='options'>
                {listOptions}
            </Options>
        </Container>
    )
}

const disableButton = (items, optionItems) => {
    if (optionItems === undefined) {
        return false;
    }

    for (const [item, value] of Object.entries(optionItems)) {
        if (value < 0 && items[item] <= 0) {
            return true;
        }
    }

    return false;
}

const onClick = (option, items, setRoomID, setItems) => {
    let newItems = {};
    for (const [item, value] of Object.entries(items)) {
        newItems[item] = value + (option.items !== undefined && option.items[item] !== undefined ? option.items[item] : 0);
    }

    setItems(newItems);
    setRoomID(option.room_id);
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
    white-space: pre-line;
`
const topIn = keyframes`
    0% { opacity: 0; transform: translateX(50px) }
    100% { opacity: 1; transform: translateX(0px) }
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
        border: transparent 1px solid;
        padding: 5px 0px 5px 0px;
        margin-bottom: 2px;
        opacity: 0;
        animation-name: ${topIn};
        animation-duration: 2s;
        animation-fill-mode: forwards;
        transition-duration: 1s;
    }
    button:hover {
        border: red 1px solid;
    }
`