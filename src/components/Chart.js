import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,LabelList
} from 'recharts';

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
        <div >
      <BarChart className="b"
        width={350}
        height={350}
        data={lables}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        barSize={35}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis  /> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="2 2" />
        <Bar  dataKey="v" fill="#8884d8" background={{ fill: '#eee' }}>
        <LabelList dataKey="name" />
        </Bar>
      </BarChart>
      </div>
    );
  }
}
