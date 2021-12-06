import * as React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { Map } from "../components/Map";
import { Room } from "../components/Room";
import storyData from "../data/story_data.json";

const IndexPage = () => {
    const [roomID, setRoomID] = React.useState(storyData.startID);
    React.useEffect(() => {
        console.log(roomID)
    }, [roomID]);

    let room = storyData.rooms.find(element => element.id === roomID);
    return (
        <Main id='main'>
            <h1>Greek Myth Project (Prototype)</h1>
            <Game id='game'>
                <Map />
                <Room id={room.id} description={room.description} options={room.options} setRoomID={setRoomID}/>
            </Game>
        </Main>
    )  
}

const Main = styled(Container)`
    display: flex;
    flex-direction: column;
    font-family: Arial;
`

const Game = styled(Container)`

`
export default IndexPage