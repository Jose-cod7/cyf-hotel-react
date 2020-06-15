import React from "react";

import Bookings from "./Bookings";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import "./App.css";

const App = () => {
  const touristWebsites = [
    {
      name: "Glasgow",
      url: "https://peoplemakeglasgow.com",
      img:
        "https://viajarporescocia.com/contenido/uploads/foto_principal-19.jpg"
    },
    {
      name: "Manchester",
      url: "https://visitmanchester.com",
      img:
        "https://www.cerodosbe.com/uploads/s1/99/83/63/0/panoramica-3-turismo-de-manchester_16_643x397.jpeg"
    },
    {
      name: "London",
      url: "https://visitlondon.com",
      img:
        "https://images.musement.com/cover/0002/49/big-ben-westminster-bridge-on-river-thames-in-london-jpg_header-148518.jpeg?w=1200&h=630&q=95&fit=crop"
    }
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cards={touristWebsites} />
      <Bookings />
    </div>
  );
};

export default App;
