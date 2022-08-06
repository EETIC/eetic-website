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
function CardPanel(){
    return(
      <div className="p-4 ">
        <h1 className="ms-2 font">Upcoming Event</h1>
        <AliceCarousel mouseTracking items={items} responsive={{0: {items: 1,},512:{items:2},1024: {items: 3}}} />
      </div>
    );
}

export default CardPanel;