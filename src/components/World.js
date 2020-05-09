import React from 'react';
import axios from 'axios';
import RecoveredDisplay from "./RecoveredDisplay";
import ConfirmedDisplay from "./ConfirmedDisplay";
import Deaths from "./Deaths";

export default class World extends React.Component{
  constructor(props) {
    super(props);

    this.getdata = this.getdata.bind(this);
  }
  state = {
    confirmed: "select a country",
    recovered: "select a country",
    deaths: "select a country",
    countries:[]
  };
    
componentDidMount()
{
this.getdata();
}
async getdata(){
const result=await axios.get("https://corona.lmao.ninja/v2/countries");
this.setState({
  countries:result.data
})
}

gettable(){
  return this.state.countries.map((country,i) =>{
            return <tr key={i}>
            <td className="td">{country.country}</td>
          <td className="td">{country.cases}</td>
          <td className="td">{country.active}</td>
          <td className="td">{country.recovered}</td>
          <td className="td">{country.deaths}</td>
          </tr>
  });
}

renderCountry(){
  return <table className="table">
    <tbody>
    <tr className="tr">
    <th className="th" style={{backgroundColor:"lightGrey"}}>Country</th>
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
  const { countries} = this.state;
this.setState({
  confirmed:countries[e.target.value].cases,
  recovered:countries[e.target.value].recovered,
  deaths:countries[e.target.value].deaths,
})
}
renderOption()
{
  let array = this.state.countries.map((country, i) => {
    return <option key={i} value={i}>
      {country.country}
      </option>;
  });
  array.unshift(<option key={-1} >Search by country</option>);
  return array;
}

  render(){
    return(
      <div>
      <div><center>
         <select onChange={this.onSelect} style={{fontWeight:"550"}}>{this.renderOption()}</select></center>
         </div>
         <div className="flex">
            <ConfirmedDisplay value={this.state.confirmed} />
            <RecoveredDisplay value={this.state.recovered} />
            <Deaths value={this.state.deaths} />
          </div><hr></hr>
         <div>
    {this.renderCountry()}
</div>
</div>
    );
  }
}