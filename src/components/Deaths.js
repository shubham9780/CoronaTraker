import React, { Component } from "react";
var d = new Date();
var n = d.toLocaleDateString();
export default class DeathsDisplay extends Component {
  render() {
    return (
      <div className="box deaths">
      <h4 style={{fontWeight:"545"}}>Deaths</h4>
      <h4 style={{fontWeight:"bold"}}>{this.props.value}</h4>
      <h4 style={{fontWeight:"545"}}>{n}</h4>
      <h4 style={{fontSize:"15px",fontWeight:"bold"}}>Number of Deaths</h4>
    </div>
    );
  }
}
