// import React from 'react';
// import { Chart } from "react-google-charts";
// const DynamicChart = () => {
//     return (<div className="w-100">


//         <Chart
//             width={'100%'}
//             height={'500px'}
//             // left={20}
//             // lineWidth={20}
//             chartType="LineChart"
//             loader={<div>Loading Chart</div>}
//             data={[
//                 [{ type: 'date', label: 'Day' }, 'Residential', 'Commercial', 'Industrial'],
//                 [new Date(2014, 0), 0, 0, 0],
//                 [new Date(2014, 1), 10, 5, 8],
//                 [new Date(2014, 2), 23, 15, 12],
//                 [new Date(2014, 3), 17, 9, 14],
//                 [new Date(2014, 4), 18, 10, 13],
//                 [new Date(2014, 5), 9, 5, 15],
//                 [new Date(2014, 6), 11, 3, 20],
//                 [new Date(2014, 7), 27, 19, 24],
//                 [new Date(2014, 8), 9, 5, 30],
//                 [new Date(2014, 9), 11, 3, 12],
//                 [new Date(2014, 10), 27, 19, 23],
//                 [new Date(2014, 11), 27, 19, 30],
//             ]}
//             options={{
//                 hAxis: {
//                     title: 'Time',
//                     label: 'auto',
//                     textPosition: 'bottom',
//                     // minValue: new Date(2014, 0), maxValue: new Date(2014, 10)
//                     viewWindow: { min: new Date(2014, 0), max: new Date(2014, 11) }
//                 },
//                 vAxis: {
//                     // title: 'Popularity',
//                     // label: 'auto',
//                     textPosition: 'in'
//                 },
//                 // series is use if you want to target a particular plotted line
//                 series: {
//                     0: { curveType: 'function' },
//                     1: { curveType: 'function' },
//                     2: { curveType: 'function' }
//                 },
//                 theme: 'maximized',
//                 legend: {
//                     position: "in",
//                     // alignment: 'start'
//                 },
//                chartArea: {width: '100%', height: '100%'}

//             }}
//             rootProps={{ 'data-testid': '1' }}
//         />
//     </div>);
// }

// export default DynamicChart;