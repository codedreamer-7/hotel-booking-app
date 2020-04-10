import React, { Component } from 'react'
import { RoomContext } from "../Context"
import Loading from "./Loading"
import Room from "./Room"
import Title from "./Title"

export default class FeaturedRooms extends Component {
    static contextType = RoomContext

    render() {
        var { loading, featuredRooms: rooms} = this.context

        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })

        return (
            <div className="featuredRooms">
                <Title title="Featured Rooms"/>
                <div className="ft-rooms-center">
                    { loading ? <Loading/> : rooms }
                </div>
            </div>
        )
    }
}

