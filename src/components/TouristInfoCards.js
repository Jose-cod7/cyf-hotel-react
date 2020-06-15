import React from "react";

const TouristInfoCards = props => {
  return (
    <div>
      {props.cards.map(city => {
        return (
          <div key={city.name} className="cards">
            <div className="card">
              <img
                src={city.img}
                alt={"image of " + city.name}
                className="card-img-top"
              />
              <div className="card-body">
                <a href={city.url} target="_" className="btn btn-primary">
                  Go to {city.name}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
