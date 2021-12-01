import * as React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { Room } from "../components/Room";
import storyData from "../data/story_data.json";

const IndexPage = () => {
    const [roomID, setRoomID] = React.useState(storyData.startID);
    React.useEffect(() => {
        console.log(roomID)
    }, [roomID]);

    let room = storyData.rooms.find(element => element.id === roomID);
    return (
        <>
        <h1>Greek Myth Project (Prototype)</h1>
        <Main id='main'>
            <Room 
            id={room.id}
            description={room.description}
            options={room.options}
            setRoomID={setRoomID}
            />
        </Main>
        </>
    )  
}

const Main = styled(Container)`
    display: flex;
`
export default IndexPage