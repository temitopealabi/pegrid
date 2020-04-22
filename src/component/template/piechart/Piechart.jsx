import React from 'react';
import { Chart } from "react-google-charts";
const Piechart = (props) => {

    const { pieStyle } = props;
    return (<div className="w-100">
        <Chart
            // width={'500px'}
            // height={'300px'}
            width={'100%'}
            height={'20vh'}
            left={'1px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Task', 'Hours per Day'],
                ['Generation', 11],
                ['Distribution', 2],
                ['Transmission', 2],
                ['Auxilliary', 2],
            ]}
            options={{
                title: 'Component',
                titleTextStyle: {
                    fontName: "Roboto",
                    fontStyle: 'normal', fontSize: pieStyle.textFont,
                    fontWeight: '900'
                },
                legend: {
                    position: "right",
                    alignment: 'end',
                    textStyle: {
                        fontFamily: 'Roboto',
                        fontStyle: 'normal', fontSize: pieStyle.legendFont,
                        fontWeight: '900'
                    }
                },
                is3D: true,
                slices: {
                    0: { color: '#57bcc1' },
                    1: { color: '#e77e75' },
                    3: { color: '#87AB3D' },
                    4: { color: '#BC85F5' },
                },


                chartArea: { left: 0, top: 0, width: '100%', height: '85%' },
                backgroundColor: { stroke: { color: '#e77e75' }, fill: '' }
            }}
            legendToggle
            rootProps={{ 'data-testid': '1' }}
        />
    </div>);
}

export default Piechart;