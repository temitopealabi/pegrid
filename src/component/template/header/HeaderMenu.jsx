import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons';

import generalCss from '../../general.module.css'
import './header.css'


const { SubMenu } = Menu;
class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { current: 'mail', asideMobile: 'd-none', showMobileNav: true };


    }


    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    addVariable() {
        const node = window.document.createElement("li");
        const createIcon = window.document.createElement("i");
        createIcon.className = "fa fa-bars";
        const btnNodeTwo = window.document.createElement("span");
        const btnNode = window.document.createElement("span");
        const asideTag = document.querySelector("aside");
        const asideUlTag = document.querySelector("ul.ant-menu.ant-menu-dark");
        //  ant-menu ant-menu-dark ant-menu-inline-collapsed ant-menu-root ant-menu-inline
        // 
        console.log("asideUlTag", asideUlTag);

        asideTag.classList.add(this.state.asideMobile);
        asideTag.classList.remove("ant-layout-sider", "ant-layout-sider-dark");
        asideTag.removeAttribute("style")
        asideUlTag.classList.remove("ant-menu", "ant-menu-dark", "ant-menu-root", "ant-menu-inline")
        btnNode.innerText = "X";
        btnNode.style.cursor = "pointer";
        btnNode.style.color = "#F7E249";
        btnNode.id = "mobileToggle";
        btnNode.style.fontWeight = " bold"
        btnNode.className = "trigger navigationState";

        btnNodeTwo.innerText = "X";
        btnNodeTwo.style.fontWeight = " bold"
        btnNodeTwo.style.cursor = "pointer";
        btnNodeTwo.style.color = "#F7E249";
        btnNodeTwo.id = "mobileToggleSmall";
        btnNodeTwo.className = "trigger mobileMenu";
        btnNodeTwo.setAttribute("type", this.props.accessData === false ? 'menu-fold' : 'menu-fold');

        btnNode.setAttribute("type", this.props.accessData === false ? 'menu-unfold' : 'menu-fold');
        node.className = "";
        node.appendChild(btnNode);
        node.appendChild(btnNodeTwo);
        const mobileMenuIcon = document.querySelector('ul.ant-menu-horizontal');
        mobileMenuIcon.insertBefore(node, mobileMenuIcon.childNodes[0]);
        setTimeout(() => {
            const mobileMenuIcon = document.querySelector('ul.ant-menu-horizontal')
            mobileMenuIcon.style.position = "relative";

            mobileMenuIcon.childNodes[1].className = "reshapeDiv";
            mobileMenuIcon.childNodes[1].style.position = "absolute";
            mobileMenuIcon.childNodes[1].style.color = "#FFFFFF";
            mobileMenuIcon.childNodes[1].style.top = "0";
            mobileMenuIcon.childNodes[1].style.right = "40px";
            mobileMenuIcon.childNodes[1].childNodes[0].childNodes[0].style.color = "#FFFFFF";
            mobileMenuIcon.childNodes[1].childNodes[0].childNodes[0].style.fontSize = "1rem";
            mobileMenuIcon.childNodes[1].childNodes[0].childNodes[0].innerText = "";
            mobileMenuIcon.childNodes[1].childNodes[0].childNodes[0].appendChild(createIcon)
            mobileMenuIcon.childNodes[1].childNodes[0].className = "mt-2"
            console.log(mobileMenuIcon.childNodes[1].childNodes[0].childNodes[0]);
        }, 2000);

        document.getElementById("mobileToggle").addEventListener("click", () => {
            this.props.collapsedState()
            console.log(this.props.accessData);
        });

        // get aside div
        document.getElementById("mobileToggleSmall").addEventListener("click", () => {
            console.log("how are you");
            this.setState(prevState => {
                if (this.state.showMobileNav) {
                    asideTag.classList.remove(this.state.asideMobile);
                    asideTag.classList.add("ant-layout-sider", "ant-layout-sider-dark", "ant-layout-sider-collapsed");
                    asideTag.setAttribute("style", "flex: 0 0 80px; max-width: 80px; min-width: 80px; width: 80px;")
                    asideUlTag.classList.add("ant-menu", "ant-menu-dark", "ant-menu-inline-collapsed", "ant-menu-root", "ant-menu-inline");

                } else { asideTag.classList.add(this.state.asideMobile); }
                return { showMobileNav: !prevState.showMobileNav }
            })
            console.log("showMobileNav", this.state.showMobileNav);

            // asideTag.classList.add(this.state.asideMobile);
        });

        function checkClick() {
            alert("how are you")
            // className="trigger" onClick={this.toggle}
            // type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
        }
    }
    componentDidMount() {
        // this.addVariable();
        if (window.screen.width < 769 && this.props.chooseHeader === true) {
            console.log("its small screen", window.screen.width);

            this.addVariable()
        }
        console.log(this.props.collapsed)
    }

    render() {
        const { floatToRight } = generalCss;
        return (
            <React.Fragment>
                {this.props.chooseHeader === false ? <Menu className={`headerEdit ${floatToRight} `} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal"
                    style={{ borderBottomWidth: '0px' }}>

                    <Menu.Item className="mt-3" key="bar">
                        <Icon component={() => (<span style={{ color: '#F7E249' }}><i className="fa fa-bell" style={{ fontSize: '2rem' }}></i></span>)} />
                    </Menu.Item>

                    <Menu.Item className="mt-3" key="mail">
                        <Icon component={() => (<span className="text-white"><i className="fa fa-comments" style={{ fontSize: '2rem' }}></i></span>)} />
                    </Menu.Item>

                    <SubMenu className="mt-3 pr-3" style={{ position: 'relative' }}
                        title={
                            <React.Fragment>
                                <span className="submenu-title-wrapper editColor">
                                    <span>
                                        <Icon component={() => (<img className="mb-2 " src="/images/dashboard/profiledummy.svg" width="70%" alt="homeIcon" />)} />
                                        <span>John Doe</span>

                                    </span>
                                </span>
                                <div className="addJobTitle  mt-2">Lead Analyst</div>
                            </React.Fragment>
                        }
                    >
                        <Menu.ItemGroup title="Setting">
                            <Menu.Item className="wFont dropChild" key="setting:1">Logout</Menu.Item>
                            <Menu.Item className="wFont dropChild" key="setting:2">Profile</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu> : <Menu className="headerEdit " onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item className="dropChild wFont " key="mail">
                            {/* <MailOutlined /> */}
                            <Icon component={() => (<span style={{ color: '#F7E249' }}><i className="fa fa-bell" style={{ fontSize: '0.8rem' }}></i></span>)} />
                        </Menu.Item>
                        <Menu.Item className="dropChild wFont " key="bars">
                            {/* <MailOutlined /> */}
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

                    </Menu>}
            </React.Fragment>
        );
    }
}

export default HeaderMenu;

