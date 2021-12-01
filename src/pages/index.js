import * as React from "react";
import * as d3 from "d3";
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
        <Container id='main' className='container'>
            <Room 
            description={room.description}
            options={room.options}
            setRoomID={setRoomID}
            />
        </Container>
    )  
}

export default IndexPage