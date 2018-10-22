import React, { Component } from "react";

class ThingListBodyItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.thing.name}</td>
        <td>{this.props.thing.description}</td>
      </tr>
    );
  }
}

export default ThingListBodyItem;
