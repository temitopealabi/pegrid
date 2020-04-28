import React, { useState, useEffect } from 'react';
// import antd from 'antd';
import { Layout, Menu, Icon } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Piechart from '../template/piechart/Piechart';
import DynamicChart from '../template/dynamichart/DynamicChart';
import SelectDropDown from '../template/selectDrop/SelectDropDown';
import LineChart from '../template/lineChart/LineChart';
import CalenderForm from '../template/form/calendar/CalendarForm';

import generalCss from '../general.module.css'

const listConsumption = [{ id: 1, title: 'Residential', unit: '₦', rate: '25.73', parentClass: '', textF: '', percentChange: '+₦20.40(10%)', unitTile: 'per kWh', rateF: 'h4 ', bg: 'backResi', signBg: 'h6' },
{ id: 2, title: 'Commercial', unit: '₦', rate: '41.66', textF: '', parentClass: 'ml-2', percentChange: '+₦11.80(39%)', unitTile: 'per kWh', rateF: 'h4 ', bg: 'backComm', signBg: 'h6' },
{ id: 3, title: 'Industrial', unit: '₦', rate: '46.94', textF: '', parentClass: 'ml-2', percentChange: '+₦13.20(19%)', unitTile: 'per kWh', rateF: 'h4 ', bg: ' backIndustrial', signBg: 'h6' }
]

const avgUseage = [{ id: 1, type: 110 }, { id: 2, type: 410 }, { id: 3, type: 190 }, { id: 1, type: 310 }];

const yearInreview = [{
    type: 2020, payload: [{ type: new Date(2014, 0), payload: [31] }, { type: new Date(2014, 1), payload: [31] }, { type: new Date(2014, 2), payload: [31] },
    { type: new Date(2014, 3), payload: [31] }, { type: new Date(2014, 4), payload: [31] },
    { type: new Date(2014, 5), payload: [31] }, { type: new Date(2014, 6), payload: [31] }, { type: new Date(2014, 4), payload: [31] },
    { type: new Date(2014, 7), payload: [31] }, { type: new Date(2014, 8), payload: [31] }, { type: new Date(2014, 9), payload: [31] },
    { type: new Date(2014, 10), payload: [31] }, { type: new Date(2014, 11), payload: [31] }]
},
{
    type: 2019, payload: [{ type: new Date(2014, 0), payload: [31] }, { type: new Date(2014, 1), payload: [31] }, { type: new Date(2014, 2), payload: [31] },
    { type: new Date(2014, 3), payload: [31] }, { type: new Date(2014, 4), payload: [31] },
    { type: new Date(2014, 5), payload: [31] }, { type: new Date(2014, 6), payload: [31] }, { type: new Date(2014, 4), payload: [31] },
    { type: new Date(2014, 7), payload: [31] }, { type: new Date(2014, 8), payload: [31] }, { type: new Date(2014, 9), payload: [31] },
    { type: new Date(2014, 10), payload: [31] }, { type: new Date(2014, 11), payload: [31] }]
},
{
    type: 2018, payload: [{ type: new Date(2014, 0), payload: [31] }, { type: new Date(2014, 1), payload: [31] }, { type: new Date(2014, 2), payload: [31] },
    { type: new Date(2014, 3), payload: [31] }, { type: new Date(2014, 4), payload: [31] },
    { type: new Date(2014, 5), payload: [31] }, { type: new Date(2014, 6), payload: [31] }, { type: new Date(2014, 4), payload: [31] },
    { type: new Date(2014, 7), payload: [31] }, { type: new Date(2014, 8), payload: [31] }, { type: new Date(2014, 9), payload: [31] },
    { type: new Date(2014, 10), payload: [31] }, { type: new Date(2014, 11), payload: [31] }]
}]

