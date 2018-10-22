import React, { Component } from "react";
import ThingListHead from "./ThingListHead";
import ThingListBody from "./ThingListBody";

import "./styles.css";
import Header from "../Header/Header";

class ThingList extends Component {
  state = {
    isLoaded: false,
    items: [],
    error: null
  };

  componentDidMount() {
    fetch("/api/things/things/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { isLoaded, items, error } = this.state;

    let Loader = <div className="loader" />;
    return (
      <div>
        <Header />
        <table className="table">
          <ThingListHead />
          {isLoaded ? <ThingListBody things={items} /> : Loader}
        </table>
      </div>
    );
  }
}

export default ThingList;
