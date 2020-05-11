import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,LabelList
} from 'recharts';

// const data = [
//   {
//     name: 'Confirmed', uv: this.getconf(), pv: 123, amt: 2400,
//   },
//   {
//     name: 'Recovered', uv: this.getrec(), pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Deaths', uv:this.getdeath(), pv: 9800, amt: 2290,
//   },
// ];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';

  render() {
  const  lables=[
      
        {
            name:'Confirmed', v:this.props.value,
        },
        {
            name:'Recovered', v:this.props.value1,
        },
        {
            name:'Deaths', v:this.props.value2,
        },
    ];
    
    return (
      <BarChart className="b"
        width={510}
        height={350}
        data={lables}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        barSize={35}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="v" fill="#8884d8" background={{ fill: '#eee' }}>
        <LabelList dataKey="name" />
        </Bar>
      </BarChart>
    );
  }
}
