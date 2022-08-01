import React from "react";
import { Card,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
function card(){
    return(
    <Card className="font">
        <Card.Title >Lorem ipsum bootcamp </Card.Title>
        <Card.Body>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p> 
            <p>Date    : </p>
            <p>Time    : </p>
            <p>Venue : </p>
        </Card.Body>
        <Button className="btn-card">Register</Button>
    </Card>
        
    );
}

export default card;