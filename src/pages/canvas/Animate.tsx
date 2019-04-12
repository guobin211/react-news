import React from "react";


export class Animate extends React.Component {
    context: any;

    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {

        const canvas = document.getElementById('animate-canvas') as HTMLCanvasElement;
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;
        this.context = context as any;

        // 定位中心点
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const rad = Math.PI * 2 / 100;
        // 圆动画速度
        let speed = 0.05;
        // 绘制蓝色外圈
        function blueCircle(n: number){
            context.save();
            context.beginPath();
            context.strokeStyle = "#49f";
            context.lineWidth = 12;
            context.arc(centerX, centerY, 80 , -Math.PI/2, -Math.PI/2 + n*rad, false);
            context.stroke();
            context.restore();
        }

        // 绘制白色外圈
        function whiteCircle(){
            context.save();
            context.beginPath();
            context.strokeStyle = "#A5DEF1";
            context.lineWidth = 12;
            context.arc(centerX, centerY, 80 , 0, Math.PI*2, false);
            context.stroke();
            context.closePath();
            context.restore();
        }

        // 百分比文字绘制
        function text(n: number){
            context.save();
            context.fillStyle = "#F47C7C";
            context.font = "40px Arial";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(n.toFixed(0)+"%", centerX, centerY);
            context.restore();
        }

        // 动画循环
        function drawFrame(){
            window.requestAnimationFrame(drawFrame);
            context.clearRect(0, 0, canvas.width, canvas.height);

            whiteCircle();
            text(speed);
            blueCircle(speed);

            if(speed > 100) { speed = 0; }
            speed += 0.05;
        }
        drawFrame();
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={{height: '600px'}}>
                <h1>Animate canvas</h1>
                <canvas id="animate-canvas" height="400px"/>
            </div>
        );
    }
}
