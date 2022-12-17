// import React, { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=First slide&bg=373940"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Second slide&bg=282c34"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Third slide&bg=20232a"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// render(<ControlledCarousel />);

import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import "./css/carousel.css";
import { Image } from "react-bootstrap";
import { event_data } from "../data/event";

function ImgReel() {
  let date = new Date();
  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    event_data.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
    event_data.reverse();
    console.log(event_data);
    setSortData(event_data);
  }, []);

  return (
    <>
      {/* <div className="arc"></div>
      <div className="dashes"></div> */}
      {/* <Image
        className="round-border"
        // width={800}
        // height={800}

        src={require("../images/round.svg")}
        fluid
      /> */}
      <Carousel>

        {sortData.map((event, i) => {
          const e_date = new Date(`${event.start_date}`);
          return (e_date > date &&
            <Carousel.Item interval={2000} className="">
              <a href="/events">
              <Image
                className="carousel-img"
                // width={800}
                // height={800}
                src={event.poster_url}
                fluid
      
                index={i} />
                </a>
            </Carousel.Item>
          );
        })}

<Carousel.Item interval={2000} className="">
          <a href="https://ca.eetifoundation.org" target="_blank">
            <Image
              className="carousel-img"
              src={require("../images/7.jpeg")}
              fluid
              />
              </a>
        </Carousel.Item>


        {/* <Carousel.Item interval={2000} className="">
          <Image
            className="carousel-img"
            // width={800}
            // height={800}

            src={require("../images/3.png")}
            fluid
  
          />
          <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
}

export default ImgReel;
