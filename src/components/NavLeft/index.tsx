import { Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { Props } from "react";
import * as React from "react";
// import { NavLink } from 'react-router-dom'
import { menuConfig } from "../../config/menuConfig";
import "./index.scss";


interface IState {
    menuTreeNode: any;
}


export class NavLeft extends React.Component<Props<any>, IState> {

    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuConfig);

        this.setState({
            menuTreeNode
        })
    }

    /**
     * render 菜单
     * @param data
     */
    renderMenu = (data: any) => {
        return data.map((item: any) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                {item.title}
                {/*<NavLink to={item.key}>{item.title}</NavLink>*/}
            </Menu.Item>
        })
    };

    render(): React.ReactNode {
        return (
            <div className="nav-left">
                <div className="logo">
                    <h1>React UI</h1>
                </div>
                <Menu
                    theme="dark"
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

