import React, { Fragment, useState, useEffect } from 'react';
import { Layout, Menu, Icon } from 'antd';
import consumerCss from './consumer.module.css';
import generalCss from '../general.module.css';
import Championship from './championship/Championship';


const { Content } = Layout;
const listConsumption = [{ id: 1, bg: '', currentUsed: '206', totalUsed: '525', titleSateClr: '', titleState: '', title: 'Unit Electricity Used', updatedTime: '2 mins' },
{ id: 2, bg: 'ml-2', currentUsed: '6', totalUsed: '20', title: 'Appliances are', titleSateClr: '#009051', titleState: 'ON', updatedTime: '2 mins' },
{ id: 3, bg: 'ml-2', currentUsed: '262', totalUsed: '1000', title: 'Energy points earned', titleSateClr: '', titleState: '', updatedTime: '2 mins' },]


const listConsumptionRate = [{ id: 1, title: 'Electricity Price', unit: '₦', rate: '25.73', parentClass: '', textF: '', percentChange: '+₦20.40(10%)', unitTile: 'per kWh', rateF: 'h4 ', bg: 'backResi', signBg: 'h6' },
{ id: 2, title: 'Energy Consumed', unit: '', rate: '78 kw', textF: '', parentClass: 'ml-2', percentChange: '-4.30(39%)', unitTile: 'per hour', rateF: 'h4 ', bg: 'backIndustrial', signBg: 'h6' },
{ id: 3, title: 'Energy Saved', unit: '', rate: '12%', textF: '', parentClass: 'ml-2', percentChange: '+13.20(19%)', unitTile: 'today', rateF: 'h4 ', bg: ' backComm', signBg: 'h6' }
]

