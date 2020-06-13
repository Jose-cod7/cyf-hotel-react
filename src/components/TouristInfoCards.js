import React from "react";

const TouristInfoCards = () => {
  const touristWebsites = [
    { name: "Glasgow", url: "https://peoplemakeglasgow.com" },
    { name: "Manchester", url: "https://visitmanchester.com" },
    { name: "London", url: "https://visitlondon.com" }
  ];
  return (
    <div>
      {touristWebsites.map(city => {
        return (
          <div className="card">
            <img src="..." alt="" className="card-img-top" />
            <div className="card-body">
              <a href={city.url} target="_" className="btn btn-primary">
                Go to {city.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
