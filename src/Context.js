import React, { Component } from 'react'
import items from "./data"


const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets: false
    }

    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(item=> item.featured === true)

        let maxPrice = Math.max(...rooms.map(item=> item.price));
        let maxSize = Math.max(...rooms.map(item=> item.size));

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            maxPrice,
            maxSize,
            price:maxPrice
        })
    }

    formatData(items){
        let tempItems = items.map(item => {
            let id= item.sys.id;
            let images = item.fields.images.map(img=> img.fields.file.url);

            let room = {...item.fields, images, id}
            return room;
        })

        return tempItems;
    }


    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        //unlike filter() find() will stop execution once it finds
        const room = tempRooms.find(r=> r.slug == slug )
        return room;
    }


    handleChange = event => {
        const type = event.target.type
        const name = event.target.name
        const value = type == 'checkbox' ? event.target.checked : event.target.value

        this.setState({
            [name]: value
        }, this.filterRooms)
    }


    filterRooms = ()=> {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets, maxPrice} = this.state
        let tempRooms = [...rooms];
        
        capacity = parseInt(capacity)
        minSize = parseInt(minSize)
        maxSize = parseInt(maxSize)

        if( type != 'all') {
            tempRooms = tempRooms.filter(room=> room.type == type)  
        }

        if( capacity != 1 ) {
            tempRooms = tempRooms.filter(room=> room.capacity >= capacity)
        }

        if( price != maxPrice){
            tempRooms = tempRooms.filter(room=> room.price <= price)
        }

        tempRooms = tempRooms.filter(room=> room.size >= minSize && room.size <= maxSize )

        if( pets ) {
            tempRooms = tempRooms.filter(room=> room.pets == true)
        }
        if( breakfast ){
            tempRooms = tempRooms.filter(room=> room.breakfast == true )
        }

        this.setState({
            sortedRooms: tempRooms
        })
    }


    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state, 
                getRoom: this.getRoom,
                handleChange: this.handleChange
            }}>
                { this.props.children }
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

export const withRoomConsumer = (Component)=>{
    return (props) => {
        return <RoomConsumer>
            { value => <Component {...props} context={value} /> }
        </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext };
