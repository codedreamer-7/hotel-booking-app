import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from "./RoomsList" 
import { withRoomConsumer } from "../Context"
import Loading from "../components/Loading"


function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context;

    if(loading) {
        return (
            <Loading/>
        )
    }

    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </div>
    ) 

}

export default withRoomConsumer(RoomContainer);


// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from "./RoomsList" 
// import { RoomConsumer } from "../Context"
// import Loading from "../components/Loading"

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//         {
//             value => {
//                 const {loading, sortedRooms, rooms} = value;
//                 if(loading) {
//                     return (
//                         <Loading/>
//                     )
//                 }

//                 return (
//                     <div>
//                         Rooms container
//                         <RoomsFilter />
//                         <RoomsList />
//                     </div>
//                 ) 
//                 }
//         }
//         </RoomConsumer>
//     )
// }
