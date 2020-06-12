import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <div className="card">
        <img
          src="https://viajarporescocia.com/contenido/uploads/xfoto_principal-19.jpg.pagespeed.ic.uBUWk1sJuy.webp"
          className="card-img-top"
          alt="glasgow"
        />
        <div className="card-body">
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go to Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQSENYIIIjZbe6mnpr5I8vN5nChOYs2VCZicEBMCO2N5hhSxXo&usqp=CAU"
          className="card-img-top"
          alt="manchester"
        />
        <div className="card-body">
          <a href="visitmanchester.com" className="btn btn-primary">
            Go to Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.musement.com/cover/0002/49/big-ben-westminster-bridge-on-river-thames-in-london-jpg_header-148518.jpeg?w=1200&h=630&q=95&fit=crop"
          className="card-img-top"
          alt="london"
        />
        <div className="card-body">
          <a href="visitlondon.com" className="btn btn-primary">
            Go to London
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
