import React from "react";
import Card from './card';
import './css/cardPanel.css';
import './css/card.css';
function cardPanel(){
    return(
    <div className="cardPanel">
      
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    );
}

export default cardPanel;