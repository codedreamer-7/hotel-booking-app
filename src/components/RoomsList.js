import React from 'react'
import Room from './Room'

export default function RoomsList({rooms}) {
    if(rooms.length == 0) {
        return (
            <div>
              <h3 className="top-padding">Unfortunately no rooms matched your search parameters</h3> 
            </div>
        )
    }
    return (
        <div className="rooms-list">
            <div className="ft-rooms-center">
                { rooms.map(item=> {
                    return <Room key={item.id} room={item} />
                }) }
            </div>
        </div>
    )
}
