import React from "react";


export class High extends React.Component {

    state: {};

    constructor(props: any) {
        super(props);
    }

    componentWillMount(): void {
        console.log('componentWillMount')
    }

    componentDidMount(): void {
        console.log('componentDidMount')
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <h1>high canvas</h1>
                <canvas id="high-canvas"/>
            </div>
        );
    }
}