const Consumer = () => {
    const { imgConsumer, dispUseage, dispUseageTime, enrgTips, underTitleSum, hoverAssign, activeUnderTitleSum } = consumerCss;
    const { fontDark, joslaText, dispUsedUnit, remMrgBtm, fontNormal, mrgBtm6, font12, joslaGTextC, activeMouse } = generalCss;
    const [activeSumTab, SetActiveSumTab] = useState('Championship');

    function handleUniqueMenu(data) {
        console.log(data);
        SetActiveSumTab(data)

    }

    return (<Fragment>
        <div style={{ height: '95vh' }}>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <Content
                            style={{
                                margin: '20px 8px', padding: 10,
                                background: '#fff', minHeight: 280,
                            }}>
                            <div className=" " style={{ position: 'relative' }}>
                                {/* for the left side */}
                                <div className="card" style={{ background: '#DD9B24' }}>
                                    <div className="d-flex">
                                        <div style={{ flex: '3' }}>
                                            <div className="text-white mx-2 mt-2 h4">Hello, Johnny Bravo {`{12620012} `}!</div>
                                            <p className=" mx-2 ">Welcome to your portal</p>
                                        </div>
                                        <div style={{ flex: '1' }}>
                                            <div id={imgConsumer} >
                                                <div className="mx-2"> <img width="80" src="/images/consumer/discoLogo.png" alt="disco logo" /></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="clearfix"></div>
                            {/* types of consumption */}

                            {/* dispUseage */}
                            <div className="pt-5">
                                <div className="d-flex justify-content-between " >
                                    {listConsumption.map((data, index) => (
                                        <div key={index} className={data.parentClass} style={{ flex: 2 }} >
                                            <div className={`${data.bg}`}>
                                                <div className={`${dispUseage} py-2 px-3`}>
                                                    <div className="mt-1 "><span>
                                                        <span className="h5"><b>{`${data.currentUsed} `}</b></span>
                                                        <span>{`/ `} </span>
                                                        <span className={dispUsedUnit}><b>{data.totalUsed}</b></span>
                                                    </span></div>
                                                    <div className="mt-1"> {data.title} <span style={{ color: `${data.titleSateClr}` }}> {data.titleState} </span></div>
                                                    <div className="mt-1 "><span className={` ${dispUseageTime} `}><img width="15px" src="/images/dashboard/lastUp.svg" alt="lastUp" /></span>
                                                        <span className={` ${dispUseageTime} mx-2`}>Last updated</span>
                                                        <span className={` ${dispUseageTime} mr-2`}> {`${data.updatedTime} `} ago </span></div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}

                                </div>
                            </div>

                        </Content>
                    </div>
                </div>

                {/* right side of the screen */}
                <div className="col-md-6 p-4  ">
                    {/* <div>
                        <span className={` ${fontDark}  h4`}>17:55</span>
                        <span className={`${fontDark} px-2`}>Wednesday, 1 April 2020</span>
                        <span class=""><img src="/images/dashboard/moon.svg" width="35" alt="moon" /></span>
                        <span><div className="d-inline">32ºC </div>
                            <div className="d-inline">34ª / 26ª </div></span>
                        <span></span>
                    </div> */}

                    <div className="mx-3">
                        <div className="d-flex  justify-content-between">
                            <div className={` ${fontDark}  h4`}>17:55</div>
                            <div className={`${fontDark} px-2`}>Wednesday, 1 April 2020</div>
                            <div class=""><img src="/images/dashboard/moon.svg" width="35" alt="moon" /></div>
                            <div><div className={`${remMrgBtm} h5`}><b>32ºC </b></div>
                                <div className={` ${joslaText}`}>34ª / 26ª </div></div>

                            <div><div className={dispUsedUnit}>Mostly Sunny</div>
                                <div className={dispUsedUnit}> Chance of Rain: 10% </div></div>
                        </div>

                        {/*  */}
                        <div className="my-2" id={enrgTips}>
                            <div className="py-2 px-2"><span className="" style={{ color: '#525E59' }}>Energy Tips</span>
                                <span className="mx-2"><img src="/images/consumer/thunder.svg" alt="thunder icon" /></span></div>
                            <div className={`px-2 ${fontNormal} pb-2`}>Make sure to turn all lights off when not in use during the day</div>
                        </div>

                        {/* electricity regulator */}
                        {/* dispUseage */}
                        <div className="my-3">
                            <div className="d-flex justify-content-between " >
                                {listConsumptionRate.map((data, index) => (
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
                        </div>
                    </div>


                </div>

            </div>

            {/* Summary of quick menu */}
            <div className="container-fluid ">
                <div className="bg-white" style={{ borderRadius: '10px' }}>
                    <div className="container">
                        <div className="d-flex justify-content-between py-2">
                            <div className={`${hoverAssign}  ${activeMouse}`} onClick={() => handleUniqueMenu('Electricity Consumption')}>
                                <div className={`text-center  `}>Electricity Consumption</div>
                                <div className={`text-center mx-2 my-1 ${underTitleSum}`}><div className=" " style={{ height: '2px' }}></div></div>
                            </div>
                            <div className={`${hoverAssign}  ${activeMouse}`} onClick={() => handleUniqueMenu('Disaggregation')}>
                                <div className={`text-center  `}>Disaggregation</div>
                                <div className={`text-center mx-2  my-1 ${underTitleSum}`}><div className=" " style={{ height: '2px' }}></div></div>
                            </div>
                            <div className={`${hoverAssign}  ${activeMouse}`} onClick={() => handleUniqueMenu('Billing and Statement')}>
                                <div className={`text-center `}>Billing and Statement</div>
                                <div className={`text-center mx-2  my-1 ${underTitleSum}`}><div className=" " style={{ height: '2px' }}></div></div>
                            </div>
                            <div className={`${hoverAssign} ${activeMouse}`} onClick={() => handleUniqueMenu('Championship')}>
                                <div className={`text-center `}>Championship</div>
                                <div className={`text-center mx-2 my-1 ${underTitleSum} ${activeSumTab === 'Championship' && `${activeUnderTitleSum}`}`}><div className=" " style={{ height: '2px' }}></div></div>
                            </div>
                        </div>

                        {/* conditional slide for each summary */}
                        {activeSumTab === 'Championship' && <Championship />}
                    </div>
                </div>
            </div>
        </div>
    </Fragment>);
}

export default Consumer;
