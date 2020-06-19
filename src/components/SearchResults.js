import React, { Component } from "react";
import moment from "moment";

class SearchResults extends Component {
  state = {
    categorie: ""
  };
  SearchResults = props => {
    const results = props.results;
    console.log(results);
  };

  SelectedRow = () => {
    this.setState(prevState => {
      return {
        categorie: (prevState.categorie = "selected-row")
      };
    });
  };

  render() {
    return (
      <div id="search-results">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Room id</th>
              <th scope="col">Check in date</th>
              <th scope="col">Check out date</th>
              <th scope="col">Nights per guest</th>
            </tr>
          </thead>
          <tbody>
            {this.props.results.map((row, index) => {
              return (
                <tr
                  className={this.state.categorie}
                  onClick={this.SelectedRow}
                  key={index}
                >
                  <th scope="row">{row.id}</th>
                  <td>{row.title}</td>
                  <td>{row.firstName}</td>
                  <td>{row.surname}</td>
                  <td>{row.email}</td>
                  <td>{row.roomId}</td>
                  <td>{row.checkInDate}</td>
                  <td>{row.checkOutDate}</td>
                  <td>
                    {moment(row.checkOutDate).diff(row.checkInDate, "days")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResults;
