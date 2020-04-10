import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import Services from "../components/Services"

import FeaturedRooms from "../components/FeaturedRooms"

import { Link } from "react-router-dom"
import Button from "../components/StyledHero"


export default function Home() {
    return (
        <div>
           <React.Fragment>
            <Hero>
                <Banner title="luxurious rooms" subtitle= "deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn" >
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
           </React.Fragment>
        </div>
    )
}
