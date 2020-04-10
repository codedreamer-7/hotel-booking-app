import React, { Component } from 'react'

import { FaCocktail, FaHiking, FaShuttleVa, FaBeer, FaShuttleVan } from "react-icons/fa"

import Title from "./Title"

export default class Services extends Component {

    state = {
        services: [
            {
                id:1,
                icon: <FaCocktail/>,
                title:"free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores id dignissimos aliquid nam."
            },
            {
                id:2,
                icon:<FaHiking />,
                title:"Endless Hiking",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores id dignissimos aliquid nam."
            },
            {
                id:3,
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores id dignissimos aliquid nam."
            },
            {
                id:4,
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores id dignissimos aliquid nam."
            }
        ]
    }

    render() {
        return (
            <div className="services">
                <Title title="Services" />
                <div className="services-center">
                    { this.state.services.map((item, index) => {
                        return <div key={item.id} className="service">
                            <span className="service-icom">
                                { item.icon }
                            </span>
                            <h6> { item.title } </h6>
                            <p>
                                { item.info }
                            </p>
                        </div>
                    }) }
                </div>
            </div>
        )
    }
}
