import React from "react";
import SearchButton from "./components/SearchButton";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";

const Search = () => {
  const contactDetails = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="search">
      <div className="page-header">
        <Heading />
        <br />
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <TouristInfoCards />
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
      <Footer info={contactDetails} />
    </div>
  );
};

export default Search;
