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


// {this.props.chooseHeader === false ? <Menu className={`headerEdit ${floatToRight} `} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal"
//                     style={{ borderBottomWidth: '0px' }}>

//                     <Menu.Item className="mt-3" key="bar">
//                         <Icon component={() => (<span style={{ color: '#F7E249' }}><i className="fa fa-bell" style={{ fontSize: '2rem' }}></i></span>)} />
//                     </Menu.Item>

//                     <Menu.Item className="mt-3" key="mail">
//                         <Icon component={() => (<span className="text-white"><i className="fa fa-comments" style={{ fontSize: '2rem' }}></i></span>)} />
//                     </Menu.Item>

//                     <SubMenu className="mt-3 pr-3" style={{ position: 'relative' }}
//                         title={
//                             <React.Fragment>
//                                 <span className="submenu-title-wrapper editColor">
//                                     <span>
//                                         <Icon component={() => (<img className="mb-2 " src="/images/dashboard/profiledummy.svg" width="70%" alt="homeIcon" />)} />
//                                         <span>John Doe</span>

//                                     </span>
//                                 </span>
//                                 <div className="addJobTitle  mt-2">Lead Analyst</div>
//                             </React.Fragment>
//                         }
//                     >
//                         <Menu.ItemGroup title="Setting">
//                             <Menu.Item className="wFont dropChild" key="setting:1">Logout</Menu.Item>
//                             <Menu.Item className="wFont dropChild" key="setting:2">Profile</Menu.Item>
//                         </Menu.ItemGroup>
//                         {/* <Menu.ItemGroup title="Item 2">
//                             <Menu.Item className="wFont dropChild" key="setting:3">Option 3</Menu.Item>
//                             <Menu.Item className="wFont dropChild" key="setting:4">Option 4</Menu.Item>
//                         </Menu.ItemGroup> */}
//                     </SubMenu>
//                 </Menu> : <Menu className="headerEdit " onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
//                         <Menu.Item key="mail">
//                             <MailOutlined />
//               Navigation One
//             </Menu.Item>
//                         <Menu.Item key="bars">
//                             <MailOutlined />
//               Navigation Two
//             </Menu.Item>
//                         <SubMenu
//                             title={
//                                 <span className="submenu-title-wrapper">
//                                     <SettingOutlined />
//                   Navigation Three - Submenu
//                 </span>
//                             }
//                         >
//                             <Menu.ItemGroup title="Setting">
//                                 <Menu.Item key="setting:1">Logout</Menu.Item>
//                                 <Menu.Item key="setting:2">Profile</Menu.Item>
//                             </Menu.ItemGroup>
//                             {/* <Menu.ItemGroup title="Item 2">
//                                 <Menu.Item key="setting:3">Option 3</Menu.Item>
//                                 <Menu.Item key="setting:4">Option 4</Menu.Item>
//                             </Menu.ItemGroup> */}
//                         </SubMenu>

//                     </Menu>}




//  FOR  dashboard header
//  {/* big screen */}
//  {window.screen.width > 769 ?  <div className={`${flexConCh} ${mobileAlone}`} > 
//  <div className={ ` ${flex1Ch}  `}><Icon
//       className="trigger" onClick={this.toggle}
//       type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
//   /> 

//   <form className="d-inline form-inline my-2 my-lg-0 ">
// <input className="form-control w-50" type="search" placeholder="Search" aria-label="Search"/>
// <button className="btn btn-outline-success my-2 my-sm-0 d-none" type="submit">Search</button>
// </form>


//   </div>
//  <HeaderMenu chooseHeader={false}/></div>  :

//   // mobile header
//    <div className="mobileMenuD">
//    <HeaderMenu chooseHeader={true} accessData={this.state.derm} collapsedState={()=>this.checker(this.state.derm)}   />
//    </div>}










// <Menu className={`headerEdit ${floatToRight} mobileMenu`} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal"
// style={{ borderBottomWidth: '0px' }}>

// <Menu.Item className="mt-3" key="bar">
//     <Icon component={() => (<span style={{ color: '#F7E249' }}><i className="fa fa-bell" style={{ fontSize: '2rem' }}></i></span>)} />
// </Menu.Item>

// <Menu.Item className="mt-3" key="mail">
//     <Icon component={() => (<span className="text-white"><i className="fa fa-comments" style={{ fontSize: '2rem' }}></i></span>)} />
// </Menu.Item>

// <SubMenu className="mt-3 pr-3" style={{ position: 'relative' }}
//     title={
//         <React.Fragment>
//             <span className="submenu-title-wrapper editColor">
//                 <span>
//                     <Icon component={() => (<img className="mb-2 " src="/images/dashboard/profiledummy.svg" width="70%" alt="homeIcon" />)} />
//                     <span>John Doe</span>

//                 </span>
//             </span>
//             <div className="addJobTitle  mt-2">Lead Analyst</div>
//         </React.Fragment>
//     }
// >
//     <Menu.ItemGroup title="Setting">
//         <Menu.Item className="wFont dropChild" key="setting:1">Logout</Menu.Item>
//         <Menu.Item className="wFont dropChild" key="setting:2">Profile</Menu.Item>
//     </Menu.ItemGroup>
//     {/* <Menu.ItemGroup title="Item 2">
//         <Menu.Item className="wFont dropChild" key="setting:3">Option 3</Menu.Item>
//         <Menu.Item className="wFont dropChild" key="setting:4">Option 4</Menu.Item>
//     </Menu.ItemGroup> */}
// </SubMenu>
// </Menu>


// {/*  */}
// <Menu className="headerEdit  navigationState" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
// <Menu.Item key="mail">
//     <MailOutlined />
// Navigation One
// </Menu.Item>
// <Menu.Item key="bars">
//     <MailOutlined />
// Navigation Two
// </Menu.Item>
// <SubMenu
//     title={
//         <span className="submenu-title-wrapper">
//             <SettingOutlined />
// Navigation Three - Submenu
// </span>
//     }
// >
//     <Menu.ItemGroup title="Setting">
//         <Menu.Item key="setting:1">Logout</Menu.Item>
//         <Menu.Item key="setting:2">Profile</Menu.Item>
//     </Menu.ItemGroup>
//     {/* <Menu.ItemGroup title="Item 2">
//             <Menu.Item key="setting:3">Option 3</Menu.Item>
//             <Menu.Item key="setting:4">Option 4</Menu.Item>
//         </Menu.ItemGroup> */}
// </SubMenu>

// </Menu>

/*
<Menu.Item className="dropChild wFont " key="mail">
                         <MailOutlined />
                           <Icon component={() => (<span style={{ color: '#F7E249' }}><i className="fa fa-bell" style={{ fontSize: '0.8rem' }}></i></span>)} />
                            <Icon component={() => (<span style={{ color: '#F7E249' }}><i className="fa fa-bell" style={{ fontSize: '0.8rem' }}></i></span>)} />
                            </Menu.Item>
<Menu.Item className="dropChild wFont " key="bars">
                         <MailOutlined />
                            <Icon component={() => (<span className="text-dark"><i className="fa fa-comments" style={{ fontSize: '0.8rem' }}></i></span>)} />
                        </Menu.Item>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                    <SettingOutlined />
                  Settings
                </span>
                            }
                        >
                            <Menu.ItemGroup title="Setting">
                                <Menu.Item className="wFont dropChild" key="setting:1">Logout</Menu.Item>
                                <Menu.Item className="wFont dropChild" key="setting:2">Profile</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
*/