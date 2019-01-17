import * as React from 'react';

interface InitState {
    sideNav: string[],
}

class AppSideNav extends React.Component {

    public state: InitState = {
        sideNav: []
    };

    constructor(props: any) {
        super(props);
        this.state.sideNav = ['冒泡排序', '选择排序', '插入排序', '希尔排序', '归并排序', '快速排序', '堆排序', '计数排序', '桶排序', '基数排序'];
    }

    public navTo = (p: string) => {
        console.log(p);
    };

    public reset = () => {
        this.setState({
            sideNav: ['主页']
        })
    };

    /**
     * fetch data
     */
    public getData = () => {
        window.fetch('/assets/nav.json').then(res => res.json()).then(
            res => {
                this.setState({
                    sideNav: res.data
                })
            }
        ).catch()
    };

    /**
     * 列表渲染 html {string}
     * @param sideNav
     */
    public buildSideNav = (sideNav: string[]) => {
        // return sideNav.map(str => <li className="list-group-item" key={str}>{str}</li>)
        return sideNav.map((str, index) =><button type="button" className="btn btn-primary" key={index} onClick={(e) => this.navTo(index.toString())}>{str}</button>)
    };

    /**
     * before render
     */
    public componentWillMount(): void {
        console.log('componentWillMount')
    }

    /**
     * destroy 销毁
     */
    public componentWillUnmount(): void {
        console.log('componentWillUnmount')
    }
    /**
     * after render
     */
    public componentDidMount(): void {
        console.log('componentDidMount')
    }

    /**
     * 渲染函数
     */
    public render(): React.ReactNode {
        return (
            <div className="app-side-nav">
                {this.buildSideNav(this.state.sideNav)}
            </div>
        );
    }
}

export default AppSideNav;
