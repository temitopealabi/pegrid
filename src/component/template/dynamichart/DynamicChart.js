import React from 'react';
import { Chart } from "react-google-charts";
const DynamicChart = (props) => {
    console.log(props.holderChart);
    const { dynamicStyle } = props;
    return (
        <React.Fragment>
            {props.holderChart === 'big screen' && <Chart
                width={'95%'}
                height={'38vh'}

                // left={20}
                // lineWidth={20}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    [{ type: 'date', label: 'Day' }, 'Residential', 'Commercial', 'Industrial'],
                    [new Date(2014, 0), 0, 0, 0],
                    [new Date(2014, 1), 10, 5, 8],
                    [new Date(2014, 2), 23, 15, 12],
                    [new Date(2014, 3), 17, 9, 14],
                    [new Date(2014, 4), 18, 10, 13],
                    [new Date(2014, 5), 9, 5, 15],
                    [new Date(2014, 6), 11, 3, 20],
                    [new Date(2014, 7), 27, 19, 24],
                    [new Date(2014, 8), 9, 5, 30],
                    [new Date(2014, 9), 11, 3, 12],
                    [new Date(2014, 10), 27, 19, 23],
                    [new Date(2014, 11), 27, 19, 30],
                ]}
                options={{
                    hAxis: {
                        title: 'Date',
                        theme: 'material',
                        label: 'auto',
                        textPosition: 'bottom',
                        // minValue: new Date(2014, 0), maxValue: new Date(2014, 10)
                        // viewWindow: { min: new Date(2014, 0), max: new Date(2014, 11) },
                    },

                    vAxis: {
                        // title: 'Popularity',
                        // label: 'auto',
                        textPosition: 'in'
                    },
                    chartArea: { left: 0, top: 0, width: '90%', height: '75%' },
                    // series is use if you want to target a particular plotted line
                    series: {
                        0: { curveType: 'function', pointSize: '3px', color: '#B2DF8A' },
                        1: { curveType: 'function', pointSize: '3px', color: '#1F78B4' },
                        2: { curveType: 'function', pointSize: '3px', color: '#A6CEE3' }
                    },
                    theme: 'material',
                    animation: { duration: 1000, easing: "out", startup: true },
                    explorer: {
                        actions: ["dragToZoom", "rightClickToReset"],
                    },
                    legend: {
                        position: "bottom",
                        alignment: 'start',
                        textStyle: {
                            fontFamily: 'Roboto',
                            fontStyle: 'normal', fontSize: dynamicStyle.legendFont, height: 10, paddingTop: 15,
                            // dynamicStyle.legendFont.textFont
                        }
                    },

                }}
                rootProps={{ 'data-testid': '1' }}
            />}

            {props.holderChart === 'Mobile' && <Chart
                width={'90%'}
                height={'350px'}

                // left={20}
                // lineWidth={20}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    [{ type: 'date', label: 'Day' }, 'Residential', 'Commercial', 'Industrial'],
                    [new Date(2014, 0), 0, 0, 0],
                    [new Date(2014, 1), 10, 5, 8],
                    [new Date(2014, 2), 23, 15, 12],
                    [new Date(2014, 3), 17, 9, 14],
                    [new Date(2014, 4), 18, 10, 13],
                    [new Date(2014, 5), 9, 5, 15],
                    [new Date(2014, 6), 11, 3, 20],
                    [new Date(2014, 7), 27, 19, 24],
                    [new Date(2014, 8), 9, 5, 30],
                    [new Date(2014, 9), 11, 3, 12],
                    [new Date(2014, 10), 27, 19, 23],
                    [new Date(2014, 11), 27, 19, 30],
                ]}
                options={{
                    hAxis: {
                        title: 'Time',
                        theme: 'material',
                        label: 'auto',
                        textPosition: 'bottom',
                        // minValue: new Date(2014, 0), maxValue: new Date(2014, 10)
                        // viewWindow: { min: new Date(2014, 0), max: new Date(2014, 11) },
                    },

                    vAxis: {
                        // title: 'Popularity',
                        // label: 'auto',
                        textPosition: 'in'
                    },
                    chartArea: { left: 0, top: 0, width: '95%', height: '75%' },
                    // series is use if you want to target a particular plotted line
                    series: {
                        0: { curveType: 'function', pointSize: '3px', color: '#B2DF8A' },
                        1: { curveType: 'function', pointSize: '3px', color: '#1F78B4' },
                        2: { curveType: 'function', pointSize: '3px', color: '#A6CEE3' }
                    },
                    theme: 'material',
                    animation: { duration: 2000, easing: "out", startup: true },
                    explorer: {
                        actions: ["dragToZoom", "rightClickToReset"],
                    },
                    legend: {
                        position: "bottom",
                        alignment: 'start',
                        textStyle: {
                            fontFamily: 'Roboto',
                            fontStyle: 'normal', fontSize: dynamicStyle.legendFont, height: 40,
                        }
                    },

                }}
                rootProps={{ 'data-testid': '1' }}
            />}
        </React.Fragment>
    );
}

export default DynamicChart;