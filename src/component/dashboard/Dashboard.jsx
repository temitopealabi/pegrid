import React from 'react';
import { Route, Link, Switch, NavLink } from "react-router-dom";
import antd from 'antd';
import { Layout, Menu, Icon } from 'antd';

import HeaderMenu from '../template/header/HeaderMenu';

import Regulator from '../regulator/Regulator';
import Consumer from '../consumer/Consumer';
import generalCss from '../general.module.css'
import './dashboard.css';







const { Header, Sider, Content } = Layout;






class Dashboard extends React.Component {
    state = { collapsed: false, derm: false };

    toggle = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };




    checker(data) {
        this.setState(prevState => { return { derm: !prevState.derm } });
        console.log(this.state.derm)
        this.toggle();
    }

    render() {
        const { robNormF, joslaText, mobileAlone, flexCon, flexConCh, flex1Ch, flex1, joslaGTextC, fh4, lastUpdate } = generalCss;
        const { tabActive } = this.state;
        const { location } = this.props;
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo   my-3" >
                        {/* <div className="mx-2" style={{ minHeight: '40px' }}>
                           
                        </div> */}
                        <div className="d-flex justify-content-center">
                            <div className=" text-center ">
                                <img className="my-2" width="80%" src="/images/dashboard/pegrid.svg" alt="logo_pegrid" />
                            </div>
                        </div>

                    </div>
                    <Menu className="" theme="dark" mode="inline" selectedKeys={[location.pathname]}
                        defaultSelectedKeys={['/dashboard/regulator']}>
                        <Menu.Item key="/dashboard/regulator" className="my-4">
                            <NavLink to="/dashboard/regulator" >
                                <Icon component={() => (<span className="menuIcon"><i className="fas fa-home"></i></span>)} />
                                <span className="h5 text-white">Regulators</span>
                            </NavLink>
                        </Menu.Item>

                        <Menu.Item key="2" className="my-4">
                            {/* <img className="mb-2" src="/images/dashboard/sidebar/User.svg" alt="userIcon" /> */}
                            <Icon component={() => (<span className="menuIcon"><i className="fas fa-user-cog"></i></span>
                            )} />
                            <span className="h5">Genco</span>
                        </Menu.Item>
                        <Menu.Item key="3" className="my-4">
                            <Icon component={() => (<span className="menuIcon"><i className="fas fa-user-tag"></i></span>)} />
                            <span className="h5">Transco</span>
                        </Menu.Item>
                        <Menu.Item key="4" className="my-4">
                            <Icon component={() => (<span className="menuIcon"><i className="fas fa-user-tie"></i></span>)} />
                            <span className="h5">DisCo</span>
                        </Menu.Item>

                        <Menu.Item key="/dashboard/consumer" className="my-4">
                            <NavLink to="/dashboard/consumer">
                                <Icon component={() => (<span className="menuIcon"><i className="fas fa-users"></i></span>)} />
                                <span className="h5 text-white">Consumers</span>
                            </NavLink>
                        </Menu.Item>

                        <Menu.Item key="6" className=" sidebarLogout" style={{ minHeight: '40px' }}>
                            <Icon component={() => (<img className="mb-2" width="70%" src="/images/dashboard/josla.svg" alt="leftArrowIcon" />)} />
                            <span className="text-dark"></span>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>

                        {/* big screen */}
                        {window.screen.width > 769 ? <div className={`${flexConCh} ${mobileAlone}`} >
                            <div className={` ${flex1Ch}  `}><Icon
                                className="trigger" onClick={this.toggle}
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            />

                                <form className="d-inline form-inline my-2 my-lg-0 ">
                                    <input className="form-control w-50" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0 d-none" type="submit">Search</button>
                                </form>


                            </div>
                            <HeaderMenu chooseHeader={false} /></div> :

                            // mobile header
                            <div className="">
                                <HeaderMenu chooseHeader={true} accessData={this.state.derm} collapsedState={() => this.checker(this.state.derm)} />
                            </div>}

                    </Header>
                    {/* <Regulator /> */}

                    {/* routes */}
                    <Switch>

                        <Route path="/dashboard/regulator" render={(props) => <Regulator  {...props} />} />

                        <Route path="/dashboard/consumer" render={(props) => <Consumer {...props} />}
                        />
                    </Switch>

                </Layout>
            </Layout >
        );
    }
}

export default Dashboard;


