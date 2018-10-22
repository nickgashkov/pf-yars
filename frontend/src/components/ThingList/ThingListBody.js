import React, { Component } from "react";
import ThingListBodyItem from "./ThingListBodyItem";

class ThingListBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.things.map(thing => (
          <ThingListBodyItem key={thing.id} thing={thing} />
        ))}
      </tbody>
    );
  }
}

export default ThingListBody;
