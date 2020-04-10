import React from 'react'
import {Link} from "react-router-dom"
import defaultImg from "../images/room-1.jpeg"
import PropTypes from "prop-types"

export default function Room({room}) {
    const {name, slug, images, price} = room
    return (
        
        <div className="room-item">
            <Link to={`/room/${slug}`} className="room-link">
                <div className="room-img-div">
                    <img src={images[0] || defaultImg} alt={name} />
                    <div className="price-chip">
                        <h6>₹ {price}</h6>
                        <p>per day</p>
                    </div>
                    <h5 className="room-name">
                        {name}
                    </h5>
                </div>
            </Link>
        </div>
    )
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}
