import React, { Component } from "react";
import { Card,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import"./css/card.css"
class EventCard extends Component{
    render()
    {
    return(
    <Card className="font p-4">
        <Card.Title >{this.props.title} </Card.Title>
        <Card.Body>
        <p>{this.props.body}</p> 
            <p>Date    :{this.props.date} </p>
            <p>Time    :{this.props.time} </p>
            <p>Venue :{this.props.venue} </p>
        </Card.Body>
        <Button className="btn-card btn-lg">Register</Button>
    </Card>
        
    );}
}

EventCard.defaultProps = {
    title:"Lorem ipsum bootcamp",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    date:"23-12-2022",
    time:"7:00pm",
    venue:"Cetaa hall",
}
export default EventCard;