import React from "react";


export class Basic extends React.Component {

    canvasEl: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    warp = {
        background: '#ffffff',
        marginTop: '20px'
    }
    constructor(props: any) {
        super(props);
    }

    drawRect(ctx: CanvasRenderingContext2D) {

        ctx.fillStyle = '#f38300';
        // 实心矩形
        ctx.fillRect(250, 250, 100, 100);

        ctx.strokeStyle = '#f08300';
        // 矩形边框
        ctx.strokeRect(240, 240, 120, 120);
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        // 起始点
        ctx.moveTo(200, 100);
        ctx.lineTo(250, 50);
        ctx.lineTo(250, 150);
        ctx.fill();
    }
    drawSmall(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        // 绘制圆
        ctx.arc(300, 100, 50, 0, Math.PI * 2, true);
        // 移动画笔
        ctx.moveTo(335, 100);
        // 绘制半圆
        ctx.arc(300, 100, 35, 0, Math.PI, false);

        // 左侧圆
        ctx.moveTo(290,85);
        ctx.arc(280, 85, 10, 0, Math.PI * 2, true);
        // 右侧对称圆
        // 移动位置 x = 300 + (300 - 280) + 10
        ctx.moveTo(330,85);
        // x = (300-280) + 300
        ctx.arc(320, 85, 10, 0, Math.PI * 2, true);

        ctx.stroke();
    }
    // 绘制弧形
    drawRadius(ctx: CanvasRenderingContext2D){

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                ctx.beginPath();
                const x = 25 + j * 50; // x coordinate
                const y = 25 + i * 50; // y coordinate
                const radius = 20; // Arc radius
                const startAngle = 0; // Starting point on circle
                const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
                const anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

                ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

                if (i > 1) {
                    ctx.fill();
                } else {
                    ctx.stroke();
                }
            }
        }
    }
    componentDidMount(): void {
        this.canvasEl = document.getElementById('basic-canvas') as HTMLCanvasElement;
        this.context = this.canvasEl.getContext('2d') as CanvasRenderingContext2D;
        this.drawRect(this.context);
        this.draw(this.context);
        this.drawSmall(this.context);
        this.drawRadius(this.context);
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={this.warp}>
                <h1>basic canvas</h1>
                <canvas id="basic-canvas" width="800px" height="800px"/>
            </div>
        );
    }
}
