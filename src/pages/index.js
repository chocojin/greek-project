import * as React from "react";
import styled from "styled-components";
import 'leaflet/dist/leaflet.css';
import { Container } from "../components/Container";
import { Map } from "../components/Map";
import { Room } from "../components/Room";
import storyData from "../data/story_data.json";

const IndexPage = () => {
    const [roomID, setRoomID] = React.useState(storyData.startID);
    const [items, setItems] = React.useState(storyData.items);
    React.useEffect(() => {
        console.log(roomID);
        console.log(items);
    }, [roomID, items]);

    let room = storyData.rooms.find(element => element.id === roomID);
    return (
        <Main id='main'>
            <h1>Hometown Myth Creation: The Odyssey CYOA</h1>
            <Game id='game'>
                <Map />
                <Room 
                room={room}
                items={items}
                setRoomID={setRoomID}
                setItems={setItems}/>
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
    display: flex;
`
export default IndexPage