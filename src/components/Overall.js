import React from "react";
import axios from 'axios';
import RecoveredDisplay from "./RecoveredDisplay";
import ConfirmedDisplay from "./ConfirmedDisplay";
import Deaths from "./Deaths";
import wh from "./img/wh.jpg";
import h1 from "./img/h1.png";
import s from "./img/s.webp";
import co from "./img/co.jpg";
import "./grid.css";

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
            <div className="main-grid">
                <div className="infor">
                    <p><b>Coronavirus</b> disease (<b>COVID-19</b>) is an infectious disease caused by a new virus that had not been previously identified in humans. Please use the below options to check National and World statistics for COVID-19 </p>
                </div>
            <div className="flex">
            <ConfirmedDisplay value={this.state.confirmed} />
            <RecoveredDisplay value={this.state.recovered} />
            <Deaths value={this.state.deaths} />
          </div>
  
          <main>
            <div class="card">
                <div class="info">
                    <strong>Wash Hands</strong>
                    <p>In general, both handwashing with soap and handsanitizer,are highly effective at killing most germs and pathogens.Wash your hands with soap or sanitizer</p>
                </div><hr/>
                <img src={wh} alt="alt"/>
            </div>
            <div class="card">
                <div class="info">
                    <strong>Social Distancing</strong>
                    <p>Social distancing is a practise of reducing close contact between people in order to reduce opportunities for disease transmmission. Keep a distance 1m away from others</p>
                </div><hr/>
                <img src={s} alt="alt"/>
            </div>
            <div class="card">
                <div class="info">
                    <strong>Stay At Home</strong>
                    <p>Staying at home reduces the chances of a person of getting infectious from this virus.Always stay at home</p>
                </div><hr/>
                <img src={h1} alt="alt"/>
            </div>
            <div class="card">
                <div class="info">
                    <strong>Cover a Sneeze or Cough</strong>
                    <p>Cover your snezze with your sleeves or tissue and always cover your mouth and nose with mask while stepping out of the house in order to curb the spread of covid-19.</p>
                </div><hr/>
                <img src={co} alt="alt"/>
            </div>
        </main>

</div>        
        );
    }
}