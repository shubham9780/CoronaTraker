import React, { Component } from "react";
var d = new Date();
var n = d.toLocaleDateString();
export default class RecoveredDisplay extends Component {
  render() {
    return (
      <div className="box recovered">
      <h4 style={{fontWeight:"545"}}>Recovered</h4>
      <h4 style={{fontWeight:"bold"}}>{this.props.value}</h4>
      <h4 style={{fontWeight:"545"}}>{n}</h4>
      <h4 style={{fontSize:"15px",fontWeight:"bold"}}>Number of recovered cases of COVID-19</h4>
    </div>
    );
  }
}
