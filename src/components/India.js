import React from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import RecoveredDisplay from "./RecoveredDisplay";
import ConfirmedDisplay from "./ConfirmedDisplay";
import Deaths from "./Deaths";


export default class India extends React.Component{

  constructor(props) {
    super(props);

    this.getdata = this.getdata.bind(this);
  }
  state = {
    confirmed: "Select a state",
    recovered: "Select a state",
    deaths: "Select a state",
    states:[]
  };
    

  componentDidMount()
  {
  this.getdata();
  }
  async getdata(){
  const result=await axios.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise");
  console.log(result.data.data.statewise);
  this.setState({
    states:result.data.data.statewise
  })
  }
  

  gettable(){
    return this.state.states.map((item,i) =>{
              return <tr key={i}>
              <td className="td">{item.state}</td>
            <td className="td">{item.confirmed}</td>
            <td className="td">{item.active}</td>
            <td className="td">{item.recovered}</td>
            <td className="td">{item.deaths}</td>
            </tr>
    });
  }
  
  rendersState(){
    return <table className="table">
      <tbody>
      <tr className="tr">
      <th className="th" style={{backgroundColor:"lightGrey"}}>State</th>
      <th className="th" style={{backgroundColor:"yellow"}}>Confirmed Cases</th>
      <th className="th" style={{backgroundColor:"Orange"}}>Active Cases</th>
      <th className="th" style={{backgroundColor:"Green"}}>Recovered Cases</th>
      <th className="th" style={{backgroundColor:"Red"}}>Total Deaths</th>
    </tr>
    {this.gettable()}
      </tbody>
    </table>
  }
  
  onSelect=(e)=>
  {
    const { states} = this.state;
  this.setState({
    confirmed:states[e.target.value].confirmed,
    recovered:states[e.target.value].recovered,
    deaths:states[e.target.value].deaths,
  })
  }
  renderOption()
  {
    let array = this.state.states.map((item, i) => {
      return <option key={i} value={i}>
        {item.state}
        </option>;
    });
    array.unshift(<option key={-1}>Search by state</option>);
    return array;
  }


  render(){
    return (
      <div>
      <div>
         <select onChange={this.onSelect}>{this.renderOption()}</select>
         </div>
         <div className="flex">
            <ConfirmedDisplay value={this.state.confirmed} />
            <RecoveredDisplay value={this.state.recovered} />
            <Deaths value={this.state.deaths} />
          </div><hr/>
         <div>
    {this.rendersState()}
</div>
</div>
    );
  }
}