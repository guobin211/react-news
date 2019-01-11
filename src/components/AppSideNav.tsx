import * as React from 'react';

class AppSideNav extends React.Component {


    public state: any = {
        sideNav: null,
    };

    constructor(props: any) {
        super(props);
        this.state.sideNav = ['主页'];
        this.getData();
    }

    public getData = () => {
        window.fetch('/assets/nav.json').then(res => res.json()).then(
            res => {
                this.state.sideNav = res.data;
            }
        ).catch()
    };

    public buildSideNav = (sideNav: string[]) => {
        return sideNav.map(str => <li key={str}>{str}</li>)
    };

    public render(): React.ReactNode {
        return (
            <div className="app-side-nav">
                <ul>
                    {this.buildSideNav(this.state.sideNav)}
                </ul>
            </div>
        );
    }
}

export default AppSideNav;