const { Content } = Layout;
const Regulator = (props) => {
    // const [tabActive, useTabActive]  = useState('Dynamic Price Model');
    const { robNormF, joslaText, mrgBtm6, flexCon, font12, flex1Ch, flex1, joslaGTextC, fh4,
        netAnalysis14F, lastUpdate, fontDark, fontNormal } = generalCss;
    const [tabActive, setTabActive] = useState('Current Average')

    function handleClickTab(data) {
        console.log("data", data);
        setTabActive(data);
    }

    const getSelectedDate = (data) => {
        console.log(data, "date");
    }

    useEffect(() => {
        return () => { }
    }, [])

    return (<React.Fragment>
        <div className="row">
            {tabActive === 'Current Average' && <div className="col-md-5">
                <div>
                    <Content
                        style={{
                            margin: '20px 8px', padding: 10,
                            background: '#fff', minHeight: 280,
                        }}>
                        <div className="px-1 ">
                            <div>

                                {/* time */}
                                <div className={`float-right h2 ${fontNormal}`}><b>17:55</b></div>

                                <div className="clearfix"></div>
                                <div className={`float-right h6 ${fontNormal} pb-1`}>Wednesday, 1 April 2020</div>

                                <div className="clearfix"></div>
                                <div className={`${fontDark} float-right h6 py-1`} style={{ fontWeight: '600' }}>Current Average Electricity Price by Customer Type</div>

                                <div className="clearfix"></div>
                                {/* types of consumption */}


                                <div className="d-flex justify-content-between " >
                                    {listConsumption.map((data, index) => (
                                        <div key={index} className={data.parentClass} style={{ flex: 2 }} >
                                            <div className={`${data.bg}`}>
                                                <p className={`pt-2 text-center ${data.textF}  ${mrgBtm6}`}>{data.title}</p>
                                                <div className={`${fontDark} pb-1 text-center`}>
                                                    <span className={`${data.signBg} ${data.textF}`}><b>{data.unit}</b></span>
                                                    <span className={`${data.rateF} ${data.textF}`}><b>{data.rate}</b></span> </div>
                                                <p className={` text-center ${font12}  ${joslaGTextC} ${mrgBtm6}`} >{data.percentChange}</p>
                                                <p className={` text-center ${data.textF}  ${mrgBtm6}`}>{data.unitTile}</p>
                                            </div>
                                        </div>
                                    ))}

                                </div>

                                {/* influence factor */}
                                <div className="clearfix"></div>
                                <div className="mt-2">
                                    <div className={`h5 ${fontNormal} py-2`}><b>Influencing Factors</b></div>
                                    <div className="d-flex justify-content-between" >

                                        <div className="navigationStateD" style={{ borderRight: '1px solid #000000', flex: 2 }}>
                                            <div className="py-2"><span className="h6"><b>$</b></span><span className="h4"><b>24.76</b></span></div>
                                            <LineChart fontSize={14} />
                                        </div>

                                        {/* mobile */}
                                        <div className="mobileMenuD" style={{ borderRight: '1px solid #000000', flex: 2 }}>
                                            <div className="py-2"><span className="h6"><b>$</b></span><span className="h4"><b>24.76</b></span></div>
                                            <LineChart fontSize={10} />
                                        </div>
                                        <div className="" style={{ flex: 2 }}>
                                            <div className="pt-2 px-2">
                                                <p className="">---Weather Temp</p>
                                                <h4 className={` text-bold`}>32ºC</h4>
                                                <div className="col-md-8 col-sm-4"><div className="float-left">
                                                    <p className={`${joslaText}`}>34ª / 26ª</p>
                                                </div>
                                                    <div className="float-right">
                                                        <img src="/images/dashboard/moon.svg" width="100%" alt="moon" />
                                                    </div></div>

                                                <div className="clearfix"></div>
                                                <p className={`py-1 ${robNormF} ${fontDark}`}>Mostly Sunny</p>
                                                <p className={`${robNormF} ${fontDark} `}>Chance of Rain: 10%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="mt-3">
                                    <h6 className={`${fontNormal}  my3Mobile`}><b>Major Components of Electricity Price</b></h6>
                                    <div className="rd-flex justify-content-start " >


                                        {/* big screen piechart */}
                                        <div className="navigationStateD" style={{ position: 'relative' }}><Piechart pieStyle={{ legendFont: 16, textFont: 16 }} />
                                            <div className="pieSubT "><b>Component</b></div>
                                        </div>


                                        {/* mobile view  piechart*/}
                                        <div className="mobileMenuD" style={{ position: 'relative' }}><Piechart pieStyle={{ legendFont: 12, textFont: 16 }} />
                                            <div className="pieSubT "><b>Component</b></div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </Content>
                </div>
                <div className="m-3 ">

                </div>
            </div>}
            <div className="col-md-7 p-4 pr-3  " >
                {/* style={{ height: '100%' }} for div mr-3 */}
                <div className="bg-white py-2 mr3Mobile d-flex justify-content-between  navigationStateD" >

                    <div className="" style={{ flex: 3, position: 'relative' }}>

                        <div className="px-1">
                            <div className={`h5 ${fontDark}  mx-3 py-3`}>
                                Dynamic Price Model
                                </div>

                        </div>
                        {/* dynamic chart */}
                        {/* <div className="" style={{maxWidth: '70%', maxHeight: '350px'}} ><DynamicChart holderChart={"Mobile"}/></div> */}
                        {/* {window.screen.width >= 600 && <div className="mx-3" style={{ maxWidth: '100%' }}><DynamicChart holderChart={"big screen"} /> </div>}
                                    {window.screen.width <= 599 && <div className="" style={{ maxWidth: '70%' }}><DynamicChart holderChart={"Mobile"} /> </div>} */}

                        <div className="mx-3" style={{ maxWidth: '100%' }}><DynamicChart holderChart={"big screen"} dynamicStyle={{ legendFont: 13, textFont: 16 }} /> </div>

                        {/* mobile screen to view data */}
                        {/* <div className="mx-2 mobileDynamicChart dynamicChartt "  >
                                        <div style={{ minWidth: '240px' }}><div className={`${flexCon} my-4  ${lastUpdate}  px-2`}> <div className={`${flex1} pt-3 mx-2`}><img src="/images/dashboard/lastUp.svg" alt="lastUp" /></div>
                                            <div className="px-2"><p className="fontNormal pt-2"><b>Last Update</b></p>
                                                <div><span className="fontNormal mr-3">12:45:23</span><span className="float-right fontNormal">30/03/2020</span></div>
                                            </div>
                                        </div></div>
                                        <div className="h6 fontNormal mt-5 mb-4 centerFont">1 Month Forecast</div>
                                        <div className="my-1 centerFont"><div>Residential</div>
                                            <div><span className="h6"><b>₦</b></span><span className="h5"><b>36.40</b></span>
                                                <span className="ml-3"><span className={`${fh4} ${joslaGTextC}`}><i className="fas fa-sort-down"></i></span><span className={joslaGTextC}>42%</span></span></div>
                                        </div>

                                        <div className="mb-2 centerFont"><div>Commercial</div>
                                            <div><span className="h6"><b>₦</b></span><span className="h5"><b>52.80</b></span>
                                                <span className="ml-3"><span className={`${fh4} ${joslaGTextC}`}><i className="fas fa-sort-down"></i></span><span className={joslaGTextC}>42%</span></span></div>
                                        </div>

                                        <div className="centerFont"><div>Industrial</div>
                                            <div><span className="h6"><b>₦</b></span><span className="h5"><b>58.00</b></span>
                                                <span className="ml-3"><span className={`${fh4} ${joslaGTextC}`}><i className="fas fa-sort-down"></i></span><span className={joslaGTextC}>42%</span></span></div>
                                        </div>

                                        <div className="my-1 centerFont">
                                            <SelectDropDown widthSize={'150px'} holderData={"Moving Avg"} avgUseage={avgUseage} />
                                        </div>



                                    </div> */}

                        {/* for mobile search year */}
                        {/* <div className="mx-2  mobileDynamicChart dynamicChartt centerFont"><SelectDropDown widthSize={'130px'} holderData={"Monthly"} yearData={yearInreview} /></div> */}



                        {/* for 2 dropdown beside legends */}
                        {/* <div id="searchYear" className="removeChartTitle">
    <div className="float-right"><SelectDropDown widthSize={'130px'} holderData={"Monthly"}  yearData={yearInreview}/></div>
</div> */}

                    </div>

                    {/* explanation about the graph  */}
                    <div className="mx-2  removeChartTitle" style={{ flex: 2 }} >
                        <div className="text-center">
                            <div style={{ minWidth: '240px' }}><div className={`${flexCon} my-4  ${lastUpdate}  px-2`}> <div className={`${flex1} pt-2 mx-2`}><img src="/images/dashboard/lastUp.svg" alt="lastUp" /></div>
                                <div className="px-2"><div className={`${fontNormal} pt-1`} style={{ fontSize: '12px' }}><b>Last Update</b></div>
                                    <div><span className={`${fontNormal} mr-3`}>12:45:23</span><span className={`float-right ${fontNormal}`}>30/03/2020</span></div>
                                </div>
                            </div></div>
                            <div className={`h6 ${fontNormal} mt-3`}>1 Month Forecast</div>
                            <div className="my-2"><div>Residential</div>
                                <div><span className="h6"><b>₦</b></span><span className="h5"><b>36.40</b></span>
                                    <span className="ml-3"><span className={`${fh4} ${joslaGTextC}`}><i className="fas fa-sort-down"></i></span><span className={joslaGTextC}>42%</span></span></div>
                            </div>

                            <div className="mb-3"><div>Commercial</div>
                                <div><span className="h6"><b>₦</b></span><span className="h5"><b>52.80</b></span>
                                    <span className="ml-3"><span className={`${fh4} ${joslaGTextC}`}><i className="fas fa-sort-down"></i></span><span className={joslaGTextC}>42%</span></span></div>
                            </div>

                            <div className=""><div>Industrial</div>
                                <div><span className="h6"><b>₦</b></span><span className="h5"><b>58.00</b></span>
                                    <span className="ml-3"><span className={`${fh4} ${joslaGTextC}`}><i className="fas fa-sort-down"></i></span><span className={joslaGTextC}>42%</span></span></div>
                            </div>

                            <span className="float-left py-2 mt-2">
                                {/* <SelectDropDown holderData={"Monthly"} widthSize={'130px'} yearData={yearInreview} /> */}
                                <CalenderForm sendDate={getSelectedDate} widthSize={"120px"} />
                            </span>
                            <span className="py-2 mt-2 float-right">
                                <SelectDropDown widthSize={'135px'} holderData={"Moving Avg"} avgUseage={avgUseage} />
                            </span>
                            <div className="clearfix"></div>



                        </div></div>

                    <div className="monthlyGraph removeChartTitle d-none"><div className="float-right">
                        {/* <SelectDropDown holderData={"Monthly"} widthSize={'130px'} yearData={yearInreview} /> */}
                        <CalenderForm sendDate={getSelectedDate} widthSize={"130px"} />
                    </div></div>
                </div>

                {/* mobile  */}
                {tabActive === 'Dynamic Price Model' && <div className="bg-white py-2 mr3Mobile d-flex justify-content-between mobileMenuD" >

                    <div className="mobileMenuD " style={{ flex: 2, position: 'relative' }}>

                        <div className="px-1">
                            <div className={`h5 ${fontDark}  mx-3 py-3`}>
                                Dynamic Price Model
</div>

                        </div>
                        {/* dynamic chart */}
                        {/* <div className="" style={{maxWidth: '70%', maxHeight: '350px'}} ><DynamicChart holderChart={"Mobile"}/></div> */}
                        {/* {window.screen.width >= 600 && <div className="mx-3" style={{ maxWidth: '100%' }}><DynamicChart holderChart={"big screen"} /> </div>} */}
                        {/* {window.screen.width <= 599 && <div className="" style={{ maxWidth: '70%' }}><DynamicChart holderChart={"Mobile"} /> </div>} */}

                        {/* <div className="" style={{ maxWidth: '70%' }}><DynamicChart holderChart={"Mobile"} /> </div> */}
                        <div className="mx-3" style={{ maxWidth: '100%' }}><DynamicChart holderChart={"Mobile"} dynamicStyle={{ legendFont: 10, textFont: 16 }} /> </div>

                        {/* mobile screen to view data */}
                        <div className="mx-2 mobileDynamicChart dynamicChartt "  >
                            <div style={{ minWidth: '240px' }}><div className={`${flexCon} my-4  ${lastUpdate}  px-2`}> <div className={`${flex1} pt-3 mx-2`}><img src="/images/dashboard/lastUp.svg" alt="lastUp" /></div>
                                <div className="px-2"><p className={`${fontNormal} pt-2`}><b>Last Update</b></p>
                                    <div><span className={`${fontNormal} mr-3`}>12:45:23</span><span className={`float-right ${fontNormal}`}>30/03/2020</span></div>
                                </div>
                            </div></div>
                            <div className={`h6 ${fontNormal} mt-5 mb-4 centerFont`}>1 Month Forecast</div>
                            <div className="my-1 centerFont"><div>Residential</div>
                                <div><span className="h6"><b>₦</b></span><span className="h5"><b>36.40</b></span>
                                    <span className="ml-3"><span className={`${fh4} ${joslaGTextC}`}><i className="fas fa-sort-down"></i></span><span className={joslaGTextC}>42%</span></span></div>
                            </div>

                            <div className="mb-2 centerFont"><div>Commercial</div>
                                <div><span className="h6"><b>₦</b></span><span className="h5"><b>52.80</b></span>
                                    <span className="ml-3"><span className={`${fh4} ${joslaGTextC}`}><i className="fas fa-sort-down"></i></span><span className={joslaGTextC}>42%</span></span></div>
                            </div>

                            <div className="centerFont"><div>Industrial</div>
                                <div><span className="h6"><b>₦</b></span><span className="h5"><b>58.00</b></span>
                                    <span className="ml-3"><span className={`${fh4} ${joslaGTextC}`}><i className="fas fa-sort-down"></i></span><span className={joslaGTextC}>42%</span></span></div>
                            </div>

                            <div className="my-2 centerFont">
                                <SelectDropDown widthSize={'180px'} holderData={"Moving Avg"} avgUseage={avgUseage} />
                            </div>



                        </div>

                        {/* for mobile search year */}
                        <div className="mx-2 pt-2 mobileDynamicChart dynamicChartt centerFont">
                            {/* <SelectDropDown widthSize={'130px'} holderData={"Monthly"} yearData={yearInreview} /> */}
                            <CalenderForm sendDate={getSelectedDate} widthSize={"130px'"} />
                        </div>



                    </div>

                    {/* explanation about the graph  */}

                </div>}


                {/* Revenue Generated */}
                <div className="m-3  navigationStateD">
                    <div className="row">
                        <div className="col-md-7 bg-white mt-3">
                            <div className="mt-3">
                                <div className="text-dark h5">Revenue generated</div>

                                <div className="mt-2" style={{ borderLeft: '1px solid #000000' }}>
                                    <div className="mx-2 my-2">

                                        <div className="row ">
                                            <div className="col-md col-sm-12">
                                                <div className="px-2 text-center">
                                                    <p>Annual Total</p>
                                                    <span className={`h6`}><b>₦</b></span>
                                                    <span className={`h4`}><b>25.73</b></span>
                                                </div>
                                            </div>
                                            <div className="col-md col-sm-12 my-1 text-center" >
                                                <div className="pl-2" style={{ borderLeft: '1px solid #000000' }}>
                                                    <p>Daily Average</p>
                                                    <span ><b>₦</b></span>
                                                    <span className={`h5`}><b>25.73</b></span>
                                                </div></div>
                                            <div className="col-md col-sm-12 my-2 text-center" >
                                                <div className="pl-2" style={{ borderLeft: '1px solid #000000' }}>
                                                    <p>Monthly Average</p>
                                                    <span><b>₦</b></span>
                                                    <span className={`h5`}><b>25.73</b></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*  */}
                            <div className="">
                                <div className="text-dark h5">Load generated</div>

                                <div style={{ borderLeft: '1px solid #000000' }} className="my-2">
                                    <div className="mx-2">

                                        <div className="row">
                                            <div className="col-md-5 col-sm-12 text-center" style={{ paddingRight: '7px' }}>
                                                <div className="pl-2">
                                                    <p>Annual Total</p>
                                                    <span className={`h4`}><b>64,234</b></span>
                                                    <span className={`h6`}> <b>{` kw`} </b></span>

                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12  my3Mobile text-center" >
                                                <div className="pl-2" style={{ borderLeft: '1px solid #000000' }}>
                                                    <p>Daily Average</p>

                                                    <span className={`h5`}><b>72</b></span>
                                                    <span ><b>{` kw`}</b></span>
                                                </div></div>
                                            <div className="col-md col-sm-12  my3Mobile text-center" >
                                                <div className="pl-2" style={{ borderLeft: '1px solid #000000' }}>
                                                    <p>Monthly Average</p>

                                                    <span className={`h5`}><b>598</b></span>
                                                    <span> <b>{` kw`} </b> </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5  mt-3 removePadLeftRight">

                            {/* <UserIcon/> */}
                            <div className="py-3 bg-white">
                                <div className="text-center h5"><b>Network Analysis</b> </div>
                                <div className="text-center my-3"><img src="/images/dashboard/analysis.svg" alt="analysis" /></div>
                                {/* Accounting Dept */}
                                <div className="d-flex justify-content-around">
                                    <div className="px-1" style={{ flex: '3' }}>
                                        <div className=""> <span className={`${fontNormal}  h6`}>Total Subscribers</span> </div>
                                    </div>
                                    <div className="px-1" style={{ flex: '1' }}>
                                        <div className=""><span className={`${fontNormal} h3`}><strong>500</strong></span></div>

                                    </div>
                                </div>

                                <div className="d-flex justify-content-around mt-3">
                                    <div className="px-1" style={{ flex: '3' }}>
                                        <div className=""><span className={` ${joslaGTextC} px-1`}><i className="fa fa-user"></i></span> <span className={`${fontNormal} ${netAnalysis14F} ml-2`}>Active Subscribers</span></div>

                                    </div>
                                    <div className="px-1" style={{ flex: '1' }}>
                                        <div className=""><span className={`${fontNormal} h6`}><strong>125</strong></span></div>

                                    </div>
                                </div>

                                <div className="d-flex justify-content-around mt-3">
                                    <div className="px-1" style={{ flex: '3' }}>
                                        <div className=""> <span className={`px-1 text-danger`}><i className="fas fa-exclamation-triangle"></i></span><span className={`${fontNormal}  ${netAnalysis14F} ml-2`}>Finance</span> </div>

                                    </div>
                                    <div className="px-1" style={{ flex: '1' }}>
                                        <div className=""><span className={`${fontNormal} h6`}><strong>5</strong></span></div>
                                    </div>
                                </div>


                                <div className="d-flex justify-content-around mt-3">
                                    <div className="px-1" style={{ flex: '3' }}>
                                        <div className=""><span className=""><img src="/images/dashboard/bulb.svg" alt="bulb" /></span><span className={`${fontNormal} ${netAnalysis14F} ml-2`}>Creative</span></div>
                                    </div>
                                    <div className="px-1" style={{ flex: '1' }}>
                                        <div className=""><span className={`${fontNormal} h6`}><strong>42%</strong></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                {/* mobile Revenue Generated */}
                <div className={`m-3 remMrgBtm mobileMenuD ${tabActive === 'Dynamic Price Model' && 'remMrgTop'} `}>
                    <div className="row">
                        {tabActive === 'Revenue Generated' && <div className="col-md-7 bg-white mt-2">
                            <div className="mt-3">
                                <div className="text-dark h5">Revenue generated</div>

                                <div className="mt-2" style={{ borderLeft: '1px solid #000000' }}>
                                    <div className="mx-2 my-2">

                                        <div className="row ">
                                            <div className="col-md col-sm-12">
                                                <div className="px-2 text-center">
                                                    <p>Annual Total</p>
                                                    <span className={`h6`}><b>₦</b></span>
                                                    <span className={`h4`}><b>25.73</b></span>
                                                </div>
                                            </div>
                                            <div className="col-md col-sm-12 my-1 text-center" >
                                                <div className="pl-2" style={{ borderLeft: '1px solid #000000' }}>
                                                    <p>Daily Average</p>
                                                    <span ><b>₦</b></span>
                                                    <span className={`h5`}><b>25.73</b></span>
                                                </div></div>
                                            <div className="col-md col-sm-12 my-2 text-center" >
                                                <div className="pl-2" style={{ borderLeft: '1px solid #000000' }}>
                                                    <p>Monthly Average</p>
                                                    <span><b>₦</b></span>
                                                    <span className={`h5`}><b>25.73</b></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*  */}
                            <div className="">
                                <div className="text-dark h5">Load generated</div>

                                <div style={{ borderLeft: '1px solid #000000' }} className="my-2">
                                    <div className="mx-2">

                                        <div className="row">
                                            <div className="col-md-5 col-sm-12 text-center" style={{ paddingRight: '7px' }}>
                                                <div className="pl-2">
                                                    <p>Annual Total</p>
                                                    <span className={`h4`}><b>64,234</b></span>
                                                    <span className={`h6`}> <b>{` kw`} </b></span>

                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12  my3Mobile text-center" >
                                                <div className="pl-2" style={{ borderLeft: '1px solid #000000' }}>
                                                    <p>Daily Average</p>

                                                    <span className={`h5`}><b>72</b></span>
                                                    <span ><b>{` kw`}</b></span>
                                                </div></div>
                                            <div className="col-md col-sm-12  my3Mobile text-center" >
                                                <div className="pl-2" style={{ borderLeft: '1px solid #000000' }}>
                                                    <p>Monthly Average</p>

                                                    <span className={`h5`}><b>598</b></span>
                                                    <span> <b>{` kw`} </b> </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}

                        {tabActive === 'Network Analysis' && <div className="col-md-5  mt-2 removePadLeftRight">

                            {/* <UserIcon/> */}
                            <div className="py-3 bg-white">
                                <div className="text-center h5"><b>Network Analysis</b> </div>
                                <div className="text-center my-3"><img src="/images/dashboard/analysis.svg" alt="analysis" /></div>
                                {/* Accounting Dept */}
                                <div className="d-flex justify-content-around">
                                    <div className="px-1" style={{ flex: '3' }}>
                                        <div className=""> <span className={`${fontNormal}  h6`}>Total Subscribers</span> </div>
                                    </div>
                                    <div className="px-1" style={{ flex: '1' }}>
                                        <div className=""><span className={`${fontNormal} h3`}><strong>500</strong></span></div>

                                    </div>
                                </div>

                                <div className="d-flex justify-content-around mt-3">
                                    <div className="px-1" style={{ flex: '3' }}>
                                        <div className=""><span className={` ${joslaGTextC} px-1`}><i className="fa fa-user"></i></span> <span className={`${fontNormal}  ${netAnalysis14F} ml-2`}>Active Subscribers</span></div>

                                    </div>
                                    <div className="px-1" style={{ flex: '1' }}>
                                        <div className=""><span className={`${fontNormal} h6`}><strong>125</strong></span></div>

                                    </div>
                                </div>

                                <div className="d-flex justify-content-around mt-3">
                                    <div className="px-1" style={{ flex: '3' }}>
                                        <div className=""> <span className={`px-1 text-danger`}><i className="fas fa-exclamation-triangle"></i></span><span className={`${fontNormal}  ${netAnalysis14F} ml-2`}>Finance</span> </div>

                                    </div>
                                    <div className="px-1" style={{ flex: '1' }}>
                                        <div className=""><span className={`${fontNormal} h6`}><strong>5</strong></span></div>
                                    </div>
                                </div>


                                <div className="d-flex justify-content-around mt-3">
                                    <div className="px-1" style={{ flex: '3' }}>
                                        <div className=""><span className=""><img src="/images/dashboard/bulb.svg" alt="bulb" /></span><span className={`${fontNormal} ${netAnalysis14F} ml-2`}>Creative</span></div>
                                    </div>
                                    <div className="px-1" style={{ flex: '1' }}>
                                        <div className=""><span className={`${fontNormal}h6`}><strong>42%</strong></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>


                {/* mobile button */}
                <div className={` text-center   mobileMenuD py-3 ${tabActive === '' || tabActive === 'Current Average' ? 'transparent' : 'bg-white'}`} >
                    <div onClick={() => handleClickTab('Current Average')} className="btmNavSel mx-2 card" style={{ background: `${tabActive === 'Current Average' ? '#FFFFFF' : ' #F7E249'}` }}>Regulator</div>
                    <div div className="btmNavSel mx-2 card mt-2" style={{ background: `${tabActive === 'Dynamic Price Model' ? '#FFFFFF' : ' #F7E249'}` }} onClick={() => handleClickTab('Dynamic Price Model')}>Dynamic Price Model</div>
                    <div onClick={() => handleClickTab('Revenue Generated')} className="my-2 btmNavSel mx-2 card" style={{ background: `${tabActive === 'Revenue Generated' ? '#FFFFFF' : ' #F7E249'}` }}>Revenue Generated</div>
                    <div onClick={() => handleClickTab('Network Analysis')} className="btmNavSel mx-2 card" style={{ background: `${tabActive === 'Network Analysis' ? '#FFFFFF' : ' #F7E249'}` }}>Network Analysis</div></div>
            </div>
        </div>

    </React.Fragment>);
}

export default Regulator;