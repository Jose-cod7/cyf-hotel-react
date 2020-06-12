import React from "react";

const Heading = () => {
  const appName = "Welcome to CYF-Hotel";
  return (
    <div>
      <header>
        <h1> {appName} </h1>
        <img
          className="App-logo"
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          alt="hotel logo"
        />
      </header>
    </div>
  );
};
export default Heading;
