import React from 'react';
import { Chart } from "react-google-charts";
const LineChart = () => {
    return (<Chart
        // width={'350px'}
        // height={'400px'}
        width={'90%'}
        height={'300px'}
        chartType="LineChart"
        features="smooth"
        loader={<div>Loading Chart</div>}
        data={[
            ['x', 'Brent Crude'],
            [0, 0],
            [1, 10],
            [2, 23],
            [3, 17],
            [4, 18],
            [5, 9],
            [6, 11],
            [7, 27],
            [8, 33],
            [9, 40],
            [10, 32],
            [11, 35],
        ]}
        options={{
            hAxis: {
                // title: 'Time',
                label: 'auto',
                baselineColor: 'none',
                display: 'none',
                textStyle: { color: 'none' }
            },

            chartArea: { left: 0, width: '100%' },
            vAxis: {
                // title: 'Popularity',
                baselineColor: 'none',
                gridlines: { color: 'none' },
                textStyle: { color: 'none' }
            },
            legend: {
                position: "top",
                textStyle: {
                    fontFamily: 'Roboto',
                    fontStyle: 'normal', fontSize: '16',
                    fontWeight: '900'
                }
            },
            backgroundColor: { stroke: { color: 'transparent' }, fill: '' }
        }}
        rootProps={{ 'data-testid': '1' }}
        legendToggle
    />);
}

export default LineChart;