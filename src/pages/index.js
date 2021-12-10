import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Container } from "../components/Container";
import { Map } from "../components/Map";
import { Room } from "../components/Room";
import storyData from "../data/story_data.json";

const IndexPage = () => {
    const [roomID, setRoomID] = React.useState(storyData.startID);
    const [items, setItems] = React.useState(storyData.items);
    const [center, setCenter] = React.useState(storyData.startCenter);
    React.useEffect(() => {
        console.log(roomID);
        console.log(items);
        console.log(center)
    }, [roomID, items, center]);

    let room = storyData.rooms.find(element => element.id === roomID);
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Hometown Myth Creation: The Odyssey CYOA</title>
        </Helmet>
        <Main id='main'>
            <h1>Hometown Myth Creation: The Odyssey CYOA</h1>
            <Game id='game'>
                <Map center={center}/>
                <Room 
                room={room}
                items={items}
                setRoomID={setRoomID}
                setItems={setItems}
                setCenter={setCenter}
                />
            </Game>
        </Main>
        </>
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