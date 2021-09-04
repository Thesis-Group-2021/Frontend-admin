import React, { PureComponent } from 'react';
import { Chart } from "react-google-charts";


export default class Example extends PureComponent {


  render() {
    return (
        <Chart
        width={'450px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Hours per Day'],
          ['user', 11],
          ['approver', 2],
          ['admin', 2],
          ['external user', 2],
         
        ]}
        options={{
          title: 'My Daily Activities',
          // Just add this option
          is3D: true,
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    );
  }
}
