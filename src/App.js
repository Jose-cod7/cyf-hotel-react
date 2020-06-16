import React from "react";

import Bookings from "./Bookings";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import TouristInfoCards from "./components/TouristInfoCards";
import "./App.css";

const App = () => {
  const contactDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
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
      <Footer info={contactDetails} />
    </div>
  );
};

export default App;
