import * as React from "react";
import { Container } from "./Container";

export const Room = ({description, options, setRoomID}) => {
    let listOptions = options.map(option => <li key={option.id}>
            <a href='#' onClick={() => setRoomID(option.room_id)}>
                {option.description}
            </a>
        </li>);

    return (
        <Container id='room' className='room'>
            <Container id='description'>
                {description}
            </Container>
            <Container id='options'>
                <ul>
                    {listOptions}
                </ul>
            </Container>
        </Container>
    )
}