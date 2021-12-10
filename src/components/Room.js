import * as React from "react";
import { Container } from "./Container";
import styled, { keyframes } from "styled-components";

export const Room = ({room, items, setRoomID, setItems, setCenter}) => {
    console.log(room);
    let listOptions = room.options.map((option, index) => {
        let disabled = disableButton(items, option.items);
        return (
        <button
            key={room.id + " " + option.id} 
            onClick={() => onClick(option, items, setRoomID, setItems, setCenter)} 
            disabled={disabled ? true : null}
            style={disabled ? {color: 'grey'} : null}
        >
            {option.description}
        </button>
        )
        });

    React.useEffect(() => {
        if (typeof room.coordinates !== 'undefined') {
            setCenter([38, 50]);
        }
    }, [room, setCenter])

    return (
        <Container id='room' style={{paddingLeft: 20, paddingRight: 20}}>
            <Title>{room.title}</Title>
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
    if (option.description === "Restart") {
        for (const item of Object.keys(items)) {
            newItems[item] = 0;
        }

        setItems(newItems);
        setRoomID(option.room_id);
        return;
    }
    
    for (const [item, value] of Object.entries(items)) {
        newItems[item] = value + (option.items !== undefined && option.items[item] !== undefined ? option.items[item] : 0);
    }

    setItems(newItems);
    setRoomID(option.room_id);
}

const Title = styled.h3`
    margin-top: 0;
`

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
const leftIn = keyframes`
    0% { opacity: 0; transform: translateX(50px) }
    100% { opacity: 1; transform: translateX(0px) }
`

const Options = styled(Container)`
    display: inline-flex;
    flex-direction: column;
    margin-top: 30px;
    button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        box-sizing: border-box;
    }
    button {
        min-width: 150px;
        color: #3b6b8d;
        text-align: left;
        border: black 1px solid;
        border-bottom-style: none;
        padding: 5px;
        opacity: 0;
        animation-name: ${fadeIn};
        animation-duration: 2s;
        animation-fill-mode: forwards;
        animation-delay: .5s;
        transition-duration: .4s;
    }
    button:first-child {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    button:last-child {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-bottom-style: solid;
    }
    button:hover {
        background-color: #f1f1f1
    }
`