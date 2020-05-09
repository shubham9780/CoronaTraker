import React from "react";
import axios from 'axios';
import RecoveredDisplay from "./RecoveredDisplay";
import ConfirmedDisplay from "./ConfirmedDisplay";
import Deaths from "./Deaths";
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
            <div className="flex">
            <ConfirmedDisplay value={this.state.confirmed} />
            <RecoveredDisplay value={this.state.recovered} />
            <Deaths value={this.state.deaths} />
          </div>
        );
    }
}