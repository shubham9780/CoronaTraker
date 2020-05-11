import React from "react";
import axios from 'axios';
import RecoveredDisplay from "./RecoveredDisplay";
import ConfirmedDisplay from "./ConfirmedDisplay";
import Deaths from "./Deaths";
import Chart from "./Chart";
import soap from "./img/soap.png";
import home from "./img/home.png";
import stop from "./img/stop.png";
import mask from "./img/mask.png";

export default class Overall extends React.Component{

    constructor(props) {
        super(props);
    
        this.getdata = this.getdata.bind(this);
      }
      state = {
        confirmed: "loading",
        recovered: "loading",
        deaths: "loading",
      };
      
componentDidMount()
{
    this.getdata();
}
async getdata(){
    const result=await axios.get("https://coronavirus-19-api.herokuapp.com/all")
    
    this.setState({
        confirmed:result.data.cases,
        recovered:result.data.recovered,
        deaths: result.data.deaths
        
    })
}

    render(){
        return (
            <div>
            <div className="flex">
            <ConfirmedDisplay value={this.state.confirmed} />
            <RecoveredDisplay value={this.state.recovered} />
            <Deaths value={this.state.deaths} />
          </div>
         
          <div className="chart">
              <div className="b">
          <Chart value={this.state.confirmed} value1={this.state.recovered} value2={this.state.deaths}/></div>
          <div className="b">
<h4><img src={soap} style={{hieght:"11%",width:"11%"}} alt="soap"></img>Wash hands</h4>
<h6>Wash your hands with soap or sanitizer.</h6>
<h4><img src={stop} style={{hieght:"11%",width:"11%"}} alt="soap"></img>Social Distancing</h4>
<h6>Keep a distance 1m away from others.</h6>
<h4><img src={home} style={{hieght:"11%",width:"11%"}} alt="soap"></img>Stay At home</h4>
<h6>Always stay at home.</h6>
<h4><img src={mask} style={{hieght:"11%",width:"11%"}} alt="soap"></img>Cover a Cough or snezze</h4>
<h6>Cover your snezze with your sleeves or tissue. </h6>
          </div>
          {/* <img className="image" style={{ alignItems:"center",
    flexWrap:"wrap",width:"49.33%",display:"flex",border:"1px solid black",borderRadius:"5px",boxShadow:" 0 5px 20px rgba(0, 0, 0, 0.5)"}}src={corona} alt="corona"/> */}
          </div>
          </div>
        
        );
    }
}