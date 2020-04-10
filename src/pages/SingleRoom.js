import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import Title from "../components/Title"

import { Link } from "react-router-dom"
import { RoomContext } from "../Context"


export default class SingleRoom extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            slug: this.props.match.params.slug,
        };
    }


    static contextType = RoomContext;


    render(){
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)

        if (!room) {
            return (
                <div className="error-div">
                    <div className="error-msg">
                        No such room exist
                    </div>
                    <Link to="/rooms" className="btn">
                        Back to Rooms
                    </Link>
                </div>
            )
        }

        const {
            name, description, capacity, size,
            price, extras, breakfast, pets, images
        } = room

        const [firstImg,...other_images] = images

        return (
            <React.Fragment>
                <Hero hero='homePage' image={firstImg}>
                    <Banner title={`${name} room`}>
                        <Link className="btn" to="/rooms">
                            Back to Rooms
                        </Link>
                    </Banner>
                </Hero>
                <Title title="Images"/>
                <div className="room-images">
                    { other_images.map((item, index) => {
                        return <img src={item} key={index} alt={name} />
                    }) }
                </div>
                <div className="room-info">
                    <h4>Description</h4>
                    <p>
                        {description}
                    </p>
                    <h4>Price</h4>
                    <p>
                        {price}
                    </p>
                    <h4>Size</h4>
                    <p>
                        {size} SQFT
                    </p>
                    <h4>Max Capacity</h4>
                    <p>
                        { capacity > 1 ? `${capacity} people` : `${capacity} person` }
                    </p>
                    <h4> { pets ? 'Pets allowed' : 'Pets not allowed'} | { breakfast ? 'Breakfast included' : 'Breakfast not included' } </h4>
                    <h4 style={{marginTop:'30px'}}>Extras</h4>
                    <div className="extras">
                        
                        { extras.map((item,index) => {
                            return <div className="extra-item" key={index}> -{item}</div>
                        }) }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
