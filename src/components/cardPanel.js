import React from "react";
import EventCard from './card';
import './css/cardPanel.css';
import './css/card.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items =[
  <EventCard/>,
        <EventCard/>,
        <EventCard/>,
        <EventCard/>,
        <EventCard/>,
]
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};
function CardPanel(){
    return(
      <div className="p-4 ">
        <h3 className="ms-2 font">Upcoming Event</h3>
        <AliceCarousel 
        mouseTracking 
        items={items} 
        autoHeight  
        responsive={responsive}/>
      </div>
    );
}

export default CardPanel;