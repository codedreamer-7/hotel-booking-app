import React from 'react'
import {useContext} from "react"
import {RoomContext} from '../Context'
import Title from "./Title"


const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}


export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    let types = getUnique(rooms, 'type');

    types = ['all', ...types]
    types = types.map((item, index) => {
        return <option key={index} value={item}> {item} </option>
    })

    let capacities = getUnique(rooms, "capacity")

    capacities = capacities.map((item, index) => {
        return <option key={index} value={item}> {item} </option>
    })

    return (
        <div className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                <div className="control-div">
                    <div className="control-item">
                        <label htmlFor="room_type">
                            Room type
                        </label>
                        <select name="type" id="room_type" value={type} className="form-control" onChange={handleChange}>
                            { types }
                        </select>
                    </div>
                    <div className="control-item">
                        <label htmlFor="room_capacity">
                            Guests
                        </label>
                        <select name="capacity" id="room_capacity" value={capacity} className="form-control" onChange={handleChange}>
                            { capacities }
                        </select>
                        <div className="filter-flags">
                            <label htmlFor="breakfast">
                                Breakfast
                            </label>
                            <input id="breakfast" type="checkbox" name="breakfast" checked={breakfast} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="control-item">
                        <label htmlFor="price">
                            Price Rs.{price}
                        </label>
                        <input id="price" name="price" type="range" min={minPrice} max={maxPrice} value={price} onChange={handleChange}/>
                        <div className="filter-flags">
                            <label htmlFor="pets">
                                Pets
                            </label>
                            <input id="pets" type="checkbox" name="pets" checked={pets} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="control-item">
                        <label htmlFor="size">
                            Room size
                        </label>
                        <div className="room-size-inputs">
                            <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} />
                            <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
