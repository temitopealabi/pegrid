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
        this.state = { current: 'mail', };


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
        const btnNode = window.document.createElement("span");
        btnNode.innerText = "X";
        btnNode.style.cursor = "pointer";
        btnNode.style.color = "#F7E249";
        btnNode.id = "mobileToggle";
        btnNode.className = "trigger";
        btnNode.setAttribute("type", this.props.accessData === false ? 'menu-unfold' : 'menu-fold')
        node.className = "";
        node.appendChild(btnNode);
        const der = document.querySelector('ul.ant-menu-horizontal')
        der.insertBefore(node, der.childNodes[0]);
        setTimeout(() => {
            const der = document.querySelector('ul.ant-menu-horizontal')
            der.style.position = "relative";
            // const menuToggle = document.querySelector('li.ant-menu-submenu-selected');
            // der.insertBefore(node, der.childNodes[0]);

            der.childNodes[1].className = "reshapeDiv";
            console.log(der.childNodes[1]);
            der.childNodes[1].style.position = "absolute";
            der.childNodes[1].style.color = "#FFFFFF"
            // der.childNodes[1].style.fontSize
            der.childNodes[1].style.top = "0";
            der.childNodes[1].style.right = "40px";
            der.childNodes[1].childNodes[0].childNodes[0].style.color = "#FFFFFF";
            der.childNodes[1].childNodes[0].childNodes[0].style.fontSize = "1rem";
            der.childNodes[1].childNodes[0].childNodes[0].innerText = "";
            der.childNodes[1].childNodes[0].childNodes[0].appendChild(createIcon)
            console.log(der.childNodes[1].childNodes[0].childNodes[0]);
        }, 2000);

        document.getElementById("mobileToggle").addEventListener("click", () => {
            this.props.collapsedState()
            console.log(this.props.accessData);

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
                        {/* <Menu.ItemGroup title="Item 2">
                            <Menu.Item className="wFont dropChild" key="setting:3">Option 3</Menu.Item>
                            <Menu.Item className="wFont dropChild" key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup> */}
                    </SubMenu>
                </Menu> : <Menu className="headerEdit " onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="mail">
                            <MailOutlined />
              Navigation One
            </Menu.Item>
                        <Menu.Item key="bars">
                            <MailOutlined />
              Navigation Two
            </Menu.Item>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                    <SettingOutlined />
                  Navigation Three - Submenu
                </span>
                            }
                        >
                            <Menu.ItemGroup title="Setting">
                                <Menu.Item key="setting:1">Logout</Menu.Item>
                                <Menu.Item key="setting:2">Profile</Menu.Item>
                            </Menu.ItemGroup>
                            {/* <Menu.ItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </Menu.ItemGroup> */}
                        </SubMenu>

                    </Menu>}
            </React.Fragment>
        );
    }
}

export default HeaderMenu;

